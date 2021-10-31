import { extendObservable } from "mobx";

class InputStorage {
  constructor() {
    extendObservable(this, {
      data: []
    })
  }
}

export default new InputStorage();