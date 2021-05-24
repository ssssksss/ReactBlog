import React, { useState } from "react";
import "./ImageSlider.css";
import CopyButton from "./CopyButton.js";

// arr=['파일명(/img/jsp3_)', '장면수', '확장자(.png)']
// 예시코드 : <ImageSlider image={arr=['/img/jsp1/jsp1_3_','20','.png']}> </ImageSlider>
const ImageSlider = (props) => {
  var [pageNum, setPageNum] = useState(1);

  return (
    <React.Fragment>
      {props.image[1] == 0 ? null : (
        <div className="imageslider_container">
          <img
            className="img_container"
            src={process.env.PUBLIC_URL + props.image[0] + pageNum + props.image[2]}
          />
          <div className="img_button_position">
            <button
              className="left_arrow_button arrow_button"
              onClick={() => {
                if (pageNum > 1) {
                  setPageNum(parseInt(pageNum) - 1);
                }
              }}> &lt; </button>
            <div className="show_page_num"> {pageNum} / {props.image[1]} </div>
            <button
              className="right_arrow_button arrow_button"
              onClick={() => {
                if (pageNum < props.image[1]) {
                  setPageNum(parseInt(pageNum) + 1);
                }
              }}> &gt; </button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default ImageSlider;
