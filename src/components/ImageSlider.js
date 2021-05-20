import React,{useState} from 'react';
import './ImageSlider.css';

// arr=['파일명(/img/jsp3_)', '장면수', '확장자(.png)']
const ImageSlider = (props) => {
    var [pageNum,setPageNum] = useState(1);
    return (
        <>
        {props.image[1]==0?null:
            <div className="img_container" >
                <button className ="left_arrow_button arrow_button" onClick={()=> {
                    if(pageNum>1) { setPageNum(parseInt(pageNum)-1); }}}>  &lt; </button>
                <img className="img_" src={process.env.PUBLIC_URL + props.image[0] + pageNum +props.image[2]}/>
                <button className ="right_arrow_button arrow_button" onClick={()=> {
                    if(pageNum<props.image[1]) {setPageNum(parseInt(pageNum)+1);}}}> &gt; </button>
                <div className="showpagenum"> {pageNum} / {props.image[1]} </div>
            </div>
        }
        </>
    );   
 }

 export default ImageSlider;