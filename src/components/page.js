import React,{useEffect, useState} from 'react';
import ImageSlider from './ImageSlider.js';
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
        case 'network1': //network
            return(<Network1></Network1>);
        case 'design1': //network
            return(<Design1></Design1>);
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
            <p>(6) Servlet은 자바기반으로 WAS에서 작동한다. 하지만 Servlet은 HTML 코드와 함께 작성하려면 코드작성이 불편하다
                그러므로 좀더 쉽게 코드를 작성하기 위해 JSP가 만들어졌다.</p>
            <p>(7) 클라이언트가 JSP로 요청을 하면 Servlet코드로 변경이되고(아파치톰캣의 역할) 처리결과를 HTML파일로 클라이언트에게 제공한다.</p>

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
                <p>(6) Servlet은 자바기반으로 WAS에서 작동한다. 하지만 Servlet은 HTML 코드와 함께 작성하려면 코드작성이 불편하다
                그러므로 좀더 쉽게 코드를 작성하기 위해 JSP가 만들어졌다.</p>
                <p>(7) 클라이언트가 JSP로 요청을 하면 Servlet코드로 변경이되고(아파치톰캣의 역할) 처리결과를 HTML파일로 클라이언트에게 제공한다.</p>

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

            import java.sql.Connection;
            import java.sql.DriverManager;
            
            public class Test2 {
                public static void main(String[] args) {
                    String url = &quot;jdbc:oracle:thin:@localhost:1521:xe&quot;;
                    String user =&quot;system&quot;;
                    String password = &quot;1234&quot;;
                    Connection conn = null;
                    try {
                        Class.forName(&quot;oracle.jdbc.driver.OracleDriver&quot;);
                        conn = DriverManager.getConnection(url,user,password);
                        conn.close();
                        System.out.println(&quot;확인&quot;);
                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                }
            }
            }"> </WordDescV1> <br/> 
            <Text text="예제코드2 : package day2;

                import java.sql.Connection;
                import java.sql.DriverManager;
                import java.sql.ResultSet;
                import java.sql.Statement;

                public class Test2 {
                    public static void main(String[] args) {
                        String url = &quot;jdbc:oracle:thin:@localhost:1521:xe&quot;;
                        String user =&quot;c##사용자명&quot;;
                        String password = &quot;1234&quot;;
                        Connection conn = null;
                        try {
                            Class.forName(&quot;oracle.jdbc.driver.OracleDriver&quot;);
                            String sql = &quot;SELECT * FROM testtable&quot;;
                            conn = DriverManager.getConnection(url,user,password);
                            Statement st = conn.createStatement();
                            ResultSet rs = st.executeQuery(sql);
                            while(rs.next()) {
                                System.out.println(rs.getString(1));
                            }
                            conn.close();
                            st.close();
                            rs.close();
                            System.out.println(&quot;확인&quot;);
                        } catch (Exception e) {
                            e.printStackTrace();
                        }

                    }
                }"> </Text>
            
            
            
            <br/><p>✔ 위코드를 복사하고 Ctrl+Shift+F 를 하면 이클립스에서 코드가 정리됩니다.</p>
            <p>✔ 기본 포트번호가 1521/xe </p>
            <p>✔ OracleDB를 설치하고 나서 아래 코드를 입력하여 테이블을 생성 </p>
            <p>cmd창 ➡ sqlplus system/1234 ➡  CREATE user c##유저이름 identified by 비밀번호; </p>
            <p>➡ GRANT connect,resource,create view,create procedure,dba,create any table to c##유저이름; 
            <p>➡  conn c##사용자명/비밀번호; ➡ create table testtable(num number); </p>
            ➡ insert into testtable values(1); <br/> 
            ➡ insert into testtable values(2); <br/> 
            ➡ insert into testtable values(3); <br/> 
            ➡ select * from testtable; 입력, 테이블의 레코드를 보는 sql문 <br/> 
            ➡ exit 입력 혹은 그냥 종료해도 상관없음  </p> <br/> 
            <a href="https://www.oracle.com/database/technologies/xe-downloads.html" target='blank'> 👀 OracleXE(필수) </a>  <br/>
            <a href="https://www.oracle.com/database/technologies/appdev/jdbc-downloads.html" target='blank'> 👀 OracleDB JDBC 드라이버(필수) </a>  <br/>
            <a href="https://www.oracle.com/tools/downloads/sqldev-downloads.html" target='blank'> 👀 OracleDB Developer </a>  <br/>
            <ImageSlider image={arr=['/img/jsp2_4_','20','.png']}> </ImageSlider> <br/><br/><br/>

            

            <Article stitle="5) JSP 사용하기 " 
            content="브라우저, 클라이언트, 서버?"/>
            <p> </p>
            
            
            <Article stitle="6) " content="?"/>
            <WordDescV1 desc=""
            example=""> </WordDescV1>

            
            <Article stitle="6) " content="?"/>
            <WordDescV1 desc=""
            example=""> </WordDescV1>

            <Article stitle="6) " content="?"/> 
            <WordDescV1 desc=""
            example=""> </WordDescV1>
                        
        </div>
    );
}

//Newwork
const Network1 = () => {
    var arr = [];

    return(
        <div>
            <Title div="1. Network 기초"> <a name="top"> </a></Title>

            <Article stitle="1) Protocol" content="Protocol 이란?"/>
            <Text text="데이터를 전송하는 통신 규약, 어떻게 데이터를 전송을 할지
            전 세계적으로 정해놓아서 통일된 약속이다. 예를 들어 우리가 택배를 보내는데
            보내는 사람, 받는 사람, 받는 주소를 적어야 하는 것처럼 프로토콜을 여러개의 계층, 패킷으로
            이루어져있다."
            example=""> </Text>

            
            <Article stitle="2) OSI 7 Layer" content="OSI 7 layer?"/>
            <Text text="통신하는데 보내는 프로토콜을 7단계로 나누어 표현을 한 방식"> </Text>
            <Text text="1~7계층 까지 물리-데이터링크-네트워크-전송-세션-표현-응용 
            이렇게 7가지 정도로 나뉘어진다."> </Text>
            <p>1계층 : 이진화된 데이터 </p>
            <p>2계층 : MAC 주소 (IP주소 보다 좀 더 자세한 주소) </p>
            <p>3계층 : IP 주소 </p>
            <p>4계층 : 데이터 흐름 (TCP/IP , UDP) </p>
            <p>5계층 : 동기화 </p>
            <p>6계층 : 암호화 - 복호화 </p>
            <p>7계층 : 데이터를 해석해주는 프로그램 </p>

            <Article stitle="3) OSI 7 Layer 1계층 " content="?"/>
            <Text text=""> </Text>

            <Article stitle="4) OSI 7 Layer 2계층" content="?"/>
            <Text text=""> </Text>

            <Article stitle="5) OSI 7 Layer 3계층" content="?"/>
            <p>IP주소를 가지고 있는 계층으로 IPv4를 일반적으로 사용하지만전세계 IP주소가 부족하여 IPv6를 사용하려 한다. </p>
            <p>하지만 IPv6로 사용을 하려면 모든 기존 기기를 바꿔야 하는 단점이 있다. </p>
            <p>그래서 IP주소의 부족으로 개선된 방법중에 사설IP와 공인IP라는 개념이 있다. </p>
            <p>라우터, 공유기 등등 설명추가 </p>

            <Article stitle="6) OSI 7 Layer 4계층" content="?"/>
            <p> </p>

            <Article stitle="7) OSI 7 Layer 5계층" content="?"/>
            <p> </p>

            <Article stitle="8) OSI 7 Layer 6계층" content="?"/>
            <p> </p>

            <Article stitle="9) OSI 7 Layer 7계층" content="?"/>
            <p> </p>

            <Article stitle="10) " content="?"/>
            <p> DNS , URL , 네트워크 , 웹, 인터넷, 서버, 프로토콜, </p>
            <p> GET , POST </p>
            
        </div>
    );
}

//디자인 - Figma
const Design1 = () => {
    var arr = [];

    return(
        <div>
            <Title div="1. Figma"> <a name="top"> </a></Title>

            <Article stitle="6) " content="?"/>
            <WordDescV1 desc=""
            example=""> </WordDescV1>

            
            <Article stitle="6) " content="?"/>
            <WordDescV1 desc=""
            example=""> </WordDescV1>

            <Article stitle="6) " content="?"/> 
            <WordDescV1 desc=""
            example=""> </WordDescV1>
                        
        </div>
    );
}