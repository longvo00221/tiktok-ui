import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { useState } from "react";
import {Wrapper as PopperWrapper} from '~/components/Poppers'
import Header from "./header";
import styles from './Menu.module.scss';
import MenuItem from "./MenuItem";
const cx = classNames.bind(styles)
const defaultFn = () =>{}
function Menu({children, items=[],hideOnClick= false , onChange = defaultFn }) {
    const [history,setHistory] = useState([{data: items}]);
    const current = history[history.length -1]
    // xử lý logic để render ra menu
    const renderItems = () =>{
        return current.data.map((item,index)=>{
            
                const isParent = !!item.children
                return <MenuItem key={index} data={item} onClick={()=>{
                    if(isParent){
                        setHistory(prev => [...prev,item.children]);
                    }else{
                        onChange(item)
                    }
                }}/>
            })
            
        
    }
    // 
    return ( <Tippy
        delay={[0,700]}
         interactive
         placement='bottom-end'
         hideOnClick={hideOnClick}
         render={(attrs)=>(
           
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-poper')}>
                        {history.length >1 && <Header title="Languages" onBack={
                            ()=>(
                                setHistory(prev => prev.slice(0,prev.length -1))
                                )
                            } />}
                        {renderItems()}
                    </PopperWrapper>
                </div>
           
        )}
        onHide={()=> setHistory((prev)=>prev.slice(0,1))}
        >
            {children}
        </Tippy> );
}

export default Menu;