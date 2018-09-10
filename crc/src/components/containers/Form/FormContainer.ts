import Vue from 'vue';
import {MutationTypes} from '../../../store/mutation-types';
import { Component, Prop, Watch } from 'vue-property-decorator'

import MultipleFileUploader from '@updivision/vue2-multi-uploader'
import Datepicker from 'vuejs-datepicker';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCheck)

@Component({
  template: require('./form.html'),
  components: {
    MultipleFileUploader,
    Datepicker,
    FontAwesomeIcon
  }
  
 
})


export class FormContainer extends Vue {

  step = 0;
  formValidated = [];

  // FILL OUT YOUR CONTACT INFO
  firstName = '';
  firstNameValidated = true;
  lastName = '';
  lastNameValidated = true;
  company = '';
  companyValidated = true;
  phoneNumber = '';
  phoneNumberValidated = true;
  email = '';
  emailValidated = true;
  address1 = '';
  addressValidated = true;
  address2 = '';
  birthday = new Date(1980, 1,  1);


  // @Watch('firstName') firstNameChanged(value, oldValue) {
  //   this.firstNameValidated = value!='';
  // }

  // COMMON 
  getClassNameForTab (tab) {
    return `wd-step ${this.step === tab ? 'active' : ''} ${this.formValidated[this.step] ? 'done':''}`
  }
 
  nextStep() {
    if (this.validateStep(this.step)) {
      if (this.step === 0) {
        this.submitContactInfo()
      }
      this.step++;
    }
  }

  setStep(tab) {
    // if (tab > 0) {
    //   console.log(tab, this.formValidated[tab-1])
    //   if (this.formValidated[tab-1]) {
    //     this.step = tab;
    //   }
    // } else {
    //   this.step = 0;
    // }
    console.log(this.step)
    console.log(tab, this.formValidated[tab-1])
    if (!this.formValidated[tab-1]) return;
    this.step = tab;
  }

  prevStep() {
    this.step--;
  }

  isDisabledPrevBtn() {
    return this.step <= 0;
  }

  isDisabledNextBtn() {
    
    return this.step >= 3;
  }

  validateStep(tab){
    // FILL OUT YOUR CONTACT INFO
    if (tab === 0) {
      this.firstNameValidated = this.firstName !== '';
      this.lastNameValidated = this.lastName !== '';
      this.phoneNumberValidated = this.phoneNumber !== '';
      this.companyValidated = this.company !== '';
      this.emailValidated = this.email !== '';
      this.addressValidated = this.address1 + this.address2 !== '';
      if (this.firstNameValidated &&
          this.lastNameValidated &&
          this.phoneNumberValidated &&
          this.companyValidated &&
          this.emailValidated) {
            this.formValidated[tab] = true;
            return true;
      } else {
        this.formValidated[tab] = false;
      }
    }
    return false;
  }

  private submitContactInfo() {
    let contactInfo = {
      'first_name': this.firstName, 
      'last_name': this.lastName, 
      'company_name': this.company, 
      'phone_number': this.phoneNumber, 
      'email': this.email, 
      'street_1': '555 Main St.', 
      'street_2': 'Apt 2B', 
      'city': 'Los Angeles', 
      'state': 'CA', 'zip': 
      '91203', 'year': '1970', 
      'month': '01', 
      'day': '21'
    }
    this.$store.dispatch(MutationTypes.SUBMIT_CONTACT_INFO, contactInfo);
  }

  success_handler (response){

  } 

}
