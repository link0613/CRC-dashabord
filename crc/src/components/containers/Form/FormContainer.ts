import Vue from 'vue';
import Component from 'vue-class-component';
import {MutationTypes} from '../../../store/mutation-types';
 
import MultipleFileUploader from '@updivision/vue2-multi-uploader'




@Component({
  template: require('./form.html'),
  components: {
    MultipleFileUploader
  },

  data() {
    return {
      success_handler: function(response){
        
      }
    }    
  }
})


export class FormContainer extends Vue {

 

}
