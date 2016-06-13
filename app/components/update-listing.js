import Ember from 'ember';

export default Ember.Component.extend({
  updateListingForm: false,
  actions: {
    updateListingForm() {
      this.set('updateListingForm', true);
    },
    update(listing) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        price: parseInt(this.get('price')),
        image: this.get('image'),
        description: this.get('description')
      };
      this.set('updateListingForm', false);
      this.sendAction('update', listing, params);
    }
  }
});
