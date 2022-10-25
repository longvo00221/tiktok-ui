import {useState,useEffect,useRef} from 'react'
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Search.module.scss'
import { Wrapper as PopperWrapper } from '~/components/Poppers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleXmark ,faMagnifyingGlass,faSpinner} from '@fortawesome/free-solid-svg-icons'
import AccountItem from '~/components/AccountItem';
const cx = classNames.bind(styles)
function Search() {
    // Value là giá trị nhập vào để thực hiện two-way binding
    const [searchValue, setSearchValue] = useState('');
    // để thực hiện kết quả tìm kiếm do truy xuất qua API nên sẽ trả về mảng nên phải nhận nó qua []
    const [searchResult,setSearchResult] = useState([]);
    // để kiếm tra focus
    const [showResult,setShowResult] = useState(true);
    // check loading
    const [loading,setLoading] = useState(false)

    const inputRef = useRef()

    useEffect(()=>{
        if(!searchValue.trim()){
            setSearchResult([])
            return;
        }
        setLoading(true)
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
            .then(res => res.json())
            .then(res => {
                setSearchResult(res.data);
                setLoading(false);

            })
            .catch(()=>{
                setLoading(false);
            })
    },[searchValue])
    const handleHideResults = () => {
        setShowResult(false)
    }
    return ( 
        <Tippy
                    interactive
                    placement='bottom'
                    visible={showResult && searchResult.length > 0}
                    onClickOutside={handleHideResults}
                    render={(attrs)=>(
                    
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <h4 className={cx('search-title')}>Account</h4>
                                    {searchResult.map((Result) =>(
                                        <AccountItem key={Result.id} data={Result} className={cx('account-item')} />
                                    ) )}
                                </PopperWrapper>
                            </div>
                    
                    )}>

                    <div className={cx('search')}>
                        <input 
                        ref={inputRef} 
                        value={searchValue} 
                        placeholder='Search accounts and videos'
                        onChange={e=> setSearchValue(e.target.value)}
                        onFocus={()=>{setShowResult(true)}}
                        />
                        {!!searchValue && !loading && (
                        <button className={cx('close')} onClick={()=>{
                            setSearchValue('');
                            setSearchResult([]);
                            inputRef.current.focus();
                            }}>
                            <FontAwesomeIcon icon={faCircleXmark}/>
                        </button>
                        ) }
                            
                       {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                            
                        <button className={cx('search-btn')}>
                                <FontAwesomeIcon  icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
     );
}

export default Search;