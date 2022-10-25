import {useState,useEffect,useRef} from 'react'

import { useDebounce } from '~/hooks';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Search.module.scss'
import * as searchServices from '~/apiServices/searchServices'
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

    const debounced = useDebounce(searchValue,800)

    useEffect(()=>{
        if(!debounced.trim()){
            setSearchResult([])
            return;
        }
        setLoading(true)
        // gọi hàm async bất đồng bộ để gán res await request.get
        
        const fetchApi = async () => {
            setLoading(true)
            const result = await searchServices.search(debounced)
            setSearchResult(result)
            setLoading(false)
        }

        fetchApi()
        

        
    },[debounced])
    const handleHideResults = () => {
        setShowResult(false)
    }
    const handleChange = (e) => {
        const searchValue = e.target.value
        if(!searchValue.startsWith(' ')) {
            setSearchValue(searchValue)
        }

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
                        onChange={handleChange}
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
                            
                        <button className={cx('search-btn')} onMouseDown={e=>e.preventDefault()}>
                                <FontAwesomeIcon  icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
     );
}

export default Search;