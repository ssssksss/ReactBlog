import React from "react"
import ImageSlider from "./ImageSlider.js"
import CopyButton from "./CopyButton.js"
import "./page.css"
const Nodejs1 = () => {
  var arr = []

  return (
    <div className="page_container">
      <a name="top"> </a>
      <p className="title"> Nodejs </p>
      <p className="stitle"> (1) Nodejs란? </p>
      <div className="content_container">
        <p>1. 자바스크립트를 서버에서 사용하는 서버사이드 스크립트 언어</p>
        <p>2. 노드 js를 이용하는 기업 window Azure, eBay, LinkedIn, PayPal 등</p>
        <p>3. 프론트엔드 분야에서 백엔드 분야까지 제어를 할 수 있다.(장점) </p>
        <p>4. V8엔진(구글엔진) 위에서 작동하는 이벤트 처리 I/O 프레임 워크</p>
        <p>5. 노드 JS는 비동기 프로그래밍이다.(장점) </p>
        <p>6. 자바스크립트를 컴파일하고 실행할 수 있는 프레임 워크(기본 모듈이 자바스크립트)</p>
        <p>7. 웹서버 역할을 하는 내장 라이브러리가 존재하고 NPM 패키지가 포함 되어있다.</p>
      </div>
      <br /> <p className="stitle"> (2) Nodejs 다운받기 </p>
      <div className="content_container">
        <a href="https://nodejs.org/en/" target="_blank">
          노드 JS 설치 👈
        </a>
        <p>LTS버전으로 다운 받는것을 추천, 최신버전은 문제가 존재할 수도 있으므로 비추천</p>
        <p> cmd창 &gt; node -v 입력 &gt; 버전이 나오면 잘 설치가 됨 </p>
        <p> cmd창 &gt; npm -v 입력 &gt; 버전이 나오면 잘 설치가 됨 </p>
        <p>package.json : 데이터베이스에 있는 언어를 문서로 작성해 놓은 파일 , nodejs를 실행하기전에 필요한 파일을 받거나 설정된 문서 파일</p>
      </div>
      <br /> <p className="stitle"> (3) Nodejs 시작하기 </p>
      <div className="content_container">
        <p>1. VScode 터미널에서 npm init -y 입력 (package.json 설정없이 간단하게 만드는 방법)</p>
        <p>2. 파일이름.js 파일을 하나 만들고 코드를 작성 (ex) console.log('node.js의 시작')</p>
        <p>3. 터미널에 node 파일이름.js 입력하면 작동 </p>
        <p>하지만 위에 방식으로 하면 코드를 수정할 때마다 서버를 껐다가 켜야하는 단점이 존재</p>
        <p> 터미널에 npm install --save-dev nodemon 입력 </p>
        <p>설치후 package.json 파일에 보면 아래쪽에 설치된것을 확인할 수 있다.</p>
        <p>package.json 파일에서 "scripts" 쪽에 "start:nodemon 실행하려는JS파일명.js", 입력</p>
        <p>후에 npm run start하면 실행하려는파일명.js 파일이 시작되는 것을 볼 수 있다.</p>
        <p>단점 : nodemon도 프로젝트가 매번 바뀌면 package.json 내용을 바꾸어주어야 하는 단점이 존재한다.</p>
        <p> </p>
      </div>
      <br /> <p className="stitle"> (4) 파일처리와 관련된 fs모듈 </p>
      <div className="content_container">
        <p> 파일처리와 관련된 모듈 </p>
        <p> 메소드 종류</p>
        <p> 1. readFile() : 비동기적으로 파일을 읽음</p>
        <p> 2. readFileSync() : 동기적으로 파일을 읽음</p>
        <p> 3. writeFile() : 비동기적으로 파일을 읽음 </p>
        <p> 4. writeFileSync() : 파일을 동기적으로 읽음 </p>
        <p> ------ </p>
        <p>동기식 : 실행시킨 프로그램이 끝날떄 까지 기다렸다가 </p>
        <p>비동기식 : 이전 단계의 프로그램과 상관없이 계속 진행하는 방식</p>
        <p>1. 동기 방식과 비동기 방식을 실행하면 동기 방식을 먼저 실행하고 비동기 방식을 실행한다. </p>
        <p>2. 동기 방식에서 파일이 없어 에러를 발생하면 프로그램이 종료되므로 예외처리 필요 </p>
        <p> ------ </p>
      </div>
      <br /> <p className="stitle"> (5) 파일읽기 메소드 fs모듈 </p>
      <div className="content_container">
        <CopyButton
          text="파일 읽는 테스트 용도입니다.
          읽힌다면 성공
          노드 JS 시작..."
          content="(2) 코드 복사"></CopyButton>
        <CopyButton
          text="const fs = require('fs'); const data = fs.readFileSync('text1.txt');
              console.log(`동기식으로 파일 읽기: ${data}`);"
          content="(3) 코드 복사"></CopyButton>
        <CopyButton
          text='const fs = require("fs");
          fs.readFile("text1.txt", "utf-8", (err, data) => {
            if (err) {
              console.log(err);
            } else {
              console.log(`비동기 방식 : ${data}`);
            }
          });'
          content="(5) 코드 복사"></CopyButton>
        <CopyButton
          text='const fs = require("fs");
          const data = fs.readFileSync("text1.txt");
          
          fs.readFile("text1.txt", "utf-8", (err, data) => {
            if (err) {
              console.log(err);
            } else {
              console.log(`비동기 방식 : ${data}`);
            }
          });
          const data2 = fs.readFileSync("text1.txt");
          console.log(`동기식으로 파일 읽기: ${data2}`);'
          content="(7) 코드 복사"></CopyButton>
        <CopyButton
          text='const fs = require("fs");
        try {
          const data = fs.readFileSync("none.txt", "utf-8");
        } catch (e) {
          console.log("읽어올 파일이 없습니다.");
        }
        console.log("파일 읽기...");'
          content="(9) 코드 복사"></CopyButton>
        <ImageSlider image={(arr = ["/img/nodejs1/nodejs1_5_", "10", ".png"])}></ImageSlider>
        <br />
        <p> </p>
        <p> </p>
        <p> </p>
      </div>
      <br /> <p className="stitle"> (6) 파일쓰기 메소드 fs모듈 </p>
      <div className="content_container">
        <CopyButton text="" content="(4) 코드 복사"></CopyButton>
        <ImageSlider image={(arr = ["/img/nodejs1/nodejs1_6_", "5", ".png"])}></ImageSlider>
      </div>
      <br /> <p className="stitle"> (7) Nodejs 이벤트 </p>
      <div className="content_container">
        <p>노드JS를 위에서 V8엔진(구글엔진) 위에서 작동하는 이벤트 처리 I/O 프레임 워크라고 말한적이 있다. </p>
        <p>노드JS는 이벤트가 발생하는 것을 기다려 콜백함수를 호출하여 작동하는 경우가 많다 </p>
        <p> eventEmitter 객체는 이벤트 관련 메소드를 사용할 수 있는 기능 </p>
        <p>선언 : const 이름 = new events.EventEmitter(); </p>
        <p>사용 : 이름.메소드('이벤트명') </p>
        <p>실행순서는 on(연결되었다고 인식) =&gt; emit(이벤트 발생) =&gt; 이벤트에 맞는 함수실행 </p>
        <p>객체.on('이벤트명','함수명') : 이벤트가 발생하면 이벤트핸들러(함수)를 실행시킨다.</p>
        <p>객체.emit('이벤트명') : 이벤트를 강제로 발생시킴 </p>
        <CopyButton
          text='const events = require("events");
        const eventEmitter = new events.EventEmitter();
        const connectHandler = function connected() {
          console.log("연결 성공!");
          eventEmitter.emit("data_received");
        };
        eventEmitter.on("connection", connectHandler);
        eventEmitter.on("data_received", () => {
          console.log("데이터 수신!");
        });
        eventEmitter.emit("connection");
        console.log("프로그램 종료!");'
          content="(1) 코드 복사"></CopyButton>
        <ImageSlider image={(arr = ["/img/nodejs1/nodejs1_7_", "2", ".png"])}></ImageSlider>
      </div>
      <br /> <p className="stitle"> (8) 프로세스(시스템) 이벤트 </p>
      <div className="content_container">
        <p> 패스 </p>

        <CopyButton text="" content=""></CopyButton>
        <ImageSlider image={(arr = ["/img/nodejs1/nodejs1_8_", "0", ".png"])}></ImageSlider>
      </div>
      <br /> <p className="stitle"> (9) 웹서버 구축하기 </p>
      <div className="content_container">
        <p>노드JS로 웹서버 생성하기</p>
        <p> createServer() : 서버 객체 생성</p>
        <p> writeHead() : 응답 헤더 </p>
        <p> end() : 응답 바디 </p>
        <p> listen() : 서버를 수신상태로 만듬 </p>
        <br />
        <p>MIME 형식 : 어떤 종류의 데이터가 갈지 알려주는 것</p>
        <p> text/plain : text 파일 </p>
        <p> text/html : html 파일 </p>
        <p> text/css : css 파일 </p>
        <p> text/xml : xml 파일 </p>
        <p> image/jpeg : jpeg 이미지 파일 </p>
        <p> image/png : png 이미지 파일 </p>
        <p> video/mpeg : mpeg 동영상 파일 </p>
        <p> audio/mp3 : mp3 음악 파일 </p>

        <p>express 모듈 사용하기 </p>
        <p>http모듈만 사용하면 웹서버를 구현하는데 불편함 express를 사용하면 편해짐</p>
        <p>터미널에 npm i express 입력 </p>

        <CopyButton
          text='const http = require("http");
          const fs = require("fs");
          const data = fs.readFileSync("test1.html", "utf-8");
          http
            .createServer((req, res) => {
              res.writeHead(200, { "content-type": "text/html" });
              res.end(data);
            })
            .listen(3000, () => {
              console.log("3000번 포트 서버 실행");
            });'
          content="(1) JS 코드 복사"></CopyButton>
        <CopyButton
          text="<!DOCTYPE html>
        <html lang='UTF-8'>
        <head>
            <meta charset='UTF-8'>
            <meta http-equiv='X-UA-Compatible' content='IE=edge'>
        </head>
        <body>
            작동이 잘 됩니다............
        </body>
        </html>"
          content="(2) HTML 코드 복사"></CopyButton>
        <ImageSlider image={(arr = ["/img/nodejs1/nodejs1_9_", "3", ".png"])}></ImageSlider>
      </div>
      <br /> <p className="stitle"> (10) express모듈로 웹서버 구축하기(get방식) </p>
      <div className="content_container">
        <p> express모듈 </p>
        <p> exp모듈.use() : 미들웨어를 사용 </p>
        <p> exp모듈.get() : 클라이언트의 정보를 전달 받음 </p>
        <p> exp모듈.listen() : 서버가 수신상태로 변경 </p>
        <p> 이벤트 </p>
        <p> request : 클라이언트가 요청할 때</p>
        <p> connection : 클라이언트가 접속할 때 </p>
        <p> close : 서버가 종료될 때 발생하는 이벤트 </p>
        <p> 메소드</p>
        <p> res.redirect('url주소') : url주소로 강제로 이동 </p>
        <p> console.dir(req.headre) : 객체를 그대로 출력함 </p>
        <p> req.header('User-Agent') : 유저의 OS정보를 출력가능 </p>
        <p> const 변수명 = req.query.name명; : get방식일 때 사용</p>
        <p>const 변수명 = req.body.name명; : post방식일 때 사용(body-parser 파라미터 확인시 모듈 필요)</p>
        <p></p>

        <CopyButton
          text='const express = require("express");
const app = express();
const port = 3001;

app.use((req, res) => {
  console.dir(req.header);
  const userAgent = req.header("User-Agent");
  console.log(userAgent);
  // http://localhost:3001/?userid=test
  // get방식으로 받아온 userid의 값을 변수에 저장
  const userid = req.query.userid;
  console.log(userid);

  res.writeHead(200, {
    "content-type": "text/html;charset=utf-8",
  });
  res.write(`<h2>  userid : ${userid}  </h2>`); //`기호 주의!!
  res.end(); //사용자에게 전송
});

app.listen(port, () => {
  console.log("${port} 포트로 서버 실행중...");
});'
          content="(1) JS 코드 복사"></CopyButton>
        <ImageSlider image={(arr = ["/img/nodejs1/nodejs1_10_", "3", ".png"])}></ImageSlider>

        <CopyButton
          text='const express = require("express");
const app = express();
const port = 3001;

app.use((req, res) => {
  console.dir(req.header);
  const userAgent = req.header("User-Agent");
  console.log(userAgent);
  // http://localhost:3001/?userid=test
  // get방식으로 받아온 userid의 값을 변수에 저장
  const userid = req.query.userid;
  console.log(userid);

  res.writeHead(200, {
    "content-type": "text/html;charset=utf-8",
  });
  res.write(`<h2>  userid : ${userid}  </h2>`); //`기호 주의!!
  res.end(); //사용자에게 전송
});

app.listen(port, () => {
  console.log("${port} 포트로 서버 실행중...");
});'
          content="(1) JS 코드 복사"></CopyButton>
        <ImageSlider image={(arr = ["/img/nodejs1/nodejs1_10_", "3", ".png"])}></ImageSlider>
      </div>
      <br /> <p className="stitle"> (11) express모듈로 웹서버 구축하기(post방식) </p>
      <div className="content_container">
        <p> 테스트 하려면 POST방식으로 보내야 하는데 이것을 쉽게 해주는 Postman을 다운</p>
        <a href="https://www.postman.com/downloads/" target="_blank">
          postman 설치 👈
        </a>
        <p> Postman 회원가입 하고 로그인 하기</p>
        <p> </p>
        <p>
          bodyParser.urlencoded() : 중첩된 객체표현을 허용할지 여부(qs,query-string 2가지URL파싱방식에서 겹치는 객체가 존재하므로 qs를 막음
          extended:false로 사용)
        </p>
        <p> </p>
        <p> </p>
        <p> </p>
        <p> </p>
        <CopyButton text="" content=""></CopyButton>
        <ImageSlider image={(arr = ["/img/nodejs1/nodejs1_11_", "0", ".png"])}></ImageSlider>
      </div>
      {/* <br/> <p className="stitle"> 3) Nodejs </p> */}
      {/* div.content_container>(p>{$. })* */}
      {/* <CopyButton text="" content=""> </CopyButton>  */}
      {/* <ImageSlider image={(arr = ["/img/nodejs1/nodejs1_4_", "8", ".png"])}  ></ImageSlider> */}
    </div>
  )
}

export default Nodejs1
