import React from 'react';
import { Extend_style } from './Styles.jsx';

const ExtendReview = (props) => {
    let extToggle;
    if (!props.extentR) {
      extToggle = <Extend_style className="review_extend" onClick={props.extendR}> Full Review </Extend_style>
    } else {
      extToggle = <Extend_style className="review_extend" onClick={props.extendR}> Pre Review </Extend_style>
    }
   return (
    <>
        {extToggle}
    </>
   ) 
}

export default ExtendReview;