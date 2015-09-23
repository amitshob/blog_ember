import DS from 'ember-data';

export default DS.Model.extend({

  postTitle: DS.attr();
  author: DS.attr();
  date: DS.attr();
  story: DS.attr();
  image: DS.attr();


});
