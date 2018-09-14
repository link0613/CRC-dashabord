declare var localStorage;

export interface ListItem {
  id: number;
  name: string;
}

export class State {
  public count: number;
  public listItem: ListItem[];
  public loginStorage: any;

  constructor() {
    this.count = 0;
    this.listItem = [];
    this.loginStorage = localStorage;
  }
}

const state = new State();
export default state;
