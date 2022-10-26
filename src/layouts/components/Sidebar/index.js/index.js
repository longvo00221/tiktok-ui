import Menu,{MenuItem} from '../Menu'
import classNames from 'classnames/bind';
import styles from '../Sidebar.module.scss';
import config from '~/config';
import { HomeIcon, LiveIcon, UserGroupIcon } from '~/components/Icons';
import SuggestedAccount from '~/components/SuggestedAccount';
const cx = classNames.bind(styles)
function Sidebar() {
    return (
         <aside className={cx('wrapper')}>
            <Menu>
               <MenuItem title='For You' to={config.routes.home} icon={<HomeIcon />}/>
               <MenuItem title='Following' to={config.routes.following} icon={<UserGroupIcon />}/>
               <MenuItem title='LIVE' to={config.routes.live} icon={<LiveIcon />}/>
            </Menu>
            <SuggestedAccount label='Suggested Accounts' />
            <SuggestedAccount label='Following' />
         </aside> 
         );
}

export default Sidebar;