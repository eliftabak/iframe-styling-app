import { useEffect } from "react";
import { observer } from "mobx-react";

const Iframe = (props) => {

  const addClass = () => {
    document.getElementById('iframe').classList.add('h-full')
  }

  useEffect(() => {
    addClass();
  });

    return (
      <div id="iframeContainer" className="h-auto">
        <div className="border-8 rounded-2xl border-gray-100 h-full z-0 w-62">
          <h1 className={props.colorStorage}>{props.inputStorage}</h1>
          <iframe title="iframe" className={props.colorStorage} id="iframe">
          </iframe>
        </div>
      </div>
    )
};

export default observer(Iframe);
