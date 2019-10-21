import React from 'react';
import ReviewList from './ReviewList.jsx';

const CRHeader = (props) => {
    return (
        <>
        <h2 className="panel-heading">Critic Reviews for <em>{props.movieName}</em></h2>
        <div className="panel-body content_body">                
                <p id="criticHeaders">
                <a className="criticHeadersLink small unstyled subtle articleLink" onClick={props.fetchSort} id={"all"}>All Critics ({props.count["All"]})</a>
                | <a className="criticHeadersLink small unstyled subtle articleLink" onClick={props.fetchSort} id={"1"}>Top Critics ({props.count["Top Critic"]})</a>
                | <a className="criticHeadersLink small unstyled subtle articleLink" onClick={props.fetchSort} id={"fresh"} >Fresh ({props.count["Fresh"]})</a>
                | <a className="criticHeadersLink small unstyled subtle articleLink" onClick={props.fetchSort} id={"spoiled"}>Spoiled ({props.count["Spoiled"]})</a>
                </p>
        </div>
        <ReviewList list={props.list} extList={props.extList} extendAR={props.extendAR} extent={props.extent} />
        </>
    )
};

export default CRHeader; 