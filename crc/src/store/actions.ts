import {ActionTree} from 'vuex';
import {MutationTypes} from './mutation-types';
import {State} from './state';
import * as listAPI from '../api/listItems';
import { sendPost } from '../api/api';

// declare var stripe: any;
// declare var elements: any;

// var cardNumber = elements.create('cardNumber');
// cardNumber.mount('#card-number');
// var cardExpiry = elements.create('cardExpiry');
// cardExpiry.mount('#card-expiry');
// var cardCvc = elements.create('cardCvc');
// cardCvc.mount('#card-cvc');

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

  [MutationTypes.STRIPE_A1]: ({commit}) => {
    
    // const { token, error } = stripe.createToken('323324234');
    // console.log(token);
    
  },

  
  [MutationTypes.SUBMIT_CONTACT_INFO]: ({commit}, contactInfo) => {
    // contactInfo = {"first_name": "Dave", "last_name": "Smith", "company_name": "Wrench.AI Test sssss 1", "phone_number": "888-555-1212", "email": "kevin@wrench.ai", "street_1": "555 Main St.", "street_2": "Apt 2B", "city": "Los Angeles", "state": "CA", "zip": "91203", "year": "1970", "month": "01", "day": "21"};
    sendPost('contact_info', contactInfo, 
      {
      'Content-Type': 'application/json', 
      'Access-Control-Request-Method': 'POST',
      'Access-Control-Request-Headers': 'origin, x-requested', 
      'Access-Control-Request-Origin': 'https://foo.bar.org' })
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
  },

};

export default actions;
