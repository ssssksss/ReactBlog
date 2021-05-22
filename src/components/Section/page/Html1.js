import React from 'react';
import ImageSlider from './ImageSlider.js';



const Html1 = () => {
    return(
        <div className="page_container">
            <p div="1. HTML 태그 종류"><a name="top"> </a></p>

            <p stitle="1) div태그" content="div태그란?"/>
            <p desc="div태그는 특징이 없는 태그로 가로의 공간을 모두 차지하는 특성(block속성이라한다.)만 존재한다.
            아래 2)의 span태그와 비교하기를 바란다." 
            issue="" def="<div> </div>" use="<div> HTML코드 작성 </div>" 
            example="<div style={{background: 'red'}}> div태그 </div>"> </p>
            <div style={{background: 'red'}}> div태그 </div>

            <p stitle="2) span태그" content="span태그란?"/>
            <p desc="span태그는 특징이 없는 태그로 div태그와는 달리 가로의 공간을 모두 차지하지 않고
            글씨로 작성된 공간(inline속성이라한다.)만을 차지한다." 
            issue="" def="<span> </span>" use="<span> HTML코드 작성 </span>" 
            example="<span style={{background: 'red'}}> span태그 </span>"> </p>
            <span style={{background: 'red'}}> span태그 </span>

            <p stitle="3) p태그" content="p태그란?"/>
            <p desc="p태그는 div태그+<br> (띄어쓰기) 가 추가된 태그이다. 글을 작성할때 문단을 구분해주는 용도이다."
            issue="" def="<p> </p>" use="<p> HTML 코드 작성</p>" 
            example="<p style={{background: 'red'}}> p태그 </p>"> </p>
            <p style={{background: 'red'}}> p태그 </p>

            <p stitle="4) h태그" content="h태그란?"/>
            <p desc="h태그는 h1,h2,h3,h4,h5,h6로 이루어져 있으며 각 태그마다 글자의 크기가 정해져 있는 태그이다.
            변경은 가능하지만 변경을 하지 않고 그대로 사용하는 것을 권유하는 바이다." 
            issue="" def="<h1> </h1> ~ <h6> </h6>" use="<h1> HTML 코드 작성 </h1>" 
            example="
            <h1 style={{background: 'red'}}> h1태그 </h1>
            <h2 style={{background: 'red'}}> h2태그 </h2>
            <h3 style={{background: 'red'}}> h3태그 </h3>
            <h4 style={{background: 'red'}}> h4태그 </h4>
            <h5 style={{background: 'red'}}> h5태그 </h5>
            <h6 style={{background: 'red'}}> h6태그 </h6>"> </p>
            <h1 style={{background: 'red'}}> h1태그 </h1>
            <h2 style={{background: 'red'}}> h2태그 </h2>
            <h3 style={{background: 'red'}}> h3태그 </h3>
            <h4 style={{background: 'red'}}> h4태그 </h4>
            <h5 style={{background: 'red'}}> h5태그 </h5>
            <h6 style={{background: 'red'}}> h6태그 </h6>

            <p stitle="5) a태그" content="a태그란?"/>
            <p desc="a태그는 url코드를 가지고 있는 태그이다. link로 되어있는 글을 클릭하면 다른 주소로
            이동하는 것을 보았을 텐데 그떄 사용하는 태그이다."
            issue="" def="<a> </a>" use="<a> HTML 코드 작성 </a>" 
            example="<a href='http://www.naver.com' target='blank' style={{background: 'red'}}> www.naver.com </a>"> </p>
            <a href="https://www.naver.com" target='blank' style={{background: 'red'}}> www.naver.com </a>
            <p>✔ href="#" 을 사용하면 클릭은 되지만 아무런 반응이 일어나지 않는 a태그가 된다 </p>
            <p>✔ target='blank'를 사용하면 새로운 탭을 열게된다. </p>
            <p>✔ 원래는 밑줄이 그어져 있으나 css에서 outline:none을 사용하여 밑줄이 보이지 않는다. </p>
            <p>✔ 도착지: a태그에 name='도착지이름' , 출발지: a태그에 href='#도착지이름' 이와 같이 사용하면
                맨위로 , 맨아래로, 내부 페이지에서 특정 위치로 이동이 가능하다.
                아래 예시는 도착지: name='top'  출발지: href='#top' 이와같이 설정되어 있다. 
                반드시 둘다 a태그로 구성되어 있을것 !!! </p>
            <a href="#top"> 맨위로 가기 </a>
            
            <p stitle="6) " content="란?"/>
            <p desc=""
            issue="" def="<ㅁ> </ㅁ>" use="<> HTML 코드 작성 </>" 
            example="< style={{background: 'red'}}>  </>"> </p>
            <p style={{background: 'red'}}> </p>

            <p stitle="7) " content="란?"/>
            <p desc=""
            issue="" def="<ㅁ> </ㅁ>" use="<> HTML 코드 작성 </>" 
            example="< style={{background: 'red'}}>  </>"> </p>
            <p style={{background: 'red'}}>  </p>

            <p stitle="8) " content="란?"/>
            <p desc=""
            issue="" def="<ㅁ> </ㅁ>" use="<> HTML 코드 작성 </>" 
            example="< style={{background: 'red'}}>  </>"> </p>
            <p style={{background: 'red'}}>  </p>

        </div>
    );
}

export default Html1;