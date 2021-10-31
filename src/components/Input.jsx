import React, {Component} from "react";

class Input extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value:''
    }

    this.InputStorage = this.props.InputStorage;
  }

  setData() {
    let value = this.state.value;

    this.InputStorage.data.push(value);
  }



  render() {
    return (
      <div>
        <input type="text" 
        value={this.state.value} 
        onChange={(event) => this.setState({value: event.target.value})}
        className="border border-gray-200 outline-none rounded mt-2 mb-8" />
        <button onClick={() => this.setData() }>Add Text to iFrame</button>
      </div>
    );
  }
}

export default Input;