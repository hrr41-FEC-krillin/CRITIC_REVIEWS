import React from 'react';

const ViewAll = (props) => {
    let extend;
    if( !props.extent ) extend = <>View All Reviews</>;
    else extend = <>View Top 10 Reviews</>;
    return (
        <div className="view-all">
            
            <a className="view_all_critic_reviews" onClick={props.extendAR}>{extend}</a>
            
        </div>
    )
}

export default ViewAll;