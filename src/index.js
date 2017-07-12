import React from 'react';
import ReactDOM from 'react-dom';
import Remarkable from 'remarkable';
import Hello from './component/main.jsx';

import './styles/style.css';
import './styles/bootstrap/js/bootstrap';

var md = new Remarkable({
  html:         false,        // Enable html tags in source
  xhtmlOut:     false,        // Use '/' to close single tags (<br />)
  breaks:       false,        // Convert '\n' in paragraphs into <br>
  langPrefix:   'language-',  // CSS language prefix for fenced blocks
  linkify:      false,        // Autoconvert url-like texts to links
  typographer:  false,        // Enable smartypants and other sweet transforms
  // Highlighter function. Should return escaped html,
  // or '' if input not changed
  highlight: function (/*str, , lang*/) { return ''; }
});
console.log(md.render('# Remarkable rulezz!'));
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
    return (
        <div className="main-cool">

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
