import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  date: DS.attr(),
  category: DS.attr(),
  title: DS.attr(),
  content: DS.attr(),
  image: DS.attr()
});
