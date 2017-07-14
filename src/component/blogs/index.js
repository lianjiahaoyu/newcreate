import React from 'react';
import ReactDOM from 'react-dom';
import Remarkable from '../../common/remarkable.min';

import hljs from '../../common/highlight.site.pack';
import '../../styles/highlight/github';
import Mainheader from '../common/MainHeader';

var md = new Remarkable({
    html:         false,        // Enable html tags in source
    xhtmlOut:     false,        // Use '/' to close single tags (<br />)
    breaks:       false,        // Convert '\n' in paragraphs into <br>
    langPrefix:   'language-',  // CSS language prefix for fenced blocks
    linkify:      false,        // Autoconvert url-like texts to links
    typographer:  false,        // Enable smartypants and other sweet transforms
    // Highlighter function. Should return escaped html,
    // or '' if input not changed
    highlight: function (str, lang) {console.log(str)
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(lang, str).value;console.log(1);
        } catch (err) {}
      }

      try {console.log(hljs.highlightAuto(str).value);
        return hljs.highlightAuto(str).value;
      } catch (err) {}

      return ''; // use external default escaping
    }
});
var MainCool = React.createClass({
    getInitialState: function() {//组件相关的状态对象
        return {
            text: {__html:'null'}
        };
    },
    componentDidMount() {
        this.getData();
    },
    getData:function(){
        var _path = location.hash.slice(1);
        $.ajax({
            url:'/src/component/'+_path+'.md',
            dataType:'text'
        }).done((response) =>{
            var rawMarkup = md.render(response);
            this.setState({
                text: {__html:rawMarkup}
            });
        });
    },
    rawMarkup:function(){

      var rawMarkup = md.render('# Miss You');
      return {__html:rawMarkup};
    },
    render(){
        return (
            <div className="content blogs">
                <Mainheader/>
                <div className="container" dangerouslySetInnerHTML={this.state.text}>
                </div>
            </div>
        );
    }
});


export default MainCool;
