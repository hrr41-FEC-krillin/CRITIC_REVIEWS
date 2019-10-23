import React from 'react';
import { ViewAllreviews, ViewAll_toggle } from './Styles.jsx';
 
const ViewAll = (props) => {
    let extend;
    if( !props.extent ) extend = <ViewAll_toggle className="view_all_critic_reviews" onClick={props.extendAR}>View All Reviews</ViewAll_toggle>;
    else extend = <ViewAll_toggle className="view_all_critic_reviews" onClick={props.extendAR}>View Top 10 Reviews</ViewAll_toggle>;
    return (
        <ViewAllreviews className="view-all">            
            {extend}            
        </ViewAllreviews>
    )
}

export default ViewAll;