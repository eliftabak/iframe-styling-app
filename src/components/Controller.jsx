import React, {Component} from "react";
import { ImageUpload } from "./ImageUpload";
// import Input from "./Input";

class Controller extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }

    this.InputStorage = this.props.InputStorage;
  }

  setData() {
    let value = this.state.value;

    this.InputStorage.data.push(value);

    console.log(this.InputStorage.data)
    
    this.setState({
      value: ''
    });
  }

  render() {
    return (
      <div>
        <div className="grid text-left">
          <label htmlFor="input" className="text-gray-600">Input Text</label>
          {/* <Input InputStorage={InputStorage}/> */}
          <div>
          <input type="text" 
          value={this.state.value} 
          onChange={(e) => { this.setState({value: e.target.value})}} 
          className="border border-gray-200 outline-none rounded mt-2 mb-8" />
          <button onClick={() => this.setData() }>Add Text to iFrame</button>
          </div>
          <select className="text-purple-500 border border-gray-200 rounded py-1" name="select" id="select">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
          <input type="checkbox" name="toggle" className="hidden" />
          <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in my-8">
            <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
            <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
          </div>
        </div>
      <ImageUpload/>
      </div>
    );
  }
};

export default Controller;