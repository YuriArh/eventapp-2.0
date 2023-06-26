import { makeAutoObservable } from "mobx";

class MapModel {
  events = [];
  constructor() {
    makeAutoObservable(this);
  }
}

const mapModel = new MapModel();
export default mapModel;
