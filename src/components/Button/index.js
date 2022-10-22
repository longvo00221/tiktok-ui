import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from '../Button/Button.module.scss'
const cx = classNames.bind(styles)
function Button({to,href,primary=false,onlyText=false,outline=false,borderButton=false,diasbled=false,rightIcon,children,onClick}) {
    let Component = 'button'
    const props ={
        onClick
    }
   
    if(diasbled) {
        Object.keys(props).forEach((key)=>{
            if(key.startsWith('on')&& typeof props[key]==='function'){
                delete props.onClick
            }
        }) 
    }
    if(to) {
        props.to = to
        Component = Link
    }else if (href) {
        props.href=href
        Component = 'a'
    }
    // có nghĩa là tạo ra một biến classes xong truyền biến classes đó vào trong {} dòng cx('wrapper',{các biến nhận qua props và truyền bên trong này có tác dụng sẽ tạo thêm classes cho biến gán ban đầu})
    const classes = cx('wrapper',{
        primary,
        outline,
        onlyText,
        borderButton
    })
    return (
    <Component className={classes} {...props}>
        <span className={cx('title')}>{children}</span>
        {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Component>);
}

export default Button;