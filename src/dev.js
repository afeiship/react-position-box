import './dev.scss';
import { ReactPositionBox, ReactPositionChild } from './main';

/*===example start===*/

// install: npm install afeiship/react-position-box --save
// import : import ReactPositionBox from 'react-position-box'

class App extends React.Component {
  state = {

  };

  constructor(props) {
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  render() {
    return (
      <div className="hello-react-position-box">
        <ReactPositionBox className="test-box">
          <ReactPositionChild direction="top">
            TOP
          </ReactPositionChild>
          <ReactPositionChild direction="right">
            RIGHT
          </ReactPositionChild>
          <ReactPositionChild direction="bottom">
            BOTTOM
          </ReactPositionChild>
          <ReactPositionChild direction="left">
            LEFT
          </ReactPositionChild>
          <ReactPositionChild direction="center">
            CENTER
          </ReactPositionChild>
          <ReactPositionChild direction="tl">
            TL
          </ReactPositionChild>
          <ReactPositionChild direction="tr">
            TR
          </ReactPositionChild>
          <ReactPositionChild direction="bl">
            BL
          </ReactPositionChild>
          <ReactPositionChild direction="br">
            BR
          </ReactPositionChild>
        </ReactPositionBox>
      </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
