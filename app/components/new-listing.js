import Ember from 'ember';

export default Ember.Component.extend({
  addNewListing: false,
  actions: {
    listingFormShow() {
      this.set('addNewListing', true);
    },
    saveListing() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        price: parseInt(this.get('price')),
        image: this.get('image'),
        description: this.get('description'),
        date: moment().format(),
        category: this.get('category')
      };
      this.set('addNewListing', false);
      this.sendAction('saveListing', params);
    }
  }
});
