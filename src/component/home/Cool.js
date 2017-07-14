import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link} from 'react-router-dom';
import Remarkable from '../../common/remarkable.min';

var Cool = React.createClass({
    rawMarkup:function(){
      var md = new Remarkable();
      var rawMarkup = md.render('# Miss You');
      return {__html:rawMarkup};
    },
    render(){

        return (
            <div className="container main-cool">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="intro-message">
                            <h1 dangerouslySetInnerHTML={this.rawMarkup()}></h1>
                            <div className="intro-divider">
                                <ul className="list-inline intro-social-buttons">
                                    <li>
                                        <Link to="https://github.com/lianjiahaoyu/silentrain" className="btn btn-default btn-lg"><i className="fa fa-github fa-fw"></i><span className="network-name">Github</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/blogs/webpack/index" className="btn btn-default btn-lg"><i className="fa fa-github fa-fw"></i><span className="network-name">Webpack</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/blogs/react/index" className="btn btn-default btn-lg"><i className="fa fa-github fa-fw"></i><span className="network-name">React</span></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
export default Cool;
