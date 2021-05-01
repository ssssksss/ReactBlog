import { Component } from 'react';
import './Nav1.css';

//클래스 컴포넌트
class Nav1 extends Component {
    render() {
      return (
        <nav>
          <div> {this.props.title}</div>
          <div> {this.props.sub}</div>
        </nav>
      );
    }
  }

export default Nav1;
