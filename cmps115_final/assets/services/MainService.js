// the loading screen implementation
// still needs to be worked on

export default class MainService{
  static load(cb){
    setTimeout(cb, 3000);
  }
}
