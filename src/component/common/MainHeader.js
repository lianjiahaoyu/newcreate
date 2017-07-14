import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link} from 'react-router-dom';
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
                            <Link to="/about/">About</Link>
                          </li>
                          <li><Link to="/Blogs/">Blogs</Link></li>
                      </ul>
                  </nav>
              </div>
          </header>
        )
    }
}
export default Mainheader;
