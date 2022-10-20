import styles from './Header.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleXmark ,faMagnifyingGlass,faSpinner} from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames/bind';
import images from '~/assets/images';
const cx = classNames.bind(styles)
function Header() {
    return (
         <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tiktok"/>
                </div>

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
                
                <div className={cx('actions')}>

                </div>
            </div>
         </header> 

    );
}

export default Header;