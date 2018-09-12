import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';

declare var stripe: any;
declare var elements: any;

const style = {
  base: {
    lineHeight: '24px',
    fontFamily: 'monospace',
    fontSmoothing: 'antialiased',
    fontSize: '19px',
    '::placeholder': {
      color: 'purple'
    }
  }
}


@Component({
  template: require('./StripeForm.html')
})
export class StripeForm extends Vue {
  card: any;
  error: string;
  hasCardErrors: boolean;

  mounted() {
    this.card = elements.create('card', {style});
    this.card.mount(this.$refs.card);

  }

  async purchase () {
    let self = this;
    const { token, error } = await stripe.createToken(this.card);

    if (error) {
      console.log('Something is wrong:', error);
    } else {
      console.log('Success!', token);
      // ...send the token to the your backend to process the charge
    }
    
 
  }
}
