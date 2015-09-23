import Ember from 'ember';

export default Ember.Route.extend({

actions:{
  save1() {
     var params = {
       postTitle: this.get('postTitle'),
       author: this.get('author'),
       date: this.get('date'),
       image: this.get('image'),
       story: this.get('story'),
     };

     debugger;
     var newPost = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('index');

   }
  }

});
