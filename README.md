# react-position-box
> Position box for react

## properties:
```javascript

  static propTypes = {
    className: PropTypes.string,
    position: PropTypes.oneOf(DEFAULT_POSITION),
  };

  static defaultProps = {
    position: 'relative'
  };
  
```

## install && import:
```bash
npm install --save afeiship/react-position-box --registry=https://registry.npm.taobao.org
```

```js
import {ReactPositionBox, ReactPositionChild} from 'react-position-box';
```

```scss
// customize your styles:
$react-position-box-options:(
);

@import 'node_modules/react-position-box/dist/style.scss';
```


## usage:
```jsx

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

```
