import { observable, action,autorun } from "mobx";
import { makeObservable } from "mobx";
class InputStorage {
  data = [];
  color= [];

  constructor() {
    makeObservable(this, {
      data: observable,
      color: observable,
      addInput: action,
    });
  }

  addInput(text) {
    this.data.push({
      text: text
    });
  }
}

export default new InputStorage();