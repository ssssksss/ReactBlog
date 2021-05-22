import './Section.css';
import {useState, useEffect} from 'react';
import Page from './page.js';

const Section = (props) => {
    const [changePage,setChangePage] = useState('main');

    // Sidemenulist에서 목록을 누르면 section구간에 페이지를 랜더링 해줌
    useEffect( ()=> {
      console.log("새로운 페이지 렌더링");
      setChangePage(props.page);
    },[props.page])

    return (
      <div className="section_container">
          {/* <LeftAside> </LeftAside> */}
          <PostArea page={changePage}> </PostArea>
          <RightAside> </RightAside>
      </div>
    );
  }

  const PostArea = (props) => {
    return (
      <div className="postarea_container area_container">
          <Page page={props.page}> </Page>
      </div>
    );
  }
  const RightAside = (props) => {
    return (
      <div className="rightaside_container area_container">
        사이드 메뉴
      </div>
    );
  }
export default Section;