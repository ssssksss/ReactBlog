import './Section2.css';
import {useState, useEffect} from 'react';
import Page from './page.js';

//화면 2분할 좌측 760px , 우측 248px, 반응형 3단계 1024, 768
const Section2 = (props) => {
    const [changePage,setChangePage] = useState('main');

    // Sidemenulist에서 목록을 누르면 section구간에 페이지를 랜더링 해줌
    useEffect( ()=> {
      console.log("새로운 페이지 렌더링");
      setChangePage(props.page);
    },[props.page])

    return (
      <section className="section2_container">
        <div className="section2_frame">
          <div className="area1_container area_container">
             <Page page={changePage}> </Page>
          </div>
          <div className="area2_container area_container">
            사이드 메뉴
          </div>
        </div>
      </section>
    );
  }

export default Section2;