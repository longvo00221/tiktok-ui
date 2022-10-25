import classNames from "classnames/bind";
import styles from '../AccountItem/AccountItem.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles)
function AccountItem({data}) {
    return ( <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
        <img className={cx('avatar')} src={data.avatar} alt={data.nickname}/>
        <div className={cx('info')}>
            <p className={cx('name')}>
                <span>{data.full_name}</span>
               { data.tick && <FontAwesomeIcon icon={faCheckCircle} className={cx('iconcheck')}/>}
            </p>
            <span className={cx('username')}>{data.nickname}</span>
        </div>
    </Link> );
}

export default AccountItem;