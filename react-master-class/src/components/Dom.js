import React, { forwardRef, useImperativeHandle, useLayoutEffect, useRef } from "react";

const Dom = forwardRef(function Dom(props,ref) {
    const customRef = useRef(null);

    useImperativeHandle(ref, () => ({
        customFocus: () => {
            customRef.current.focus();
        }
    }));

    //only use when you get the alignment values before endering 
    useLayoutEffect(() => {
        const {height} = customRef.current.getBoundingClientRect();
        console.log(height);
    },[]);
  return <div>
    <input ref={customRef} placeholder="Enter"/>
  </div>;
});

export default Dom;
 