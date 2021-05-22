import React from 'react';
import ImageSlider from './ImageSlider.js';
import './page.css';

const Nodejs1 = () => {
    var arr = [];

    return(
        <div className="page_container">
            <a name="top"> </a>
            <p className="title"> Nodejs </p>
            <p className="stitle"> 1) Nodejs란? </p>
            <p>1. 자바스크립트를 서버에서 사용하는 서버사이드 스크립트 언어</p>
            <p>2. 노드 js를 이용하는 기업 window Azure, eBay, LinkedIn, PayPal 등</p>
            <p>3. 프론트엔드 분야에서 백엔드 분야까지 제어를 할 수 있다.(장점) </p>
            <p>4. V8엔진(구글엔진) 위에서 작동하는 이벤트 처리 I/O 프레임 워크</p>
            <p>5. 노드 JS는 비동기 프로그래밍이다.(장점)  </p>
            <p>6. 자바스크립트를 컴파일하고 실행할 수 있는 프레임 워크(기본 모듈이 자바스크립트)</p>
            <p>7. 웹서버 역할을 하는 내장 라이브러리가 존재하고 NPM 패키지가 포함 되어있다.</p>
            <br/>
            <p className="stitle"> 2) Nodejs 다운받기 </p>
            <a href="https://nodejs.org/en/" target="_blank"> 노드 JS 설치 👈</a>
            <p> LTS버전으로 다운 받는것을 추천, 최신버전은 문제가 존재할 수도 있으므로 비추천 </p>
            <p> cmd창 > node -v 입력 > 버전이 나오면 잘 설치가 됨 </p>
            <p> cmd창 > npm -v 입력 > 버전이 나오면 잘 설치가 됨 </p>
            <p> package.json : 데이터베이스에 있는 언어를 문서로 작성해 놓은 파일 , nodejs를 실행하기전에
                필요한 파일을 받거나 설정된 문서 파일
            </p>
            <br />
            <p className="stitle"> 3) Nodejs 시작하기 </p>
            <p>1. VScode 터미널에서 npm init -y 입력 (package.json 만드는 방법)</p>
            <p>2. </p>
            <p>3. </p>
            <p>4. </p>
            <p>5. </p>
            <p>6. </p>
            <p>7. </p>
            <p>8. </p>
            <p>9. </p>
            <p>10. </p>
            {/* (p>{$. })* */}
            {/* <br/> */}
            
        </div>
    );
}

export default Nodejs1;