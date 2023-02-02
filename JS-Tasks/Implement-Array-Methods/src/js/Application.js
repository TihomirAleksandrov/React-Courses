import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emit(Application.events.READY);
  }
  setEmojis(emojis) {
    let wrapperDiv = document.querySelector('#emojis');
    wrapperDiv.textContent = '';
    this.emojis = emojis;
    let content = document.createElement('p');
    content.textContent = this.emojis.join(' ');
    wrapperDiv.appendChild(content);
  }

  addBananas() {
    let fedMonkeys = this.emojis.map(x => x + this.banana);

    this.setEmojis(fedMonkeys);
  }
}
