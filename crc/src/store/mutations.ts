import Vue from 'vue';
import {MutationTree} from 'vuex';
import {MutationTypes} from './mutation-types';
import {State} from './state';

declare var localStorage;
declare function  initializeStorage ();
  

const mutations: MutationTree<State> = {
  [MutationTypes.INCREMENT_VALUE]: (state: State) => {
    state.count += 1;
    console.log(state.count)
  },
  [MutationTypes.DECREMENT_VALUE]: (state: State) => {
    state.count -= 1;
  },
  [MutationTypes.RESET_VALUE]: (state: State) => {
    state.count = 0;
  },

  [MutationTypes.LOGIN_CHANGED]: (state: State) => {
    state.loginStorage = localStorage;
    const configString = localStorage.getItem("awsConfig");
    const config = JSON.parse(configString);
    state.loggedIn = config != null;
    console.log('loginChanged', state.loginStorage)
  },
  [MutationTypes.LOGOUT_USER]: (state: State) => {
    localStorage.clear();
    initializeStorage();
    state.loggedIn = false;
    state.loginStorage = localStorage;
    console.log('logout user', state.loginStorage)
  },
  [MutationTypes.GET_LIST]: (state: State, {items}) => {
    if (!state.listItem.length) {
      items.forEach(items => {
        state.listItem.push({
          id: items.id,
          name: items.name,
        });
      });
    }
  // },
  // [MutationTypes.SUBMIT_CONTACT_INFO]: (state: State, {items}) => {
  //   console.log('llllllll', items)
  // }
  }



};

export default mutations;
