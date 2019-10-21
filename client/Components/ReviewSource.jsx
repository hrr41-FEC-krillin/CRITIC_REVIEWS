import React from 'react';
// import ReactDOM from 'react-dom';

const ReviewSource = (props) => {
    let tcToggle;
    if (props.topCritic) {
      tcToggle = <div className="small superreviewer"><span className="glyphicon glyphicon-star">STAR HERE</span> Top Critic </div>
    } else {
      tcToggle = <div className="small superreviewer"><span className="glyphicon glyphicon-star" hidden></span></div>
    }
    return(
        <div className="review_source media">
            <div className="pull-left">
                <img data-src={props.photo} width="50" height="50" className="critic_thumb js-lazyLoad" src={props.photo} data-revealed="true" />
            </div>
            <cite className="media-body quote_bubble__cite">

                <p className="quote_bubble__cite-author">
                    <a className="unstyled articleLink fgm" >{props.username}</a>
                </p>
                    <a className="subtle small" value={props.publication}></a>
                    {tcToggle}
            </cite>
        </div>
    )
}

export default ReviewSource;