/* eslint-disable camelcase */
import Style from 'styled-components';

export const ContentReviews = Style.section`
    font-family: sans-serif;
    -webkit-tap-highlight-color: transparent;
    font-size: 16px;
    line-height: 1.25;
    -webkit-font-smoothing: antialiased;
    color: #2A2C32;
    box-sizing: border-box;
    display: block;
    margin-bottom: 20px;
    background-color: #FFF;
    border-radius: 0;
    box-shadow: none;
    border: none;
    clear: both;
    cursor: default;
`;

export const Title_style = Style.h2`
    @import url('https://fonts.googleapis.com/css?family=PT+Sans+Narrow&display=swap');

    font-family: 'PT Sans Narrow', sans-serif;    
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    cursor: default;
    box-sizing: border-box;
    margin-bottom: 6px;
    margin-top: 4px;
    border-bottom: 1px solid transparent;
    font-weight: 600;
    line-height: 26px;
    width: 100%;
    position: relative;
    overflow: hidden;
    font-size: 28px;
    border-radius: 0;
    clear: left;
    color: #2A2C32;
    text-transform: uppercase;
    padding: 10px 15px 10px 25px;
    float: initial;
    padding-left: 25px;
    ::before {
        background-color: #FA320A;
        content: ' ';
        min-width: 20px;
        height: 20px;
        position: absolute;
        left: 0;
    }

    ::after {
        content: ' ';
        display: inline-block;
        background-color: #FA320A;
        min-width:20px;
        height: 20px;
        position: absolute;
        margin-left: 10px;
        width: 100%;
    }
`;

export const Panel_body = Style.div`
    @import url('https://fonts.googleapis.com/css?family=PT+Sans+Narrow&display=swap');

    font-family: 'PT Sans Narrow', sans-serif;
    -webkit-tap-highlight-color: transparent;
    font-size: 16px;
    line-height: 1.25;
    -webkit-font-smoothing: antialiased;
    color: #2A2C32;
    cursor: default;
    box-sizing: border-box;
    padding: 15px;
    clear: both;
    overflow: hidden;
`;

export const CriticHeaders = Style.p`    
    -webkit-tap-highlight-color: transparent;
    line-height: 1.25;
    -webkit-font-smoothing: antialiased;
    color: #2A2C32;
    cursor: default;
    box-sizing: border-box;
    margin: 0 0 10px;
    ::before {
        content: " ";
        display: table;
        box-sizing: border-box;
    }
`;

export const CriticHeadersSort = Style.a`
    @import url('https://fonts.googleapis.com/css?family=Crimson+Text&display=swap');
    font-family: 'Crimson Text', serif;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    background-color: transparent;
    text-decoration: none;
    font-size: 14px;
    line-height: 18px;
    color: gray;
`;
export const Cr_reviews = Style.div`
    -webkit-tap-highlight-color: transparent;
    font-size: 16px;
    line-height: 1.25;
    -webkit-font-smoothing: antialiased;
    color: #2A2C32;
    cursor: default;
    column-fill: balance;
    column-gap: 50px;
    position: relative;
    font-family: 'PT Sans Narrow', sans-serif;
    box-sizing: border-box;
`;

export const Top_critic = Style.li`
    -webkit-tap-highlight-color: transparent;
    font-size: 16px;
    line-height: 1.25;
    -webkit-font-smoothing: antialiased;
    color: #2A2C32;
    cursor: default;
    font-family: 'PT Sans Narrow', sans-serif;
    list-style-type: none;
    box-sizing: border-box;
    float: left!important;
    clear: ${(props) => (props.key % 2 === 0 ? 'left' : 'right')};
    margin-top: 15px;
    margin-right: 30px;
    width: 346.5px;
`;

export const Review_quote = Style.div`
    -webkit-tap-highlight-color: transparent;
    font-size: 16px;
    line-height: 1.25;
    -webkit-font-smoothing: antialiased;
    color: #2A2C32;
    cursor: default;
    font-family: 'PT Sans Narrow', sans-serif;
    list-style-type: none;
    box-sizing: border-box;
    border-radius: 0;
    background: #FFF;
    position: relative;
    width: 100%;
    border: 2px solid #000;
    padding: 12px;
`;

export const Media = Style.div`
    -webkit-tap-highlight-color: transparent;
    font-size: 16px;
    line-height: 1.25;
    -webkit-font-smoothing: antialiased;
    color: #2A2C32;
    cursor: default;
    font-family: 'PT Sans Narrow', sans-serif;
    list-style-type: none;
    box-sizing: border-box;
    zoom: 1;
    overflow: hidden;
    margin-top: 0;
    ::before {
        border-color: transparent #000 transparent transparent;
        border-width: 0 28px 28px 0;
        bottom: -28px;
        left: 39px;
        z-index: 0;
        border-style: solid;
        content: '';
        display: block;
        position: absolute;
        width: 0;
    }

    ::after {
        border-color: transparent #FFF transparent transparent;
        border-width: 0 26px 26px 0;
        bottom: -25px;
        left: 40px;
        z-index: 1;
        border-style: solid;
        content: '';
        display: block;
        position: absolute;
        width: 0;
    }
`;

export const Potato_pull_left = Style.div`
    -webkit-tap-highlight-color: transparent;
    font-size: 16px;
    line-height: 1.25;
    -webkit-font-smoothing: antialiased;
    color: #2A2C32;
    cursor: default;
    font-family: 'PT Sans Narrow', sans-serif;
    list-style-type: none;
    box-sizing: border-box;
    float: left!important;
    padding-right: 10px;
`;

export const Media_img = Style.span`
-webkit-tap-highlight-color: transparent;
-webkit-font-smoothing: antialiased;
color: #2A2C32;
cursor: default;
font-family: 'PT Sans Narrow', sans-serif;
list-style-type: none;
box-sizing: border-box;
font-size: 14px;
line-height: 18px;
display: inline-block;
vertical-align: text-bottom;
height: 24px;
width: 24px;
background: url(${(props) => props.src}) no-repeat;
background-size: cover;
`;

export const Review_block = Style.blockquote`
    -webkit-tap-highlight-color: transparent;
    line-height: 1.25;
    -webkit-font-smoothing: antialiased;
    color: #2A2C32;
    cursor: default;
    font-family: 'PT Sans Narrow', sans-serif;
    list-style-type: none;
    box-sizing: border-box;
    zoom: 1;
    overflow: hidden;
    width: 10000px;
    display: table-cell;
    vertical-align: top;
    padding: 0;
    margin: 0;
    border: none;
    font-size: inherit;
`;

export const Review_style = Style.p`
    @import url('https://fonts.googleapis.com/css?family=Crimson+Text&display=swap');
    font-family: 'Crimson Text', serif;
    -webkit-tap-highlight-color: transparent;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    color: #2A2C32;
    cursor: default;
    list-style-type: none;
    box-sizing: border-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    margin-top: 15px;
    line-height: 20px;
    letter-spacing: .25px;
    margin-bottom: 10px;
    display: block;
    max-height: ${(props) => (!props.Toggle ? '5em' : 'initial!important')};    
`;
export const Extend_style = Style.a`
    -webkit-tap-highlight-color: transparent;
    line-height: 1.25;
    -webkit-font-smoothing: antialiased;
    font-family: 'PT Sans Narrow', sans-serif;
    list-style-type: none;
    font-size: 12px;
    box-sizing: border-box;
    background-color: transparent;
    color: #4472CA;
    text-decoration: none;
`;

export const Small_bar = Style.div`
    @import url('https://fonts.googleapis.com/css?family=Crimson+Text&display=swap');
    font-family: 'Crimson Text', serif;
    -webkit-tap-highlight-color: transparent;
    line-height: 1.25;
    -webkit-font-smoothing: antialiased;
    color: #2A2C32;
    cursor: default;
    list-style-type: none;
    box-sizing: border-box;
    float: right!important;
    font-size: 12px;
`;

export const Review_resource = Style.div`
    -webkit-tap-highlight-color: transparent;
    font-size: 16px;
    line-height: 1.25;
    -webkit-font-smoothing: antialiased;
    color: #2A2C32;
    cursor: default;
    font-family: 'PT Sans Narrow', sans-serif;
    list-style-type: none;
    box-sizing: border-box;
    zoom: 1;
    overflow: hidden;
    margin-left: 75px;
    margin-top: 10px;
`;

export const User_photo = Style.div`
    -webkit-tap-highlight-color: transparent;
    font-size: 16px;
    line-height: 1.25;
    -webkit-font-smoothing: antialiased;
    color: #2A2C32;
    cursor: default;
    font-family: 'PT Sans Narrow', sans-serif;
    list-style-type: none;
    box-sizing: border-box;
    float: left!important;
    padding-right: 10px;
`;

export const User_info = Style.cite`
    -webkit-tap-highlight-color: transparent;
    font-size: 16px;
    line-height: 1.25;
    -webkit-font-smoothing: antialiased;
    color: #2A2C32;
    cursor: default;
    font-family: 'PT Sans Narrow', sans-serif;
    list-style-type: none;
    box-sizing: border-box;
    zoom: 1;
    overflow: hidden;
    width: 10000px;
    display: table-cell;
    vertical-align: top;
    font-style: inherit;
`;

export const Cite_author = Style.cite`
    -webkit-tap-highlight-color: transparent;
    font-size: 16px;
    line-height: 1.25;
    -webkit-font-smoothing: antialiased;
    color: #2A2C32;
    cursor: default;
    font-family: 'PT Sans Narrow', sans-serif;
    list-style-type: none;
    font-style: inherit;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
`;

export const User_name = Style.a`
    -webkit-tap-highlight-color: transparent;
    font-size: 16px;
    line-height: 1.25;
    -webkit-font-smoothing: antialiased;
    list-style-type: none;
    font-style: inherit;
    box-sizing: border-box;
    background-color: transparent;
    text-decoration: none;
    color: #000;
    font-family: 'Franklin Gothic FS Med';
`;

export const Publication = Style.a`
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    font-family: 'PT Sans Narrow', sans-serif;
    list-style-type: none;
    font-style: inherit;
    box-sizing: border-box;
    background-color: transparent;
    text-decoration: none;
    font-size: 14px;
    line-height: 18px;
    color: #757A84;
`;

export const Superreviewer = Style.div`
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    cursor: default;
    font-family: 'PT Sans Narrow', sans-serif;
    list-style-type: none;
    font-style: inherit;
    box-sizing: border-box;
    font-size: 14px;
    line-height: 18px;
    color: #FFB600;
`;

export const ViewAllreviews = Style.div`
    -webkit-tap-highlight-color: transparent;
    font-size: 16px;
    line-height: 1.25;
    -webkit-font-smoothing: antialiased;
    color: #2A2C32;
    cursor: default;
    font-family: 'PT Sans Narrow', sans-serif;
    box-sizing: border-box;
    clear: both;
    float: right;
    margin-top: 15px;
`;

export const ViewAll_toggle = Style.a`
    -webkit-tap-highlight-color: transparent;
    font-size: 16px;
    line-height: 1.25;
    -webkit-font-smoothing: antialiased;
    font-family: 'PT Sans Narrow', sans-serif;
    box-sizing: border-box;
    background-color: transparent;
    text-decoration: none;
    color: #4472CA;
`;
