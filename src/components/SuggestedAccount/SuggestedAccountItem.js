import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccount.module.scss';
import Tippy from '@tippyjs/react/headless';
import {Wrapper as PopperWrapper} from '~/components/Poppers'
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles)

function SuggestedAccountItem() {
    const renderPreview = (props) => {
        return(
            <div className={cx('preview')}  tabIndex="-1" {...props}>
                <PopperWrapper>
                   <AccountPreview />
                </PopperWrapper>
            </div>
        )

    }
    return ( 
    <div>
                <Tippy
                    offset={[-20,0]}
                    interactive
                    delay={[800,0]}
                    placement='bottom'
                    render={renderPreview}
                >
                    <div className={cx('account-item')}> 
                        <img src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/7cec370685bf0e6532573aa98e9b4cb5~c5_100x100.jpeg?x-expires=1666940400&x-signature=kh5pqavUhzKAcpGIsp4PSezI0mA%3D' alt='avatar' className={cx('avatar')}/>
                        <div className={cx('item-info')}>
                            <p className={cx('nickname')}>devfe68</p>
                            <p className={cx('name')}>DevFe</p>
                        </div>
                    </div> 
                </Tippy>
    </div>
    );
}
SuggestedAccountItem.propTypes = {

}
export default SuggestedAccountItem;