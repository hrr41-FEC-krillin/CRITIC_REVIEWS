import React from 'react';
import ExtendReview from './ExtendReview.jsx';

class CReview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currtReview: props.item,
            currtToggle: false,
        }
        this.extendToggled = this.extendToggled.bind(this);
        console.log("CR",props);
        console.log(this.state);
    }
    //method for re-setState after pass in props be changed by parent event.
    componentWillReceiveProps(props) {
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
    <div className="review_quote">
        <div className="media">
            <div className="pull-left">
            <img data-src={states.src} width="50" height="50" src={states.src} data-revealed="true" className="media-img icon small rotten" />
            </div>
            <blockquote className="media-body quote_bubble__quote" cite="http://google.com">
                
                <p onClick={this.extendToggled}>{states.postReview}</p>
            
                <div className="pull-right smaller">
                    {this.state.currtReview.date_post} | Rating: {this.state.currtReview.rate}/5 | <ExtendReview extendR={this.extendToggled} extentR={this.state.currtToggle}/>
                </div>
            </blockquote>
        </div>
    </div>
    )
    }
}

export default CReview;