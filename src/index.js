import React from 'react';
import ReactDOM from 'react-dom';
import Remarkable from './common/remarkable.min';
import Hello from './component/main';

import './styles/style.css';
import './styles/bootstrap/js/bootstrap';


class Mainheader extends React.Component {
    render() {
        return (
            <header className="navbar navbar-default navbar-static-top bs-docs-nav" id="top">
                <div className="container">
                    <div className="navbar-header">
                        <button className="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#bs-navbar" aria-controls="bs-navbar" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a href="/" className="navbar-brand">Home</a>
                    </div>
                    <nav id="bs-navbar" className="collapse navbar-collapse">
                      <ul className="nav navbar-nav">
                        {/* <li>
                          <a href="/about/" >About</a>
                        </li>
                        <li><a href="/Blogs/" >Blogs</a></li> */}
                      </ul>
                      <ul className="nav navbar-nav navbar-right">
                          <li>
                            <a href="/about/">About</a>
                          </li>
                          <li><a href="/Blogs/">Blogs</a></li>
                      </ul>
                  </nav>
              </div>
          </header>
        )
    }
}

var MainCool = React.createClass({
  render(){
    var md = new Remarkable();

    return (
        <div className="main-cool">
            {md.render('# MISS YOU')}
        </div>
    );
  }
});
class Main extends React.Component {
  render() {
    return (
        <div className="content home">
            <Mainheader/>
            <MainCool/>
        </div>
    )
  }
}

function main(){
    ReactDOM.render(<Main />, document.getElementById('root'));
}
main();
