import React from 'react';
import { Review_resource, User_photo, User_info, Cite_author, User_name, Publication, Superreviewer } from './Styles.jsx';

const ReviewSource = (props) => {
    let tcToggle;
    if (props.topCritic) {
      tcToggle = <Superreviewer className="small superreviewer"><span className="glyphicon glyphicon-star"></span> Top Critic </Superreviewer>
    } else {
      tcToggle = <Superreviewer className="small superreviewer"></Superreviewer>
    }
    return(
        <Review_resource className="review_source media">
            <User_photo className="pull-left">
                <img data-src={props.photo} width="50" height="50" className="critic_thumb js-lazyLoad" src={props.photo} data-revealed="true" />
            </User_photo>
            <User_info className="media-body quote_bubble__cite">

                <Cite_author className="quote_bubble__cite-author">
                    <User_name className="unstyled articleLink fgm" >{props.username}</User_name>
                </Cite_author>
                <br/>
                <Publication className="subtle small">{props.publication}</Publication>
                {tcToggle}
            </User_info>
        </Review_resource>
    )
}

export default ReviewSource;