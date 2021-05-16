import './Section.css';
import {useState, useEffect} from 'react';
import Page from './page.js';

const Section = (props) => {
    const [changePage,setChangePage] = useState('main');

    useEffect( ()=> {
      console.log("새로운 페이지 렌더링");
      setChangePage(props.page);
    },[props.page])

    return (
      <div class="section_container">
            <LeftAside> </LeftAside>
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
  const LeftAside = (props) => {
    return (
      <aside className="lefaside_container area_container">
        왼쪽 사이드 영역
      </aside>
    );
  }
  const RightAside = (props) => {
    return (
      <aside className="rightaside_container area_container">
        오른쪽 사이드 영역
      </aside>
    );
  }

export default Section;