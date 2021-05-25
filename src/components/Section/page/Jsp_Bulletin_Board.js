import React, {useState} from "react"
import ImageSlider from "./ImageSlider.js"
import CopyButton from "./CopyButton.js"
import "./page.css"

const Jsp_Bulletin_Board = () => {
  var arr = []

  return (
    <div className="page_container">
      <a name="top"> </a>
      <p className="title"> JSP 게시판 </p>
      <br /> <p className="stitle"> (1) 이클립스 초기설정 및 작동 테스트 </p>
      <div className="content_container">
        <p>1. 인코딩 방식 바꿔주기 </p>
        <p>2. 아파치 톰캣으로 작동이 되는지 확인 </p>
        <p>3. DB연결 해주기 </p>
        <CopyButton
          text='<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
  작동이 되는지 확인
</body>
</html>'
          content="(7) main.jsp 코드 복사"></CopyButton>
        <ImageSlider image={(arr = ["/img/Jsp_Bulletin_Board/Jsp_Bulletin_Board_1_", "8", ".png"])}></ImageSlider>
      </div>
      <br /> <p className="stitle"> (2) 프론트 작업하기 </p>
      <div className="content_container">
        <p>간단하게 Nav바에 홈, 게시판, 로그인, 회원가입을 만들기 후에 2차수정</p>
        <p>1. main.jsp (처음 화면) </p>
        <p>2. login.jsp (로그인 화면)</p>
        <p>3. join.jsp (회원가입 화면</p>
        <p>4. jbb.jsp (게시판 화면)</p>
        <p>5. jbb_write_form.jsp (게시판 글 작성하는 화면)</p>
        <p>6. jbb_read_form.jsp (게시판 글 조회하는 화면)</p>
        <CopyButton
          text='<%@ page language="java" contentType="text/html; charset=UTF-8"
          pageEncoding="UTF-8"%>
      <!DOCTYPE html>
      <html>
      <head>
      <meta charset="UTF-8">
      <title>Insert title here</title>
      <style>
          * {
              margin: 0;
              padding: 0;
          }
          a {
              text-decoration: none;
          }
          .nav_container {
              width: 100%;
              max-width: 1440px;
              height: 100px;
              background: #aeaeae;
              padding: 10px;
              box-sizing: border-box;
          }
          .nav_container > .nav_frame1 {
              float: left;
          }
          .nav_container > .nav_frame2 {
              float: right;
          }
          .section_container {
              width: 90vw;
              min-height: 600px;
              box-sizing: border-box;
              padding: 10px;
              background: #aeaeae;
              margin: 20px auto;
          }
      </style>
      </head>
      <body>
        <Nav class="nav_container">
              <div class="nav_frame1"> 
                  <a href="#"> 홈 </a>
                  <a href="#"> 게시판 </a>
              </div>
              <div class="nav_frame2"> 
                  <a href="#"> 로그인 </a>
                  <a href="#"> 회원가입 </a>
              </div>
        </Nav>
              <Section class="section_container">
                  여기에는 내용이 채워짐
              </Section>
      </body>
      </html>'
          content="(1)main.jsp 코드복사 "></CopyButton>
        <CopyButton
          text='<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style>
    .userlogin_container {
        position: absolute;
        width: 400px;
        height: 200px;
        border: solid 1px black;
        left: 50%;
        transform: translateX(-50%);
        top: 20%;
        padding-top: 30px;
        box-sizing: border-box;
    }
    .userlogin_container > form > input {
        display: block;
        box-sizing: border-box;
        padding: 10px;
        margin: auto;
        width: 200px;
    }
    .userlogin_container > form > input:nth-child(3) {
        margin-top: 20px;
        background: skyblue;
    }
</style>
</head>
<body>
    <div class="userlogin_container">
        <form action="" method="post" >
            <input type="text" name="userid" placeholder="아이디를 입력하세요" required/>
            <input type="text" name="userpwd" placeholder="비밀번호를 입력하세요" required/>
            <input type="submit" value="로그인"/> 
        </form>
    </div>
</body>
</html>'
          content="(3) login.jsp 코드 복사"></CopyButton>
        <CopyButton
          text='<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style>
    .userjoin_container {
        position: absolute;
        width: 400px;
        height: 300px;
        border: solid 1px black;
        left: 50%;
        transform: translateX(-50%);
        top: 20%;
        padding-top: 30px;
        box-sizing: border-box;
    }
    .userjoin_container > form > input {
        display: block;
        box-sizing: border-box;
        padding: 10px;
        margin: auto;
        width: 200px;
    }
    .userjoin_container > form > input:nth-child(4) {
        margin-top: 20px;
        background: skyblue;
    }
    .userjoin_{
        text-align: center;
    }
</style>
</head>
<body>
    <div class="userjoin_container">
        <p class="userjoin_"> 회원가입 양식 </p>
        <form action="" method="post" >
            <input type="text" name="userid" placeholder="아이디를 입력하세요" required/>
            <input type="password" name="userpwd" placeholder="비밀번호를 입력하세요" required/>
            <input type="text" name="username" placeholder="이름을 입력하세요" required/>
            <input type="submit" value="회원가입 제출"/>
        </form>
    </div>
</body>
</html>'
          content="(5) join.jsp 코드 복사"></CopyButton>
        <CopyButton
          text='<%@ page language="java" contentType="text/html; charset=UTF-8"
          pageEncoding="UTF-8"%>
      <!DOCTYPE html>
      <html>
      <head>
      <meta charset="UTF-8">
      <title>Insert title here</title>
      <style>
          .jbb_container {
              width: 70vw;
              min-width: 600px;
              min-height: 600px;
              border: solid 5px black;
              box-sizing: border-box;
              margin: auto;
          }
          .jbb_container th{
              margin: auto;
              height: 30px;
              text-align: center;
              border: solid 1px red;
          }
          .jbb_container .jbb_num {
              width: 50px;
          }
          .jbb_container .jbb_title{
              width: 400px;
          }
          .jbb_container .jbb_username{
              width: 100px;
          }
          .jbb_container .jbb_data{
              width: 120px;
          }
          .jbb_container {
              position: relative;
          }
          .write_form {
              width: 50px;
              display: block;
              background: skyblue;
              height: 20px;
              border: solid 1px black;
              position: absolute;
              bottom: 20px;
              right: 20px;
          }
          tr:nth-child(2n+3) {
              background-color: rgb(101, 101, 218);
          }
          tr:nth-child(2n) {
              background-color: rgb(226, 180, 93);
          }
         
      </style>
      </head>
      <body>
         <div class="jbb_container">
             <div class="jbb_frame">
               <table border:1>
                          <th class="jbb_num"> 번호 </th>
                          <th class="jbb_title">  제목 </th>
                          <th class="jbb_username"> 작성자 </th>
                          <th class="jbb_data"> 날짜 </th>
                       <tr> 
                           <td>1</td>
                           <td>첫 글 작성입니다,</td>
                           <td>홍길동</td>
                           <td>2021-05-25</td>
                       </tr>
                      <tr> 
                          <td >2</td>
                          <td>두 글 작성입니다,</td>
                          <td>홍길동2</td>
                          <td>2021-05-25</td>
                      </tr>
               </table>
               <a href="#" class="write_form"> 글쓰기 </a> 
              </div>
         </div>
      </body>
      </html>'
          content="(7) jbb.jsp 코드 복사"></CopyButton>
        <CopyButton
          text='<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style>
        .jbb_write_form_container {
        width: 70vw;
        min-width: 600px;
        min-height: 600px;
        border: solid 5px black;
        box-sizing: border-box;
        margin: auto;
        position: relative;
        padding: 20px;
    }
    .jbb_write_form_container input[type="submit"] {
        position: absolute;
        bottom: 20px;
        right: 20px;
    }
    .jbb_write_form_container input[type="text"] {
    }
    .jbb_write_form_container textarea {
        margin: auto;
        box-sizing: border-box;
        height: 400px;
        width: 100%;
        resize: none;
    }
</style>
</head>
<body>
   <div class="jbb_write_form_container">
        <h2> 게시판 글 작성 </h2>
        <form action="" method="get">
            <div> 제목 : <input type="text" placeholder="제목 작성 해주세요"/> </div>
            <div> 내용 : </div>
            <textarea placeholder="내용을 작성 해주세요"></textarea>
            <input type="submit" value="글 작성">
        </form>
   </div>
</body>
</html>'
          content="(9) jbb_write_form.jsp 코드 복사"></CopyButton>
        <CopyButton
          text='<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style>
    .jbb_read_form_container {
        width: 70vw;
        min-width: 600px;
        min-height: 600px;
        border: solid 5px black;
        box-sizing: border-box;
        margin: auto;
        position: relative;
        padding: 20px;
    }
    .jbb_read_form_container .read_content {
        box-sizing: border-box;
        width: 100%;
        height: 300px;
        border: solid 1px black;
        padding: 20px;
    }
    .jbb_read_form_container a {
        float: right;
        margin: 10px;
        text-decoration: none;
        border: solid 1px black;
        background: #eeeeee;
    }

</style>
</head>
<body>
   <div class="jbb_read_form_container">
        <h2> 게시판 글 조회 </h2>
         <h3> 제목 : 제목이 들어가는 칸 </h3> 
         <h3> 내용 </h3>
         <div class="read_content"> 
            내용이 들어가는 칸
         </div>
         <a href="#"> 글 수정</a> 
         <a href="#"> 글 삭제</a> 
   </div>
</body>
</html>'
          content="(11) jbb_read_form.jsp 코드 복사"></CopyButton>
        <CopyButton text="" content=""></CopyButton>
        <ImageSlider image={(arr = ["/img/Jsp_Bulletin_Board/Jsp_Bulletin_Board_2_", "12", ".png"])}></ImageSlider>
      </div>
      <br /> <p className="stitle"> (3) 로그인 작업하기 </p>
      <div className="content_container">
        <p>1. </p>
        <p>2. </p>
        <p>3. </p>
        <p>4. </p>
        <CopyButton text="" content=""></CopyButton>
        <ImageSlider image={(arr = ["/img/Jsp_Bulletin_Board/Jsp_Bulletin_Board_", "0", ".png"])}></ImageSlider>
      </div>
      <br /> <p className="stitle"> (4) 게시판 작업하기 </p>
      <div className="content_container">
        <p>1. </p>
        <p>2. </p>
        <p>3. </p>
        <p>4. </p>
        <CopyButton text="" content="">
          {" "}
        </CopyButton>
        <ImageSlider image={(arr = ["/img/Jsp_Bulletin_Board/Jsp_Bulletin_Board_", "0", ".png"])}></ImageSlider>
      </div>
      {/* <br /> <p className="stitle"> (1) 프론트 작업하기 </p>
      <div className="content_container">
        <p>1. </p>
        <p>2. </p>
        <p>3. </p>
        <p>4. </p>
      <CopyButton text='' content=""> </CopyButton>
      <ImageSlider image={(arr = ["/img/Jsp_Bulletin_Board/Jsp_Bulletin_Board_", "0", ".png"])}></ImageSlider>
      </div> */}
      {/* <br /> <p className="stitle"> (1) 프론트 작업하기 </p>
      <div className="content_container">
        <p>1. </p>
        <p>2. </p>
        <p>3. </p>
        <p>4. </p>
      <CopyButton text='' content=""> </CopyButton>
      <ImageSlider image={(arr = ["/img/Jsp_Bulletin_Board/Jsp_Bulletin_Board_", "0", ".png"])}></ImageSlider>
      </div> */}
    </div>
  ) //리턴꺼
} //컴포넌트꺼

export default Jsp_Bulletin_Board
