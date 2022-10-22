import classNames from "classnames/bind";
import styles from '../AccountItem/AccountItem.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles)
function AccountItem() {
    return ( <div className={cx('wrapper')}>
        <img className={cx('avatar')} src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1662216470860802.jpeg?x-expires=1666584000&x-signature=5ac%2BCiiBFh0nKgjycfk4XqDQ38o%3D" alt=""/>
        <div className={cx('info')}>
            <p className={cx('name')}>
                <span>Nguyen Van A</span>
                <FontAwesomeIcon icon={faCheckCircle} className={cx('iconcheck')}/>
            </p>
            <span className={cx('username')}>nguyenvana</span>
        </div>
    </div> );
}

export default AccountItem;