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
      <ul class="section_container">
            <LeftAside> </LeftAside>
            <PostArea page={changePage}> </PostArea>
            <RightAside> </RightAside>
      </ul>
    );
  }

  const LeftAside = (props) => {
    return (
      <li className="leftaside_container area_container">
        왼쪽 사이드 영역
      </li>
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
        오른쪽 사이드 영역
      </li>
    );
  }
export default Section;