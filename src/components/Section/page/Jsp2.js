import React from 'react';
import ImageSlider from './ImageSlider.js';

//JSP - OracleDB
const Jsp2 = () => {
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
            {/* mysql과 똑같은 방법이므로 이미지 공동으로 사용 */}
            <br/>
            <ImageSlider image={arr=['/img/jsp1_3_','20','.png']}> </ImageSlider>

            <p stitle="4) JSP-OracleDB" content="JSP와 OracleDB 연결하기"/>
            <p desc="OracleDB을 사용하기 위해 OracleDB을 설치하고 연동하는 과정"
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
            }"> </p> <br/> 
            <p text="예제코드2 : package day2;

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
                }"> </p>
            
            
            
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
            <br/>
            <ImageSlider image={arr=['/img/jsp2_4_','20','.png']}> </ImageSlider> <br/><br/><br/>

            

            <p stitle="5) JSP 사용하기 " content="이클립스에서 JSP파일 생성"/>
            <p text="JSP는 HTML과 달리 <%@ %> 기호를 이용한다."> </p>
            <p> 만약에 작동이 잘 되지 않는다면 기존에 사용된 서버를 종료하고 다시 연결하기 ,
                그리고 ctrl + s 저장하기 누르기!! JSP는 저장 안되면 실행x  </p>
            <p> 개인마다 다르지만 아래의 경로를 따라가면 jsp파일이 java파일(Servlet)로 변한것을 볼 수 있다.   </p>
            <p> 이클립스폴더\.metadata\.plugins\org.eclipse.wst.server.core
                \tmp0\work\Catalina\localhost\day2\org\apache\jsp</p>
            <br/>
            <ImageSlider image={arr=['/img/jsp2_5_','2','.png']}> </ImageSlider> <br/>
            
            <p stitle="6) Servlet 사용하기" content="이클립스에서 Servlet파일 생성"/>
            <p text="Servlet은 코드를 작성하기 번거로우나 JSP파일은 Servlet으로 변환이
            되므로 개발자는 알아두어야 한다. "> </p>
            <p> Servlet은 그냥 실행해도 결과가 나온다 <div className=""></div></p>
            <br/>
            <ImageSlider image={arr=['/img/jsp2_6_','5','.png']}> </ImageSlider> <br/>
            
            <p stitle="7) JSP 문법" content="JSP 코드 작성 및 문법이해"/>
            <p> JSP문법</p>
            <p> 선언문(Declaration) : &lt;%! %&gt; , (메서드,변수 등)선언 태그 </p>
            <p> 표현식(Experssion) : &lt;%= %&gt; , 화면에 출력할 때 사용, 메소드 호출</p>
            <p> 스크립트릿(Scriptlet) : &lt;% %&gt;  , 끊어서도 사용 가능, 일반적인 코드 작성</p>
            <p> html주석 : &lt;!-- --&gt; </p>
            <p> JSP주석 : &lt;%-- --%&gt; </p>
            <p> Java주석 : // , /**/ </p>
            <br/>

            <p> &lt;%@ isErrorPage="true" %&gt; 에러가 났을때 발생하는 페이지 </p>
            <p> &lt;%@ errorPage=".jsp" %&gt; 에러가 났을때 발생하는 이동되는 페이지 </p>
            <p> &lt;%@ include file=".jsp" %&gt; 다른 파일 불러오기  </p>
            <p> &lt;jsp:include page=".jsp" &gt; &lt;/jsp:include&gt; 요청전달에 사용, 다른페이지를 현재페이지에 포함, 실행시점에 해당파일 호출
                그 결과를 포함 ,제어권이 현재 페이지</p>
            <p> &lt;jsp:param value="" name="" @등="" %&gt; 매개변수로 받아옴 </p>
            <p> &lt;jsp:forward page=".jsp" &gt; &lt;/jsp:forward&gt; 제어권이 다른 페이지 </p>
            <br/>

            <p> JSP 내장객체 </p>
            <p>request, resposne, pageContext, session, application, page, out, config</p>
            <p> HTML에서 파라미터 받아오는 법: request.getParameter("name값"); </p>
            <p> 요청한 받은값 인코딩: request.setCharacterEncoding("UTF-8");</p>
            <p> 요청한 받은값 인코딩: request.getParameterValues("배열일떄");</p>
            <p> 요청받은 메소드 확인 request.getMethod()</p>
            <p> 요청받은 프로토콜 확인 request.getProtocol()</p>
            
            <br/>
            <ImageSlider image={arr=['/img/jsp2_7_','4','.png']}> </ImageSlider> <br/>

            <p stitle="8) Servlet 이용" content="Servlet 이용해보기"/>
            <p>✔ Servlet과 JSP문법의 큰 차이는 없고 HTML코드를 작성하는 부분만 약간 다르다.</p>
            <p>✔ Ctrl + Shift + O 하면 import가 자동으로 된다.</p>
            <br/>
            <ImageSlider image={arr=['/img/jsp2_8_','2','.png']}> </ImageSlider> <br/>

            <p stitle="9) JSP JavaBean" content="JavaBean 이용"/>
            <p> 자바Bean은 자바로 작성된 소프트웨어 컴포넌트 </p>
            <p> 그렇다면 컴포넌트란 무엇인가? 컴포넌트라는 개념은 리액트에서도 볼 수 있는데
            간단하게 말하자면 가져다가 쓰면 바로 사용이 가능하게 만드는 것이다. 클래스 처럼
            변수,메소드 등을 가져오는것이 아니라 그냥 그 짜여진 프로그램을 통째로 가져와서 바로 사용할 수 있는것이다.
            페이스북은 리액트 컴포넌트가 몇천,몇만개로 구성이 되어있다고 한다.
            백엔드를 공부하고 싶지만 리액트에서 컴포넌트를 사용하고 
            그 매력에 빠져서 공부중이다라고 한다면 얼마나 좋은지 대답이 될 것 같다.</p>
            <br/>
            <ImageSlider image={arr=['/img/jsp2_9_','4','.png']}> </ImageSlider> <br/>

            <p stitle="10) Servlet 생명주기" content="Servlet 이해"/>
            <p>✔ Servlet은 생명주기가 존재한다. Init() - Service() - Destroy() </p>
            <p>✔ Servlet 공간에 Servlet 객체는 한개만 존재하고 똑같은 객체는 만들지 않는다. </p>
            <p> 1. 사용자가 처음으로 요청을 하면 init()과 service() 메소드를 실행한다. - 메모리에 객체가 없으므로 생성하고 service() 실행 </p>
            <p> 2. 사용자가 다시 요청을 하면 service() 메소드만 실행을 한다 - 이미 객체가 메모리상에 올라가 있으므로 새롭게 생성하지 않음 </p>
            <p> 3. 사용자가 servlet 코드를 수정을 하고 저장을 하면 destroy()가 실행이 된다. - 다른 객체가 되었으므로 기존에 있던 객체를 삭제 </p>
            <br/>
            <ImageSlider image={arr=['/img/jsp2_10_','0','.png']}> </ImageSlider> <br/>
           
            <p stitle="11) " content=""/>
            <p> </p>
            <ImageSlider image={arr=['/img/jsp2_9_','0','.png']}> </ImageSlider> <br/>           
            
            <p stitle="12)" content=""/>
            <p>  </p>
            <ImageSlider image={arr=['/img/jsp2_9_','0','.png']}> </ImageSlider> <br/>           
        </div>
    );
}

export default Jsp2;