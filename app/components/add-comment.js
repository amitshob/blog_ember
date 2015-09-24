import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    submit() {
       var params = {
         username: this.get('username'),
         date: this.get('date'),
         comment: this.get('comment'),
       };
       this.sendAction('submit',params);
     }

  }


});
