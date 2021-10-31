import { Component } from "react";
import { observer } from "mobx-react";
import InputStorage from "../stores/InputStorage";
import { data } from "autoprefixer";

class Iframe extends Component {

  createIframe() {
    const iframe = document.createElement('iframe'); 
    let data = InputStorage.data;

    document.getElementById('iframeContainer').appendChild(iframe);
    iframe.setAttribute('id', 'iframe');
    iframe.classList.add('h-full');
    iframe.classList.add('bg-gray-200');

    let ifrDoc = iframe.contentDocument;
    let elem = ifrDoc.createElement("h1");
    
    elem.innerText = data;
    ifrDoc.body.appendChild(elem);
    console.log(elem.innerText);
  }


  componentDidMount() {
    this.createIframe();
  }

  render() {
    return (
      <div id="iframeContainer" className="h-auto"></div>
    )
  }  
};

export default observer(Iframe);
