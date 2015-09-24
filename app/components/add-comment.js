import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    submit() {
       var params = {
         username: this.get('username'),
         date: this.get('date'),
         comment: this.get('comment'),
         post: this.get('post')
       };
       this.sendAction('submit',params);
     }

  }


});
