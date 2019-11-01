// 转发ref的组件
import React from 'react';

export default React.forwardRef((props,ref)=>{
    return(
        <div>
            <input type="text" ref={ref}/>
        </div>
    )
})