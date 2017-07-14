import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link} from 'react-router-dom';


import './styles/style.css';
import './styles/bootstrap/js/bootstrap';

import Blogs from './component/blogs/index';

import Mainheader from './component/common/MainHeader';
import Cool from './component/home/Cool';
import Remarkable from './common/remarkable.min';

class Main extends React.Component {
    render() {
        return (
            <div className="content home">
                <Mainheader/>
                <Cool/>
            </div>
        )
    }
}


ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={Main}/>
            <Route exact path="/about" component={Blogs}/>
            <Route exact path="/blogs" component={Blogs}/>
            <Route exact path="/blogs/webpack/index" component={Blogs}/>
            <Route exact path="/blogs/react/index" component={Blogs}/>
        </div>

    </Router>, document.getElementById('root'));
