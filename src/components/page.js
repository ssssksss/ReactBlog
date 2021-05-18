import React,{useEffect, useState} from 'react';
import { Redirect } from 'react-router';
import './page.css';

const Page = (props) => {
    const [page,setPage] = useState('mainpage');

    useEffect(()=> {
        setPage(props.page);
      },[props.page])

    switch(page) {
        case 'main':
            return(<Main1></Main1>);
        case 'html1': //html
            return(<Html1></Html1>);
        case 'jsp1': //jsp - apachetomcat - mysql
            return(<Jsp1></Jsp1>);
        case 'jsp2': //jsp - apachetomcat - oracledb
            return(<Jsp2></Jsp2>);
        default:
            return(<></>);
    }

}
export default Page;
//글자의 스타일 정하는 태그
const Title = (props) => {
    return(
        <div className="title"> {props.div} </div>
    );
}

const Article = (props) => {
    return(
        <div className="article" stitle={props.stitle} content={props.content}> 
            <h3 style={{color: 'blue'}}>{props.stitle}</h3>
            <span style={{color: '#ffe67c'}}>{props.content}</span>
        </div>
    );
}

const WordDesc = (props) => {
    return(
        <div className="WordDesc" desc={props.desc} issue={props.issue} def={props.def} use={props.use} example={props.example}>
            <p> 용어 설명 : {props.desc} </p> 
            <p> 용어 선언 : {props.issue} </p> 
            <p> 용어 정의 : {props.def} </p> 
            <p> 용어 사용 : {props.use} </p> 
            <p> 예시 코드 : {props.example} </p> 
        </div>
    );
}

const WordDescV1 = (props) => {
    return(
        <div className="WordDesc" desc={props.desc} example={props.example}>
            <p> 설명 : {props.desc} </p> 
            <p> 예시 코드 : {props.example} </p> 
        </div>
    );
}

const Text = (props) => {
    return(
        <div text={props.text}>
            <p> {props.text} </p>
        </div>
    );
}

// arr=['파일명(/img/jsp3_)', '장면수', '확장자(.png)']
const ImageSlider = (props) => {
   var [pageNum,setPageNum] = useState(1);
   return (
       <div className="img_container">
           <button className ="left_arrow_button arrow_button" onClick={()=> {
               if(pageNum>1) { setPageNum(parseInt(pageNum)-1); }}}>  &lt; </button>
           <img className="img_" src={process.env.PUBLIC_URL + props.image[0] + pageNum +props.image[2]}/>
           <button className ="right_arrow_button arrow_button" onClick={()=> {
               if(pageNum<props.image[1]) {setPageNum(parseInt(pageNum)+1);}}}> &gt; </button>
           <div className="showpagenum"> {pageNum} / {props.image[1]} </div>
       </div>
   );   
}


//페이지들을 모아놓은 태그 
const Main1 = () => {
    return(
        <div>
            Main1의 시작
        </div>
    );
}
//1. HTML 태그 종류
const Html1 = () => {
    return(
        <div>
            <Title div="1. HTML 태그 종류"><a name="top"> </a></Title>

            <Article stitle="1) div태그" content="div태그란?"/>
            <WordDesc desc="div태그는 특징이 없는 태그로 가로의 공간을 모두 차지하는 특성(block속성이라한다.)만 존재한다.
            아래 2)의 span태그와 비교하기를 바란다." 
            issue="" def="<div> </div>" use="<div> HTML코드 작성 </div>" 
            example="<div style={{background: 'red'}}> div태그 </div>"> </WordDesc>
            <div style={{background: 'red'}}> div태그 </div>

            <Article stitle="2) span태그" content="span태그란?"/>
            <WordDesc desc="span태그는 특징이 없는 태그로 div태그와는 달리 가로의 공간을 모두 차지하지 않고
            글씨로 작성된 공간(inline속성이라한다.)만을 차지한다." 
            issue="" def="<span> </span>" use="<span> HTML코드 작성 </span>" 
            example="<span style={{background: 'red'}}> span태그 </span>"> </WordDesc>
            <span style={{background: 'red'}}> span태그 </span>

            <Article stitle="3) p태그" content="p태그란?"/>
            <WordDesc desc="p태그는 div태그+<br> (띄어쓰기) 가 추가된 태그이다. 글을 작성할때 문단을 구분해주는 용도이다."
            issue="" def="<p> </p>" use="<p> HTML 코드 작성</p>" 
            example="<p style={{background: 'red'}}> p태그 </p>"> </WordDesc>
            <p style={{background: 'red'}}> p태그 </p>

            <Article stitle="4) h태그" content="h태그란?"/>
            <WordDesc desc="h태그는 h1,h2,h3,h4,h5,h6로 이루어져 있으며 각 태그마다 글자의 크기가 정해져 있는 태그이다.
            변경은 가능하지만 변경을 하지 않고 그대로 사용하는 것을 권유하는 바이다." 
            issue="" def="<h1> </h1> ~ <h6> </h6>" use="<h1> HTML 코드 작성 </h1>" 
            example="
            <h1 style={{background: 'red'}}> h1태그 </h1>
            <h2 style={{background: 'red'}}> h2태그 </h2>
            <h3 style={{background: 'red'}}> h3태그 </h3>
            <h4 style={{background: 'red'}}> h4태그 </h4>
            <h5 style={{background: 'red'}}> h5태그 </h5>
            <h6 style={{background: 'red'}}> h6태그 </h6>"> </WordDesc>
            <h1 style={{background: 'red'}}> h1태그 </h1>
            <h2 style={{background: 'red'}}> h2태그 </h2>
            <h3 style={{background: 'red'}}> h3태그 </h3>
            <h4 style={{background: 'red'}}> h4태그 </h4>
            <h5 style={{background: 'red'}}> h5태그 </h5>
            <h6 style={{background: 'red'}}> h6태그 </h6>

            <Article stitle="5) a태그" content="a태그란?"/>
            <WordDesc desc="a태그는 url코드를 가지고 있는 태그이다. link로 되어있는 글을 클릭하면 다른 주소로
            이동하는 것을 보았을 텐데 그떄 사용하는 태그이다."
            issue="" def="<a> </a>" use="<a> HTML 코드 작성 </a>" 
            example="<a href='http://www.naver.com' target='blank' style={{background: 'red'}}> www.naver.com </a>"> </WordDesc>
            <a href="https://www.naver.com" target='blank' style={{background: 'red'}}> www.naver.com </a>
            <p>✔ href="#" 을 사용하면 클릭은 되지만 아무런 반응이 일어나지 않는 a태그가 된다 </p>
            <p>✔ target='blank'를 사용하면 새로운 탭을 열게된다. </p>
            <p>✔ 원래는 밑줄이 그어져 있으나 css에서 outline:none을 사용하여 밑줄이 보이지 않는다. </p>
            <p>✔ 도착지: a태그에 name='도착지이름' , 출발지: a태그에 href='#도착지이름' 이와 같이 사용하면
                맨위로 , 맨아래로, 내부 페이지에서 특정 위치로 이동이 가능하다.
                아래 예시는 도착지: name='top'  출발지: href='#top' 이와같이 설정되어 있다. 
                반드시 둘다 a태그로 구성되어 있을것 !!! </p>
            <a href="#top"> 맨위로 가기 </a>
            
            <Article stitle="6) " content="란?"/>
            <WordDesc desc=""
            issue="" def="<ㅁ> </ㅁ>" use="<> HTML 코드 작성 </>" 
            example="< style={{background: 'red'}}>  </>"> </WordDesc>
            <p style={{background: 'red'}}> </p>

            <Article stitle="7) " content="란?"/>
            <WordDesc desc=""
            issue="" def="<ㅁ> </ㅁ>" use="<> HTML 코드 작성 </>" 
            example="< style={{background: 'red'}}>  </>"> </WordDesc>
            <p style={{background: 'red'}}>  </p>

            <Article stitle="8) " content="란?"/>
            <WordDesc desc=""
            issue="" def="<ㅁ> </ㅁ>" use="<> HTML 코드 작성 </>" 
            example="< style={{background: 'red'}}>  </>"> </WordDesc>
            <p style={{background: 'red'}}>  </p>

        </div>
    );
}

//JSP - MySQL
const Jsp1 = () => {
    var arr = [];

    return(
        <div>
            <Title div="1. JSP 기초"> <a name="top"> </a></Title>

            <Article stitle="1) JSP" content="JSP란?"/>
            <WordDescV1 desc="자바에서 HTML,JavaScript를 사용할 수 있게 해주는 프레임워크
            Servlet에서 더 향상된 프레임워크로 기반은 Servlet이고, Servlet보다 Html,JavaScript를 좀더
            사용자는 편하게 사용할 수 있다는 장점이 있다."
            example=""> </WordDescV1>
            <p> 그렇다면 왜 JSP가 탄생했을까? 웹에 처음으로 돌아가서 단계별로 설명하겠다. </p>
            <p>(1) 초창기의 웹은 HTML,CSS문서와 같이 움직이지 않는 정적인 페이지만을 처리하였다. 
            그래서 동적인 움직이는 페이지를 사용자는 원하게 되었고</p>
            <p>(2) 자바스크립트와 같이 동적인 페이지를 만들 수 있게 되었다. 하지만 문제가 있었다. 그떄 당시에는 
                동적인 페이지를 서버가 처리를 하고 클라이언트에게 보내는 것이 아니라 통쨰로 클라이언트에게 보내고  
                클라이언트는 그떄 당시에는 거대한 용량을 스스로 처리해야 하는 부담이 생겼다. 그렇다고 서버가 데이터베이스와 결과를 처리를 해서 
                보내기에는또 부담이 크기 때문에 이 또한 불가능 하였다.</p>
            <p>(3) 이렇기 떄문에 클라이언트와 데이터베이스(서버) 중간에 미들웨어(서버)라는 존재가 탄생하였다. 중간에서
            클라이언트의 요청과 데이터베이스에서 결과를 받고 처리를 해서 클라이언트에게 넘겨주는 방식이 생겨나게 되었다. </p>
            <p>(4) 미들웨어가 존재해서 편해졌는데 시대가 발전하고 처리할 요구가 많아지자 정적데이터와 동적데이터를 처리하는
            미들웨어 2개로 나뉘게 되었다. 이 때 동적데이터를 처리하는 서버를 WAS라 부르고 아파치톰캣이 이와 같은 역할을 하는 것이다. </p>
            <p>(5) 과거에는 WAS는 정적인 데이터를 처리하는 웹서버 역할을 하지 않았지만 지금은 WAS가 처리는 가능하지만
            웹서버와 동시에 운영을 한다(WAS에 문제가 발생하여도 안정적인 서버운영이 가능하기 떄문) </p>

            <Article stitle="2) JSP 이클립스에서 설정하기" content="JSP사용하기 위한 다운로드"/>
            <WordDescV1 desc="
            1. 이클립스 설치 -> 2. apache tomcat설치 -> 3.이클립스 실행"
            example=""> </WordDescV1>
            <a href="https://www.eclipse.org/downloads/" target='blank' > 👀 이클립스 설치 </a> <br/>
            <a href="https://tomcat.apache.org/download-80.cgi" target='blank'> 👀 아파치톰캣 설치 </a>

            <Article stitle="3) JSP" content="JSP사용하기 위한 이클립스 초기설정"/>
            <WordDescV1 desc="JSP를 사용하기 위해 기본 설치를 하는 과정"
            example="아파치 톰캣이 실행되기까지 테스트"> </WordDescV1>
            <p style={{background: 'red'}}>  </p>
            <ImageSlider image={arr=['/img/jsp1_3_','20','.png']}> </ImageSlider>

            <Article stitle="4) JSP-MySQL" content="JSP와 MySQL 연결하기"/>
            <WordDescV1 desc="MySQL을 사용하기 위해 MySQL을 설치하고 연동하는 과정"
            example="package day1;

            import java.sql.Connection;
            import java.sql.DriverManager;
            
            public class Test1 {
                
                public static void main(String[] args) {
                    String DBdriver = &quot;com.mysql.jdbc.Driver&quot;;
                    try {
                        Class.forName(DBdriver);
                        
                        String url = &quot;jdbc:mysql://localhost:3306/sqltestdb&quot;;
                        String user=&quot;root&quot;;
                        String password=&quot;1234&quot;;
                        Connection conn = DriverManager.getConnection(url,user,password);
                        
                        conn.close();
                        System.out.println(&quot;확인&quot;);
                        
                    }catch(Exception e) {
                        e.printStackTrace();
                    }
                }
            }"> </WordDescV1> <br/><p>✔ 위코드를 복사하고 Ctrl+Shift+F 를 하면 이클립스에서 코드가 정리됩니다.</p>
            <p>✔ 기본 포트번호가 3306이지만 MySQL Workbench 홈에서 각자 포트번호 한번 보시기 바랍니다. </p>
            <p>✔ cmd창 ➡ mysql -u root -p1234 입력➡ show databases 입력, 만들어둔 sqltestdb 확인 <br/>
            ➡ use sqltestdb 입력 ➡ show tables; 입력, 테이블 확인하는 방법 <br/>
            ➡ select * from test; 입력, 테이블의 레코드를 보는 sql문 <br/> 
            ➡ exit 입력 혹은 그냥 종료해도 상관없음  </p> <br/> 
            <a href="https://dev.mysql.com/downloads/" target='blank'> 👀 MySQL 다운로드 전체 </a> <br/>
            <a href="https://dev.mysql.com/downloads/windows/installer/8.0.html" target='blank'> 👀 MySQL Community Downloads MSI Installer</a>  <br/>
            <a href="https://dev.mysql.com/downloads/connector/net/" target='blank'> 👀 MySQL Connector NET </a>  <br/>
            <ImageSlider image={arr=['/img/jsp1_4_','27','.png']}> </ImageSlider>

            <p style={{background: 'red'}}>  </p>
            <Article stitle="1) JSP" content="JSP란?"/>
            <WordDescV1 desc=""
            example="< style={{background: 'red'}}>  </>"> </WordDescV1>
            <p style={{background: 'red'}}>  </p>
        </div>
    );
}

//JSP - OracleDB
const Jsp2 = () => {
    var arr = [];

    return(
        <div>
            <Title div="1. JSP 기초"> <a name="top"> </a></Title>

            <Article stitle="1) JSP" content="JSP란?"/>
            <WordDescV1 desc="자바에서 HTML,JavaScript를 사용할 수 있게 해주는 프레임워크
            Servlet에서 더 향상된 프레임워크로 기반은 Servlet이고, Servlet보다 Html,JavaScript를 좀더
            사용자는 편하게 사용할 수 있다는 장점이 있다."
            example=""> </WordDescV1>
            <p> 그렇다면 왜 JSP가 탄생했을까? 웹에 처음으로 돌아가서 단계별로 설명하겠다. </p>
                <p>(1) 초창기의 웹은
                HTML,CSS문서와 같이 움직이지 않는 정적인 페이지만을 처리하였다. 그래서 동적인 움직이는 페이지를 사용자는 원하게 되었고</p>
                <p>(2) 자바스크립트와 같이 동적인 페이지를 만들 수 있게 되었다. 하지만 문제가 있었다. 그떄 당시에는 
                동적인 페이지를 서버가 처리를 하고 클라이언트에게 보내는 것이 아니라 통쨰로 클라이언트에게 보내고  
                클라이언트는 그떄 당시에는 거대한 용량을 스스로 처리해야 하는 부담이 생겼다. 그렇다고 서버가 데이터베이스와 결과를 처리를 해서 
                보내기에는또 부담이 크기 때문에 이 또한 불가능 하였다.</p>
                <p>(3) 이렇기 떄문에 클라이언트와 데이터베이스(서버) 중간에 미들웨어(서버)라는 존재가 탄생하였다. 중간에서
            클라이언트의 요청과 데이터베이스에서 결과를 받고 처리를 해서 클라이언트에게 넘겨주는 방식이 생겨나게 되었다. </p>
                <p>(4) 미들웨어가 존재해서 편해졌는데 시대가 발전하고 처리할 요구가 많아지자 정적데이터와 동적데이터를 처리하는
                    미들웨어 2개로 나뉘게 되었다. 이 때 동적데이터를 처리하는 서버를 WAS라 부르고 아파치톰캣이 이와 같은 역할을 하는 것이다. </p>
                <p>(5) 과거에는 WAS는 정적인 데이터를 처리하는 웹서버 역할을 하지 않았지만 지금은 WAS가 처리는 가능하지만
                    웹서버와 동시에 운영을 한다(WAS에 문제가 발생하여도 안정적인 서버운영이 가능하기 떄문) </p>

            <Article stitle="2) JSP 이클립스에서 설정하기" content="JSP사용하기 위한 다운로드"/>
            <WordDescV1 desc="
            1. 이클립스 설치 -> 2. apache tomcat설치 -> 3.이클립스 실행"
            example=""> </WordDescV1>
            <a href="https://www.eclipse.org/downloads/" target='blank' > 👀 이클립스 설치 </a> <br/>
            <a href="https://tomcat.apache.org/download-80.cgi" target='blank'> 👀 아파치톰캣 설치 </a>

            <Article stitle="3) JSP" content="JSP사용하기 위한 이클립스 초기설정"/>
            <WordDescV1 desc="JSP를 사용하기 위해 기본 설치를 하는 과정"
            example="아파치 톰캣이 실행되기까지 테스트"> </WordDescV1>
            <p style={{background: 'red'}}>  </p>
            {/* mysql과 똑같은 방법이므로 이미지 공동으로 사용 */}
            <ImageSlider image={arr=['/img/jsp1_3_','20','.png']}> </ImageSlider>

            <Article stitle="4) JSP-OracleDB" content="JSP와 OracleDB 연결하기"/>
            <WordDescV1 desc="OracleDB을 사용하기 위해 OracleDB을 설치하고 연동하는 과정"
            example="package day2;

            public class Test2 {
                public static void main(String[] args) {
                    String DBdriver = &quot;oracle.jdbc.driver.OracleDriver&quot;;
                    String url = &quot;jdbc:oracle:thin:@localhost:1521:xe&quot;;
                    String user = &quot;c##coin666&quot;
                    String password = &quot;1234&quot;;
                    Connection conn = null;
                    
                    try {
                        Class.forName(DBdriver);
                        conn = DriverManager.getConnection(url, user, password);
                        conn.close();
                        System.out.println(&quot;확인&quot;);
                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                }
            }
            }"> </WordDescV1> <br/><p>✔ 위코드를 복사하고 Ctrl+Shift+F 를 하면 이클립스에서 코드가 정리됩니다.</p>
            <p>✔ 기본 포트번호가 1521이므로 OracleDB Developer 홈에서 각자 포트번호 한번 보시기 바랍니다. </p>
            <p>✔ cmd창 ➡ mysql -u root -p1234 ➡ show databases 입력, 만들어둔 sqltestdb 확인 ➡
                use sqltestdb ➡ show tables; 입력, 테이블 확인하는 방법 ➡ select * from test; 입력, 테이블의
                레코드를 보는 sql문 ➡ exit 입력 혹은 그냥 종료해도 상관없음  </p>
            <a href="" target='blank'> 👀 OracleDB 다운로드 전체 </a> <br/>
            <a href="" target='blank'> 👀 OracleDB Community Downloads MSI Installer</a>  <br/>
            <a href="" target='blank'> 👀 OracleDB Connector NET </a>  <br/>
            <ImageSlider image={arr=['/img/jsp2_4_','27','.png']}> </ImageSlider>

            <Article stitle="5) 개념공부) 브라우저, 클라이언트, 서버" 
            content="브라우저, 클라이언트, 서버?"/>
            <p> 브라우저는 크롬,사파리,인터넷익스플로러 등 사용자가 웹페이지를 볼 수 있는 환경</p>
            <p> 클라이언트는 브라우저,인터넷 등을 사용하는 사용자 </p>
            <p> 서버는 클라이언트에게 저장된 리소스나 서비스를 제공하는 주체(회사)이다.</p>
            <p style={{background: 'red'}}>  </p>

            <p style={{background: 'red'}}>  </p>
            <Article stitle="1) JSP" content="JSP란?"/>
            <WordDescV1 desc=""
            example="< style={{background: 'red'}}>  </>"> </WordDescV1>
            <p style={{background: 'red'}}>  </p>
                        
        </div>
    );
}

