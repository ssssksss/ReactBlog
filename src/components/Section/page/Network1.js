import React from 'react';
import ImageSlider from './ImageSlider.js';

//Newwork
const Network1 = () => {
    var arr = [];

    return(
        <div className="page_container">
            <p div="1. Network 기초"> <a name="top"> </a></p>

            <p stitle="1) Protocol" content="Protocol 이란?"/>
            <p text="데이터를 전송하는 통신 규약, 어떻게 데이터를 전송을 할지
            전 세계적으로 정해놓아서 통일된 약속이다. 예를 들어 우리가 택배를 보내는데
            보내는 사람, 받는 사람, 받는 주소를 적어야 하는 것처럼 프로토콜을 여러개의 계층, 패킷으로
            이루어져있다."
            example=""> </p>

            
            <p stitle="2) OSI 7 Layer" content="OSI 7 layer?"/>
            <p text="통신하는데 보내는 프로토콜을 7단계로 나누어 표현을 한 방식"> </p>
            <p text="1~7계층 까지 물리-데이터링크-네트워크-전송-세션-표현-응용 
            이렇게 7가지 정도로 나뉘어진다."> </p>
            <p>1계층 : 이진화된 데이터 </p>
            <p>2계층 : MAC 주소 (IP주소 보다 좀 더 자세한 주소) </p>
            <p>3계층 : IP 주소 </p>
            <p>4계층 : 데이터 흐름 (TCP/IP , UDP) </p>
            <p>5계층 : 동기화 </p>
            <p>6계층 : 암호화 - 복호화 </p>
            <p>7계층 : 데이터를 해석해주는 프로그램 </p>

            <p stitle="3) OSI 7 Layer 1계층 " content="?"/>
            <p text=""> </p>

            <p stitle="4) OSI 7 Layer 2계층" content="?"/>
            <p text=""> </p>

            <p stitle="5) OSI 7 Layer 3계층" content="?"/>
            <p>IP주소를 가지고 있는 계층으로 IPv4를 일반적으로 사용하지만전세계 IP주소가 부족하여 IPv6를 사용하려 한다. </p>
            <p>하지만 IPv6로 사용을 하려면 모든 기존 기기를 바꿔야 하는 단점이 있다. </p>
            <p>그래서 IP주소의 부족으로 개선된 방법중에 사설IP와 공인IP라는 개념이 있다. </p>
            <p>라우터, 공유기 등등 설명추가 </p>

            <p stitle="6) OSI 7 Layer 4계층" content="?"/>
            <p> </p>

            <p stitle="7) OSI 7 Layer 5계층" content="?"/>
            <p> </p>

            <p stitle="8) OSI 7 Layer 6계층" content="?"/>
            <p> </p>

            <p stitle="9) OSI 7 Layer 7계층" content="?"/>
            <p> </p>

            <p stitle="10) " content="?"/>
            <p> DNS , URL , 네트워크 , 웹, 인터넷, 서버, 프로토콜, </p>
            <p> GET , POST </p>
            
        </div>
    );
}

export default Network1;