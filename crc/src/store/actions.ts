import {ActionTree} from 'vuex';
import {MutationTypes} from './mutation-types';
import {State} from './state';
import * as listAPI from '../api/listItems';
import { sendPost } from '../api/api'

const actions: ActionTree<State, State> = {
  [MutationTypes.INCREMENT_VALUE]: ({commit}) => {
    commit(MutationTypes.INCREMENT_VALUE);
  },
  [MutationTypes.DECREMENT_VALUE]: ({commit}) => {
    commit(MutationTypes.DECREMENT_VALUE);
  },
  [MutationTypes.RESET_VALUE]: ({commit}) => {
    commit(MutationTypes.RESET_VALUE);
  },

  [MutationTypes.GET_LIST]: ({commit}) => {
    listAPI.getAllList(items => {
      commit(MutationTypes.GET_LIST, {
        items
      });
    });
  },

  [MutationTypes.SUBMIT_CONTACT_INFO]: ({commit}, contactInfo) => {
    contactInfo = {"first_name": "Dave", "last_name": "Smith", "company_name": "Wrench.AI Test ss 1", "phone_number": "888-555-1212", "email": "kevin@wrench.ai", "street_1": "555 Main St.", "street_2": "Apt 2B", "city": "Los Angeles", "state": "CA", "zip": "91203", "year": "1970", "month": "01", "day": "21"};
    sendPost('contact_info', contactInfo, {'Content-Type': 'application/json'})
    .then((res: any) => {
      console.log(res)
    })
    .catch((error: any) => {
      if (error.response && error.response.data) {
        console.log(error.response.data)
      } else {
        console.log(error.message)
      }
    })
    //listAPI.submitContactInfo(contactInfo);
    // listAPI.getAllList(items => {
    //   commit(MutationTypes.GET_LIST, {
    //     items
    //   });
    // });
  },

};

export default actions;
