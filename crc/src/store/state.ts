declare var localStorage;

export interface ListItem {
  id: number;
  name: string;
}

export class State {
  public count: number;
  public listItem: ListItem[];
  public loginStorage: any;
  public loggedIn: boolean;

  constructor() {
    this.count = 0;
    this.listItem = [];
    this.loginStorage = localStorage;
    
    const configString = localStorage.getItem("awsConfig");
    const config = JSON.parse(configString);
    this.loggedIn = config != null;
  }
}

const state = new State();
export default state;
