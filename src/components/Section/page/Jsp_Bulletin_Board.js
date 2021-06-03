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
      <br /> <p className="stitle"> (1) 초기설정 및 구상 </p>
      <div className="content_container">
        <p>1. 인코딩 방식 바꿔주기 </p>
        <p>2. 아파치 톰캣으로 작동이 되는지 확인 </p>
        <p>3. DB연결 해주기 </p>
        <p>4. 게시판 코드 구상 </p>
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
        <ImageSlider image={(arr = ["/img/Jsp_Bulletin_Board/Jsp_Bulletin_Board_1_", "9", ".png"])}></ImageSlider>
      </div>
      <br /> <p className="stitle"> (2) 프론트 작업하기 </p>
      <div className="content_container">
        <p>간단하게 Nav바에 홈, 게시판, 로그인, 회원가입을 만들기 후에 0차수정</p>
        <p>1. main.jsp (처음 화면) </p>
        <p>2. userlogin.jsp (로그인 화면)</p>
        <p>3. userjoin.jsp (회원가입 화면</p>
        <p>4. jbblist.jsp (게시판 화면)</p>
        <p>5. jbbcreate.jsp (게시판 글 작성하는 화면)</p>
        <p>6. jbbcontent.jsp (게시판 상세 내용 화면)</p>
        <p>7. userinform.jsp (유저 정보 화면)</p>
        <p>8. jbbupdate.jsp (게시판 수정 화면)</p>
        <CopyButton
          text='<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="home.css">
</head>
<body>
	    <header>
        <div class="header_container">
            <div class="header_menu_container"> 
                   <ul>
                       <li> 로고 </li>
                       <li> <a href="#"> 홈 </a> </li>
                       <li> <a href="#"> 게시판 </a>  </li>
                       <li> <a href="#"> 로그인  </a> </li>
                       <li> <a href="#"> 회원가입 </a> </li>
                   </ul>
            </div>
        </div>
    </header>
    처음 화면 입니다
</body>
</html>'
          content="home.jsp 코드 복사"></CopyButton>
        <CopyButton
          text="header {
  width: 100%;
  height: 160px;
  background: #aeaeae;
  margin: auto;
}
body,
ul {
  margin: 0px;
  padding: 0px;
}
a {
  text-decoration: none;
}
.header_container {
  max-width: 1400px;
  width: 100%;
  height: 100px;
  background: gold;
  margin: auto;
  position: relative;
}
.header_menu_container li {
  list-style-type: none;
  display: inline-block;
  height: 100px;
  margin: 10px;
}
.header_menu_container li:nth-child(4) {
  right: 100px;
  position: absolute;
}
.header_menu_container li:nth-child(5) {
  right: 20px;
  position: absolute;
}
"
          content="home.css 코드 복사"></CopyButton>
        <CopyButton
          text='<%@ page language="java" contentType="text/html; charset=UTF-8"
          pageEncoding="UTF-8"%>
      <!DOCTYPE html>
      <html>
      <head>
      <meta charset="UTF-8">
      <title>Insert title here</title>
      <link rel="stylesheet" href="home.css">
      <style> 
          .userlogin_container {
              margin: 200px auto;
              width: 400px;
              height: 200px;
              box-sizing: border-box;
              border: black solid 5px;
          }
          .userlogin_container h2 {
              display: block;
              text-align: center;
          }
          .userlogin_container input {
              display: block;
              margin: auto;
              padding: 10px;
              box-sizing: border-box;
              width: 100%;
          }
      
          .userlogin_container input[type="submit"]:hover {
              background: skyblue;
          }
      </style>
      </head>
      <body>
          <header>
              <div class="header_container">
                  <div class="header_menu_container"> 
                         <ul>
                             <li> 로고 </li>
                             <li> <a href="#"> 홈 </a> </li>
                             <li> <a href="#"> 게시판 </a>  </li>
                             <li> <a href="#"> 로그인  </a> </li>
                             <li> <a href="#"> 회원가입 </a> </li>
                         </ul>
                  </div>
              </div>
          </header>
          <div class="userlogin_container">
              <h2> 로그인 페이지 </h2>
              <form method="post" action="">
                  <input type="text" placeholder="아이디를 입력하세요" required> 
                  <input type="text" placeholder="비밀번호를 입력하세요" required> 
                  <input type="submit" value="로그인"> 
              </form>
          </div>
      </body>
      </html>'
          content="userlogin.jsp 코드 복사"></CopyButton>
        <CopyButton
          text='<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="home.css">
<style> 
	.userjoin_container {
		margin: 200px auto;
        width: 400px;
        height: 200px;
        box-sizing: border-box;
        border: black solid 5px;
	}
    .userjoin_container h2 {
        display: block;
        text-align: center;
    }
    .userjoin_container input {
        display: block;
        margin: auto;
        padding: 10px;
        box-sizing: border-box;
        width: 100%;
    }

    .userjoin_container input[type="submit"]:hover {
        background: skyblue;
    }
</style>
</head>
<body>
    <header>
        <div class="header_container">
            <div class="header_menu_container"> 
                   <ul>
                       <li> 로고 </li>
                       <li> <a href="#"> 홈 </a> </li>
                       <li> <a href="#"> 게시판 </a>  </li>
                       <li> <a href="#"> 로그인  </a> </li>
                       <li> <a href="#"> 회원가입 </a> </li>
                   </ul>
            </div>
        </div>
    </header>
    <div class="userjoin_container">
    	<h2> 회원가입 페이지 </h2>
    	<form method="post" action="">
    		<input type="text" placeholder="아이디를 입력하세요" required> 
    		<input type="text" placeholder="비밀번호를 입력하세요" required> 
    		<input type="submit" value="회원가입"> 
    	</form>
    </div>
</body>
</html>'
          content="userjoin.jsp 코드복사"></CopyButton>
        <CopyButton
          text='<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="home.css">
<style> 
	.jbblist_container {
		margin: 200px auto;
        width: 600px;
        height: 600px;
        box-sizing: border-box;
        border: black solid 5px;
	}
    .jbblist_container h2 {
        display: block;
        text-align: center;
    }
    .jbblist_container table {
        margin: auto;
        box-sizing: border-box;
        background: #aeaeae;
    }
    .jbblist_container th {
        border: black solid 1px;
    }
    .jbblist_container tr:nth-child(2n+3) {
        background: blanchedalmond;
    }
    .jbblist_container tr:nth-child(2n) {
        background:cornflowerblue;
    }
    .jbblist_container  th:nth-child(1) {
        width: 50px;
    }
    .jbblist_container  th:nth-child(2) {
        width: 250px;
    }
    .jbblist_container  th:nth-child(3) {
        width: 100px;
    }
    .jbblist_container  th:nth-child(4) {
        width: 160px;
    }

</style>
</head>
<body>
    <header>
        <div class="header_container">
            <div class="header_menu_container"> 
                   <ul>
                       <li> 로고 </li>
                       <li> <a href="#"> 홈 </a> </li>
                       <li> <a href="#"> 게시판 </a>  </li>
                       <li> <a href="#"> 로그인  </a> </li>
                       <li> <a href="#"> 회원가입 </a> </li>
                   </ul>
            </div>
        </div>
    </header>
    <div class="jbblist_container">
    	<h2> 게시판 </h2>
    	<table>
            <tr> 
                <th> 번호 </th>
                <th> 제목 </th>
                <th> 작성자 </th>
                <th> 작성일 </th>
            </tr>
            <tr>
                <td> 1</td>
                <td> 처음 작성된 글입니다.</td>
                <td> 홍길동 </td>
                <td> 2021-05-31</td>
            </tr>
            <tr>
                <td> 2</td>
                <td> 2번쨰 작성된 글입니다.</td>
                <td> 홍길동 </td>
                <td> 2021-05-31</td>
            </tr>
    	</table>
    </div>
</body>
</html>'
          content="jbblist.jsp 코드복사"></CopyButton>
        <CopyButton
          text='<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="home.css">
<style> 
	.jbbcreate_container {
		margin: 200px auto;
        width: 600px;
        height: 600px;
        box-sizing: border-box;
        border: black solid 5px;
	}
    .jbbcreate_container h2 {
        display: block;
        text-align: center;
    }
    .jbbcreate_container form {
        padding: 20px;
    }
    .jbbcreate_container input[type="text"] {
        width: 90%;
        margin-bottom: 20px;
    }
    .jbbcreate_container textarea {
        width:100%;
        height: 300px;
        margin-top: 20px;
    }
    .jbbcreate_container input[type="submit"] {
        float: right;
        margin: 20px;
    }


</style>
</head>
<body>
    <header>
        <div class="header_container">
            <div class="header_menu_container"> 
                   <ul>
                       <li> 로고 </li>
                       <li> <a href="#"> 홈 </a> </li>
                       <li> <a href="#"> 게시판 </a>  </li>
                       <li> <a href="#"> 로그인  </a> </li>
                       <li> <a href="#"> 회원가입 </a> </li>
                   </ul>
            </div>
        </div>
    </header>
    <div class="jbbcreate_container">
    	<h2> 게시판 글 작성 </h2>
        <form method="POST" action="">
            제목 : <input type="text" placeholder="제목을 입력해주세요" required> <br/>
            내용 :  <br/> <textarea placeholder="제목을 입력해주세요" required> </textarea>  <br/>
            <input type="submit" value="글 작성">
        </form>
    </div>
</body>
</html>'
          content="jbbcreate.jsp 코드복사"></CopyButton>
        <CopyButton
          text='<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="home.css">
<style> 
	.jbbcontent_container {
		margin: 200px auto;
        width: 600px;
        height: 600px;
        box-sizing: border-box;
        border: black solid 5px;
        padding: 20px;
        position: relative;
	}
    .jbbcontent_container h2 {
        display: block;
        text-align: center;
    }
    .jbbcontent_container p {
        border: black solid 1px;
        padding: 10px;
    }
    .jbbcontent_container p:nth-child(3) {
        height: 300px;
    }
    .jbbcontent_btn {
        float: right;
        text-align: center;
    }
    .jbbcontent_btn a {
        display: inline-block;
        width: 60px;
        height: 30px;
        background: #aeaeae;
        border: black solid 1px;
    }
    .jbbcontent_btn a:hover {
        background: skyblue;
    }



</style>
</head>
<body>
    <header>
        <div class="header_container">
            <div class="header_menu_container"> 
                   <ul>
                       <li> 로고 </li>
                       <li> <a href="#"> 홈 </a> </li>
                       <li> <a href="#"> 게시판 </a>  </li>
                       <li> <a href="#"> 로그인  </a> </li>
                       <li> <a href="#"> 회원가입 </a> </li>
                   </ul>
            </div>
        </div>
    </header>
    <div class="jbbcontent_container">
    	<h2> 게시판 글 내용 </h2>
    	<p> 제목 : 제목은 무엇입니까? </p>
    	<p> 내용  <br/><br/> 내용은 무엇입니까? </p>
        <div class="jbbcontent_btn">
            <a href="#"> 글 수정</a>
            <a href="#"> 글 삭제</a>
        </div>
    </div>
</body>
</html>'
          content="jbbcontent.jsp 코드복사"></CopyButton>
        <CopyButton
          text='<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="home.css">
<style> 
	.userinform_container {
		margin: 200px auto;
        width: 600px;
        height: 600px;
        box-sizing: border-box;
        border: black solid 5px;
        padding: 20px;
        position: relative;
	}
    .userinform_container h2 {
        display: block;
        text-align: center;
    }
    .userinform_container p {
        border: black solid 1px;
        padding: 10px;
    }
    .userinform_container p:nth-child(3) {
        height: 300px;
    }
    .userinform_btn {
        float: right;
        text-align: center;
    }
    .userinform_btn a {
        display: inline-block;
        height: 30px;
        background: #aeaeae;
        border: black solid 1px;
    }
    .userinform_btn a:hover {
        background: skyblue;
    }

</style>
</head>
<body>
    <header>
        <div class="header_container">
            <div class="header_menu_container"> 
                   <ul>
                       <li> 로고 </li>
                       <li> <a href="#"> 홈 </a> </li>
                       <li> <a href="#"> 게시판 </a>  </li>
                       <li> <a href="#"> 로그인  </a> </li>
                       <li> <a href="#"> 회원가입 </a> </li>
                   </ul>
            </div>
        </div>
    </header>
    <div class="userinform_container">
    	<h2> 유저 정보 </h2>
        <p> 유저 아이디 : 홍길동 </p>
        <div class="userinform_btn">
            <a href="#"> 비밀번호 수정 </a>
            <a href="#"> 계정 삭제 </a>
        </div>
    </div>
</body>
</html>'
          content="userinform.jsp  코드복사"></CopyButton>
        <CopyButton
          text='<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="home.css">
<style> 
	.jbbupdate_container {
		margin: 200px auto;
        width: 600px;
        height: 600px;
        box-sizing: border-box;
        border: black solid 5px;
	}
    .jbbupdate_container h2 {
        display: block;
        text-align: center;
    }
    .jbbupdate_container form {
        padding: 20px;
    }
    .jbbupdate_container input[type="text"] {
        width: 90%;
        margin-bottom: 20px;
    }
    .jbbupdate_container textarea {
        width:100%;
        height: 300px;
        margin-top: 20px;
    }
    .jbbupdate_container input[type="submit"] {
        float: right;
        margin: 20px;
    }


</style>
</head>
<body>
    <header>
        <div class="header_container">
            <div class="header_menu_container"> 
                   <ul>
                       <li> 로고 </li>
                       <li> <a href="#"> 홈 </a> </li>
                       <li> <a href="#"> 게시판 </a>  </li>
                       <li> <a href="#"> 로그인  </a> </li>
                       <li> <a href="#"> 회원가입 </a> </li>
                   </ul>
            </div>
        </div>
    </header>
    <div class="jbbupdate_container">
    	<h2> 게시판 글 수정 </h2>
        <form method="POST" action="">
            제목 : <input type="text" placeholder="제목을 입력해주세요" required> <br/>
            내용 :  <br/> <textarea placeholder="제목을 입력해주세요" required> </textarea>  <br/>
            <input type="submit" value="글 수정">
        </form>
    </div>
</body>
</html>'
          content="jbbupdate.jsp 코드복사"></CopyButton>
        <CopyButton text="" content=" 코드복사"></CopyButton>
        <ImageSlider image={(arr = ["/img/Jsp_Bulletin_Board/Jsp_Bulletin_Board_2_", "8", ".png"])}></ImageSlider>
      </div>
      <br /> <p className="stitle"> (3) 회원가입,로그인 작업하기 </p>
      <div className="content_container">
        <p> MVC2, DAO, DTO, DB 형태 잡아두기 0차 수정 </p>
        <p>1. 오라클 DB구조와 파일배치</p>
        <p>2. userDTO 만들기 </p>
        <p>3. userDAO 만들기 </p>
        <p>4. FrontController 만들기 </p>
        <p>5. Controller 인터페이스 만들기</p>
        <p>6. web.xml 설정으로 FrontController 맵핑해주기</p>
        <p>7. userlogin 코드 수정 (세션추가)</p>
        <p>8. userjoin 코드 수정</p>
        <p>9. userlogin 처리해주는 로직 짜기</p>
        <p>10. userjoin 처리해주는 로직 짜기</p>
        <CopyButton text="" content="2. userDTO.java 코드복사"></CopyButton>
        <CopyButton text="" content="3. userDAO.java 코드복사"></CopyButton>
        <CopyButton text="" content="4. FrontController.java 코드복사"></CopyButton>
        <CopyButton text="" content="5. Controlle.java 코드복사"></CopyButton>
        <CopyButton text="" content="6. web.xml 코드복사"></CopyButton>
        <CopyButton text="" content="7. userlogin.jsp 코드복사"></CopyButton>
        <CopyButton text="" content="8. userjoin.jsp 코드복사"></CopyButton>
        <CopyButton text="" content="9. DoUserLogin.java 코드복사"></CopyButton>
        <CopyButton text="" content="10. oUserjoin.java 코드복사"></CopyButton>
        {/* 라이브러리 파일 추가 필요 */}
        <ImageSlider image={(arr = ["/img/Jsp_Bulletin_Board/Jsp_Bulletin_Board_3_", "10", ".png"])}></ImageSlider>
      </div>
      <br /> <p className="stitle"> (4) 게시판 작업하기 </p>
      <div className="content_container">
        <p>1. </p>
        <p>2. </p>
        <p>3. </p>
        <p>4. </p>
        <CopyButton text="" content=""></CopyButton>
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
