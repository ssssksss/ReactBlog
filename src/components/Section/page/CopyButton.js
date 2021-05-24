import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard'
// import CopyButton from './CopyButton.js';
import './CopyButton.css' ;

const CopyButton = (props) => {

    return(
        <CopyToClipboard text={props.text}>
	        <button className="copybutton">{props.content}</button>
        </CopyToClipboard>
    );
}


export default CopyButton;

// npm install --save react-copy-to-clipboard
// yarn add react-copy-to-clipboard

// import { CopyToClipboard } from 'react-copy-to-clipboard';

// <CopyToClipboard text={date}>
// 	<button>시간 복사</button>
// </CopyToClipboard>

// <CopyToClipboard text={"반복적으로 애드센스 클릭 (총 " + count + "회)"}>
// 	<button>문구 복사</button>
// </CopyToClipboard>

// <CopyToClipboard text={ip} onCopy={ console.log("copy!!! " + ip) }>
// 	<button>IP 복사</button>
// </CopyToClipboard>