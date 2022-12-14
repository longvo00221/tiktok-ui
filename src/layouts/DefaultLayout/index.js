import styles from './DefaultLayout.module.scss'
import classNames from 'classnames/bind';
import Sidebar from '~/layouts/components/Sidebar/index.js'
import Header from "../components/Header/index.js";
const cx = classNames.bind(styles)
function DefaultLayout({ children }) {
    return ( 
    <div className={cx('wrapper')}>
        <Header />
        <div className={cx('container')}>
            <Sidebar />
            <div className={cx('content')}>
                {children}
            </div>
        </div>
    </div>
    );
}

export default DefaultLayout;