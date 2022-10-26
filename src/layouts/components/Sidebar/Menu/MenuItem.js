import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss'
const cx = classNames.bind(styles);

function MenuItem({title,to,icon}) {
    
    return ( 
    <nav>
        {/* navlink sẽ nhận class truyền qua function và đối số của nó sẽ thể hiện trạng thái là có click vào hay không  */}
         <NavLink end className={(nav)=>cx('menu-item',{active:nav.isActive})} to={to}>
            {icon}
            <span className={cx('title')}>{title}</span>
         </NavLink>
    </nav> 
    );
}
MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired
}

export default MenuItem;