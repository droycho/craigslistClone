import DS from 'ember-data';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  price: DS.attr(),
  image: DS.attr(),
  description: DS.attr(),
  date: DS.attr(),
  category: DS.belongsTo('category', {async:true})
});
