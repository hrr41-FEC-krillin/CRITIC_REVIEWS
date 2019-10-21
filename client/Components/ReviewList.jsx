import React from 'react';
import ReviewSource from './ReviewSource.jsx';
import ViewAll from './ViewAll.jsx';
import CReview from './CReview.jsx';

const ReviewList = (props) => {
    // console.log("RL",props)
    let currtList;
    props.extent ? currtList = props.list.concat(props.extList) : currtList = props.list;
    // console.log("currentList", currtList)
    return(
        <div id="cr_reviews">
        {
            currtList.map((item, index) => (
                <ul key={index}><li className="quote_bubble  top_critic pull-left cl">
                        <CReview item={item.reviews} key={index} />                            
                        <ReviewSource photo={item.user_photo} username={item.user_name} publication={item.reviews.publication} topCritic={item.reviews.rank}/>
                </li></ul>
            ))
        }

        <ViewAll extendAR={props.extendAR} extent={props.extent}/>
        </div>
    )
}

export default ReviewList;