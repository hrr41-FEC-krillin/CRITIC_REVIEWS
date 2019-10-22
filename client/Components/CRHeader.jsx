import React from 'react';
import ReviewList from './ReviewList.jsx';
import { Title_style, Panel_body, CriticHeaders, CriticHeadersSort } from './Styles.jsx';

const CRHeader = (props) => {
    return (
        <>
        <Title_style>Critic Reviews for <em>{props.movieName}</em></Title_style>
        <Panel_body>                
                <CriticHeaders>
                <CriticHeadersSort onClick={props.fetchSort} id={"all"}>All Critics ({props.count["All"]})</CriticHeadersSort>
                | <CriticHeadersSort onClick={props.fetchSort} id={"1"}>Top Critics ({props.count["Top Critic"]})</CriticHeadersSort>
                | <CriticHeadersSort onClick={props.fetchSort} id={"fresh"} >Fresh ({props.count["Fresh"]})</CriticHeadersSort>
                | <CriticHeadersSort onClick={props.fetchSort} id={"spoiled"}>Spoiled ({props.count["Spoiled"]})</CriticHeadersSort>
                </CriticHeaders>
        </Panel_body>
        <ReviewList list={props.list} extList={props.extList} extendAR={props.extendAR} extent={props.extent} />
        </>
    )
};

export default CRHeader; 