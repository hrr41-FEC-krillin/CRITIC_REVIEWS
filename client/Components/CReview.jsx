import React from 'react';
import ExtendReview from './ExtendReview.jsx';
import { Review_quote, Media, Potato_pull_left, Media_img, Review_block, Review_style, Small_bar } from './Styles.jsx';

class CReview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currtReview: props.item,
            currtToggle: false,
        }
        this.extendToggled = this.extendToggled.bind(this);
    }
    //method for re-setState after pass in props be changed by parent event.
    UNSAFE_componentWillReceiveProps(props) {
        this.setState({ currtReview: props.item });  
    }

    extendToggled() {
        this.setState({
            currtToggle: !this.state.currtToggle
        });
    }

    render() {
    let states = {
        title: `Original Score: ${this.state.rate}`,
        src: "",
        postReview: ""
    }
    this.state.currtReview.rate >= 3 ? states.src = "https://hrr41-fec-img.s3-us-west-1.amazonaws.com/user_pics/hp.png" : states.src = "https://hrr41-fec-img.s3-us-west-1.amazonaws.com/user_pics/sp.png"; 
    this.state.currtToggle ? states.postReview = this.state.currtReview.review : states.postReview = this.state.currtReview.review.split(".")[0].concat(" ...");
    // console.log(states);
    return(
    <Review_quote class="single_review_container">
        <Media className="media">
            <Potato_pull_left className="pull_left">
            <Media_img data-src={states.src} className="img" src={states.src} ></Media_img>
            {/* <img data-src={states.src} width="50" height="50" src={states.src} data-revealed="true" className="media-img icon small rotten" /> */}
            </Potato_pull_left>
            <Review_block className="media-body quote_bubble__quote" cite="http://google.com">
                
                <Review_style Toggle={this.state.currtToggle} className="review_paragraph" onClick={this.extendToggled}>{states.postReview}</Review_style>
            
                <Small_bar className="pull-right smaller">
                    {this.state.currtReview.date_post} | Rating: {this.state.currtReview.rate}/5 | <ExtendReview extendR={this.extendToggled} extentR={this.state.currtToggle}/>
                </Small_bar>
            </Review_block>
        </Media>
    </Review_quote>
    )
    }
}

export default CReview;