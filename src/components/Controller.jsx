import React, {Component} from "react";
import { ImageUpload } from "./ImageUpload";

class Controller extends Component {

  render() {
    return (
      <div>
        <div className="grid text-left">
          <label htmlFor="input" className="text-gray-600">Input Text</label>
          <div>
            <input type="text" 
            value={this.props.inputStorage} 
            onChange={(e) => this.props.onInputChange(e.target.value)} 
            className="border border-gray-200 outline-none rounded mt-2 mb-8" />
          </div>
          <label htmlFor="select" className="text-gray-600">Please Choose a Background Color</label>
          <select 
          className="text-purple-500 outline-none border border-gray-200 rounded py-1" 
          name="select" 
          onChange={(e) => this.props.onColorChange(e.target.value)} 
          id="selectOptionValue">
            <option defaultValue value="bg-gray-300">Default: Gray</option>
            <option defaultValue value="bg-white">White</option>
            <option value="bg-red-400">Light Red</option>
            <option value="bg-yellow-500">Orange</option>
            <option value="bg-green-300">Light Green</option>
            <option value="bg-blue-500">Blue</option>
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