import React from 'react';
import { ViewAllreviews, ViewAll_toggle } from './Styles.jsx';
 
const ViewAll = (props) => {
    let extend;
    if( !props.extent ) extend = <a className="view_all_critic_reviews" onClick={props.extendAR}>View All Reviews</a>;
    else extend = <a className="view_all_critic_reviews" onClick={props.extendAR}>View Top 10 Reviews</a>;
    return (
        <ViewAllreviews className="view-all">            
            {extend}            
        </ViewAllreviews>
    )
}

export default ViewAll;