import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './AccountPreview.module.scss';


const cx = classNames.bind(styles)
function AccountPreview() {
    return ( 
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img className={cx('avatar')} src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/7cec370685bf0e6532573aa98e9b4cb5~c5_100x100.jpeg?x-expires=1666940400&x-signature=kh5pqavUhzKAcpGIsp4PSezI0mA%3D' alt='avatar'/>
                <Button primary>Follow</Button>
            </header>
            <div className={cx('body')}>
                <div className={cx('item-info')}>
                    <p className={cx('nickname')}>devfe68</p>
                    <p className={cx('name')}>DevFe</p>
                </div>
                <p className={cx('analytics')}>
                    <follow className={cx('analytic-group')}>
                        <strong className={cx('value')}>8.2M</strong>
                        <span className={cx('label')}>Followers</span>
                    </follow>
                    <like className={cx('analytic-group')}>
                        <strong className={cx('value')}>8.2M</strong>
                        <span className={cx('label')}>Likes</span>
                    </like>

                </p>
            </div>
        </div>
     );
}

export default AccountPreview;