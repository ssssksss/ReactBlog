import React from "react"
import ImageSlider from "./ImageSlider.js"

//Newwork
const Network1 = () => {
  var arr = []

  return (
    <div className="page_container">
      <a name="top"> </a>
      <p className="title"> 네트워크, 프로토콜 설명 </p>
      {/* <br/> <p className="stitle"> 3) Nodejs </p>*/}
      {/* div.content_container>(p>{$. })* */}
      {/* <CopyButton text='' content=""> </CopyButton>*/}
      {/* <ImageSlider image={(arr = ["/img/jsp2/jsp2_10_", "0", ".png"])} ></ImageSlider>*/}
      <br /> <p className="stitle"> (1) 웹 프로그래밍 역사와 동작 원리 </p>
      <div className="content_container">
        <p>
          초창기 웹은 HTML,CSS와 같은 정적인 데이터만을 주고 받았습니다. 버튼을 누르거나 로그인과 같은 동적인 작동을 할 수 없었습니다. 그래거 동적인
          데이터를 처리할 수 있게 만들었는데 처음에는 동적인 데이터를 결과를 주는 것이 아니라 사용자에게 raw데이터를 주어서 해석하게 만들어 보내는
          용량도 크고 사용자가 떠맡는 부담도 크게 되었다. 그렇다고 서버에서 데이터베이스에서 데이터를 가져와 동적인 데이터를 처리하고 그 다음 결과를
          사용자에게 주기에는 부담이 너무 커졌다. 그래서 데이터베이스와 사용자사이에 미들웨어가 탄생하였는데 이것을 웹서버라고 하고 동적인데이터를
          처리해주는 WAS가 존재하게된다.(앞에 순서가 약간 바뀌었을 수도 있지만 대충 이러해서 웹서버가 탄생한것을 기억)
        </p>
        <p>
          {" "}
          이제는 사용자가 웹서버에 요청을 하면 웹서버는 정적과 동적데이터를 분리해서 처리해주고 결과를 사용자에게 전달해준다. WAS로 정적인 데이터를
          처리할 수 있지만 2가지를 동시에 사용하는 것이 문제가 발생하였을때 대처 효율이 좋다.{" "}
        </p>
        <p>그러면 네트워크 통신은 어떤 방식으로 이루어질까? 에 대해서는 아래 내용들을 읽어보면서 이해하기를 바란다.</p>
        {/* <CopyButton text='' content=""> </CopyButton>*/}
        {/* <ImageSlider image={(arr = ["/img/jsp2/jsp2_10_", "0", ".png"])} ></ImageSlider>*/}
      </div>
      <br /> <p className="stitle"> (2) 프로토콜 </p>
      <div className="content_container">
        <p>
          데이터를 전송하는 통신 규약, 어떻게 데이터를 전송을 할지 전 세계적으로 정해놓아서 통일된 약속이다. 예를 들어 우리가 택배를 보내는데 보내는
          사람, 받는 사람, 받는 주소를 적어야 하는 것처럼 프로토콜을 여러개의 계층, 패킷으로 이루어져있다.{" "}
        </p>
        <p> HTTP 프로토콜 : 컴퓨터에서 사용하는 통신 프로토콜 </p>
        <p> FTP 프로토콜 : 파일을 주고 받는 프로토콜 </p>
        <p> SMTP,POP 프로토콜 : 이메일 관련 프로토콜 </p>
        {/* <CopyButton text='' content=""> </CopyButton>*/}
        {/* <ImageSlider image={(arr = ["/img/jsp2/jsp2_10_", "0", ".png"])} ></ImageSlider>*/}
      </div>
      <br /> <p className="stitle"> (3) OSI 7 Layer </p>
      <div className="content_container">
        <p>통신하는데 보내는 프로토콜을 7단계로 나누어 표현을 한 방식 </p>
        <p> 1~7계층 까지 물리-데이터링크-네트워크-전송-세션-표현-응용 이렇게 7가지 정도로 나뉘어진다.</p>
        <p>1계층 : 이진화된 데이터 </p>
        <p>2계층 : MAC 주소 (IP주소 보다 좀 더 자세한 주소) </p>
        <p>3계층 : IP 주소 </p>
        <p>4계층 : 데이터 흐름 (TCP/IP , UDP) </p>
        <p>5계층 : 동기화 </p>
        <p>6계층 : 암호화 - 복호화 </p>
        <p>7계층 : 데이터를 해석해주는 프로그램 </p>
        <p>=== 3계층 ===</p>
        <p>IP주소를 가지고 있는 계층으로 IPv4를 일반적으로 사용하지만전세계 IP주소가 부족하여 IPv6를 사용하려 한다. </p>
        <p>하지만 IPv6로 사용을 하려면 모든 기존 기기를 바꿔야 하는 단점이 있다. </p>
        <p>그래서 IP주소의 부족으로 개선된 방법중에 사설IP와 공인IP라는 개념이 있다. </p>
        <p>라우터, 공유기 등등 설명추가 </p>
        {/* <CopyButton text='' content=""> </CopyButton>*/}
        {/* <ImageSlider image={(arr = ["/img/jsp2/jsp2_10_", "0", ".png"])} ></ImageSlider>*/}
      </div>
      <br /> <p className="stitle"> (4) 인터넷, 네트워크와 관련된 용어 </p>
      <div className="content_container">
        <p>
          port : 카톡, 페북, 인스타에서 데이터를 보내왔을때 컴퓨터가 하나의 경로(포트)로 받아오면 어떤 프로그램이 무엇을 보냈는지 구분을 할수가 없다.
          그러므로 카톡(포트1) , 페북(포트2) ,인스타(포트3) 처럼 포트로 구분하여 데이터를 구별하여 각자 받아온다. 포트는 일반적으로 랜덤으로 지정되고
          특정 포트는 이미 정해져있다. ctrl + alt + del 을 눌러서 세부정보,서비스에 보면 PID(포트번호)라는 것을 볼 수 있다. + cmd창에서 netstat -no
          입력하면 통신으로 주고 받는 포트번호를 볼 수 있다.
        </p>
        <p> IP 주소 : </p>
        <p>
          도메인 주소: 실제 www.naver.com의 주소는 127.125.123.123 이와 같이 되어있을 것이다. 하지만 사람이 이해하기에는 어려운 주소이므로 이것을
          도메인으로 바꾸어 쉽게? 기억할 수 있다.
        </p>
        <p> 게이트웨이 : </p>
        <p> 마그넷 주소 : </p>
        <p> : </p>
        <p> : </p>
        <p> : </p>
        {/* <CopyButton text='' content=""> </CopyButton>*/}
        {/* <ImageSlider image={(arr = ["/img/jsp2/jsp2_10_", "0", ".png"])} ></ImageSlider>*/}
      </div>
      {/* <br /> <p className="stitle"> ()  </p>
      <div className="content_container">
        <p>
        </p>
        <CopyButton text='' content=""> </CopyButton>
        <ImageSlider image={(arr = ["/img/jsp2/jsp2_10_", "0", ".png"])} ></ImageSlider>
      </div> */}
      {/* <br /> <p className="stitle"> ()  </p>
      <div className="content_container">
        <p>
        </p>
        <CopyButton text='' content=""> </CopyButton>
        <ImageSlider image={(arr = ["/img/jsp2/jsp2_10_", "0", ".png"])} ></ImageSlider>
      </div> */}
      {/* <br /> <p className="stitle"> ()  </p>
      <div className="content_container">
        <p>
        </p>
        <CopyButton text='' content=""> </CopyButton>
        <ImageSlider image={(arr = ["/img/jsp2/jsp2_10_", "0", ".png"])} ></ImageSlider>
      </div> */}
      {/* <br /> <p className="stitle"> ()  </p>
      <div className="content_container">
        <p>
        </p>
        <CopyButton text='' content=""> </CopyButton>
        <ImageSlider image={(arr = ["/img/jsp2/jsp2_10_", "0", ".png"])} ></ImageSlider>
      </div> */}
      {/* <br /> <p className="stitle"> ()  </p>
      <div className="content_container">
        <p>
        </p>
        <CopyButton text='' content=""> </CopyButton>
        <ImageSlider image={(arr = ["/img/jsp2/jsp2_10_", "0", ".png"])} ></ImageSlider>
      </div> */}
      {/* <br /> <p className="stitle"> ()  </p>
      <div className="content_container">
        <p>
        </p>
        <CopyButton text='' content=""> </CopyButton>
        <ImageSlider image={(arr = ["/img/jsp2/jsp2_10_", "0", ".png"])} ></ImageSlider>
      </div> */}
      {/* <br /> <p className="stitle"> ()  </p>
      <div className="content_container">
        <p>
        </p>
        <CopyButton text='' content=""> </CopyButton>
        <ImageSlider image={(arr = ["/img/jsp2/jsp2_10_", "0", ".png"])} ></ImageSlider>
      </div> */}
    </div>
  )
}

export default Network1
