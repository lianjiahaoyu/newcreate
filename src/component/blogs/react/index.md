# React
### 安装 React JS

```
npm install react --save
```

### 在代码中使用 ReactJS
```
import React from 'react';

export default class Hello extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}
```



### react-router
```
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

    const BasicExample = () => (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/topics">Topics</Link></li>
          </ul>

          <hr />

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
        </div>
      </Router>
      );
```
var index = 1;
