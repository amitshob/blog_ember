import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save1() {
       var params = {
         postTitle: this.get('postTitle'),
         author: this.get('author'),
         date: this.get('date'),
         image: this.get('image'),
         story: this.get('story'),
       };
       this.sendAction('save2',params);
       debugger;
    }
  }
});
