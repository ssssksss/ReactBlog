import React from 'react';
import ImageSlider from './ImageSlider.js';

//JSP - MySQL
const Jsp1 = () => {
    var arr = [];

    return(
        <div className="page_container">
            <p div="1. JSP 기초"> <a name="top"> </a></p>

            <p stitle="1) JSP" content="JSP란?"/>
            <p desc="자바에서 HTML,JavaScript를 사용할 수 있게 해주는 프레임워크
            Servlet에서 더 향상된 프레임워크로 기반은 Servlet이고, Servlet보다 Html,JavaScript를 좀더
            사용자는 편하게 사용할 수 있다는 장점이 있다."
            example=""> </p>
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

            <p stitle="2) JSP 이클립스에서 설정하기" content="JSP사용하기 위한 다운로드"/>
            <p desc="
            1. 이클립스 설치 -> 2. apache tomcat설치 -> 3.이클립스 실행"
            example=""> </p>
            <a href="https://www.eclipse.org/downloads/" target='blank' > 👀 이클립스 설치 </a> <br/>
            <a href="https://tomcat.apache.org/download-80.cgi" target='blank'> 👀 아파치톰캣 설치 </a>

            <p stitle="3) JSP" content="JSP사용하기 위한 이클립스 초기설정"/>
            <p desc="JSP를 사용하기 위해 기본 설치를 하는 과정"
            example="아파치 톰캣이 실행되기까지 테스트"> </p>
            <p style={{background: 'red'}}>  </p>
            <ImageSlider image={arr=['/img/jsp1_3_','20','.png']}> </ImageSlider>

            <p stitle="4) JSP-MySQL" content="JSP와 MySQL 연결하기"/>
            <p desc="MySQL을 사용하기 위해 MySQL을 설치하고 연동하는 과정"
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
            }"> </p> <br/><p>✔ 위코드를 복사하고 Ctrl+Shift+F 를 하면 이클립스에서 코드가 정리됩니다.</p>
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
            <p stitle="1) JSP" content="JSP란?"/>
            <p desc=""
            example="< style={{background: 'red'}}>  </>"> </p>
            <p style={{background: 'red'}}>  </p>
        </div>
    );
}

export default Jsp1;