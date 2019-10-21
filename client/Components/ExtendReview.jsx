import React from 'react';

const ExtendReview = (props) => {
    let extToggle;
    if (!props.extentR) {
      extToggle = <a className="review_extend" onClick={props.extendR}> Full Review </a>
    } else {
      extToggle = <a className="review_extend" onClick={props.extendR}> Pre Review </a>
    }
   return (
    <>
        {extToggle}
    </>
   ) 
}

export default ExtendReview;