import styles from './Header.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import {faCircleXmark ,faMagnifyingGlass,faSpinner} from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames/bind';
import images from '~/assets/images';
import {useState,useEffect} from 'react'
import { Wrapper as PopperWrapper } from '~/components/Poppers';
import AccountItem from '~/components/AccountItem';
const cx = classNames.bind(styles)
function Header() {
    const [searchResult,setSearchResult] = useState([]);
    useEffect(()=>{
        setTimeout(()=>{
            setSearchResult(['long','long1','long2','long3'])
        },3000) 
    },[])
    return (
         <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tiktok"/>
                </div>
                <Tippy
                interactive
                 visible={searchResult.length >0}
                 render={(attrs)=>(
                   
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Account</h4>
                                <AccountItem className={cx('account-item')} />
                                <AccountItem className={cx('account-item')} />
                                <AccountItem className={cx('account-item')} />
                                <AccountItem className={cx('account-item')} />
                            </PopperWrapper>
                        </div>
                   
                )}>

                <div className={cx('search')}>
                    <input placeholder='Search accounts and videos'/>
                    <button className={cx('close')}>
                        <FontAwesomeIcon icon={faCircleXmark}/>
                    </button>
                        
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        
                    <button className={cx('search-btn')}>
                            <FontAwesomeIcon  icon={faMagnifyingGlass} />
                    </button>
                </div>
                   </Tippy>
                
                <div className={cx('actions')}>

                </div>
            </div>
         </header> 

    );
}

export default Header;