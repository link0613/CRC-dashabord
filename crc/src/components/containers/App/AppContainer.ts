import Vue from 'vue';
import Component from 'vue-class-component';
import { StripeForm } from '../../modules/StripeForm';


@Component({
  template: require('./app.html'),
  components: {
    StripeForm
  }
})
export class AppContainer extends Vue {

  package: string = 'vue-vuex-boillerplate';
  logo: string = '../assets/images/logo.png';
  repo: string = 'https://github.com/bamboo-c/vue-vuex-boilerplate';
  mode: string = process.env.ENV;

}
