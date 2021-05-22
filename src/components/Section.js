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
      <ul className="section_container">
          {/* <LeftAside> </LeftAside> */}
          <PostArea page={changePage}> </PostArea>
          <RightAside> </RightAside>
      </ul>
    );
  }

  const PostArea = (props) => {
    return (
      <li className="postarea_container area_container">
          <Page page={props.page}> </Page>
      </li>
    );
  }
  const RightAside = (props) => {
    return (
      <li className="rightaside_container area_container">
        사이드 메뉴
      </li>
    );
  }
export default Section;