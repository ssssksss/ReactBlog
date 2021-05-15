import './Section.css';

const Section = (props) => {
    return (
      <div class="section_container">
            <LeftAside> </LeftAside>
            <PostArea> </PostArea>
            <RightAside> </RightAside>
      </div>
    );
  }
  const PostArea = (props) => {
    return (
      <div class="postarea_container">
        포스트 영역
      </div>
    );
  }
  const LeftAside = (props) => {
    return (
      <aside class="lefaside_container">
        왼쪽 사이드 영역
      </aside>
    );
  }
  const RightAside = (props) => {
    return (
      <aside class="rightaside_container">
        오른쪽 사이드 영역
      </aside>
    );
  }

export default Section;