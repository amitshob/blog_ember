import DS from 'ember-data';

export default DS.Model.extend({

  username: DS.attr(),
  date: DS.attr(),
  comment:DS.attr(),
  post:DS.belongsTo('post')

});
