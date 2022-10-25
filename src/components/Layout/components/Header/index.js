import styles from './Header.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DefaultTippy from '@tippyjs/react';
import { Link } from 'react-router-dom';
import routesConfig from '~/config/routes'
import 'tippy.js/dist/tippy.css'
import { faCircleQuestion ,faCoins,faEarthAsia,faEllipsisVertical,faGear,faKeyboard,faSignIn, faVideo} from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames/bind';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Poppers/Menu';
import { faCircleRight, faUser } from '@fortawesome/free-regular-svg-icons';
import Image from '~/components/Image/Image';
import { MessageIcon, UploadIcon, InboxIcon } from '~/components/Icons';
import Search from '../Search';
const cx = classNames.bind(styles)
function Header() {
    const handleMenuChange = (MenuItem) => {
        console.log(MenuItem);
    };
    
    const currentUser = true
    const MENU_ITEMS= [
        {
            icon: <FontAwesomeIcon icon={faEarthAsia}/>,
            title:'English',
            children:{
                title: 'Languages',
                data:[
                    {
                        type:'language',
                        code: 'en',
                        title:'english'
                    },
                    {
                        type:'language',
                        code:'vi',
                        title:'Tiếng Việt'
                    }
                ]
            }
        },
        {
            icon: <FontAwesomeIcon icon={faCircleQuestion}/>,
            title:'Feedback And Help',
            to:'/feedback'
        },
        {
            icon: <FontAwesomeIcon icon={faKeyboard}/>,
            title:'Keyboards Shortcut',
            
        }
    ]
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser}/>,
            title:'Account',
            
        },
        {
            icon: <FontAwesomeIcon icon={faCoins}/>,
            title:'Get Coins',
            
        },
        {
            icon: <FontAwesomeIcon icon={faVideo}/>,
            title:'LIVE Studio',
            
        },
        {
            icon: <FontAwesomeIcon icon={faGear}/>,
            title:'Settings',
            
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faCircleRight}/>,
            title:'Log Out',
            separate : true,
            
        },
    ]
    return (
         <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={routesConfig.home} className={cx('logo')}>
                    <img src={images.logo} alt="tiktok"/>
                </Link>
                {/* popperwrapper là thẻ cha chứa cách thẻ con bên trong bên cần một component chứa thẻ con của nó */}
                    <Search />
                   <div className={cx('actions')}>
                        {currentUser ? (
                            <>
                            <DefaultTippy content="Upload Video" placement='bottom'>
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </DefaultTippy>
                            <DefaultTippy content="Messages" placement='bottom'>
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </DefaultTippy>
                            <DefaultTippy content="Notification" placement='bottom'>
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                </button>
                            </DefaultTippy>
                            </>
                        ) : (
                        <>
                                <Button onlyText>Upload</Button>
                                <Button primary rightIcon={<FontAwesomeIcon icon={faSignIn} />}>Login</Button>
                        </>
                        )}
                        <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}> 
                        {currentUser ? (
                            <Image src='https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1662216470860802.jpeg?x-expires=1666699200&x-signature=%2B05DEIjwT93ghc21Wy70%2BuV%2BRYU%3D' className={cx('user-avatar')} alt="nguyenvana"/>
                        ):(
                            <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical}/>
                            </button>
                        )}
                        </Menu>
                </div>
               
            </div>
         </header> 

    );
}

export default Header;