import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import {Wrapper as PopperWrapper} from '~/components/Poppers'
import styles from './Menu.module.scss';
import MenuItem from "./MenuItem";
const cx = classNames.bind(styles)
function Menu({children, items=[] }) {
    const renderItems = () =>{
        return items.map((item,index)=>(
            <MenuItem key={index} data={item} />
        ))
    }
    // render phải gọi qua hàm và khi return để map qua , map qua thì sẽ tách từ nhiều thành ít nên cần một component con để nhận lấy giá trị
    return ( <Tippy
        delay={[0,700]}
         interactive
         placement='bottom-end'
         render={(attrs)=>(
           
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-poper')}>
                        {renderItems()}
                    </PopperWrapper>
                </div>
           
        )}>
            {children}
        </Tippy> );
}

export default Menu;