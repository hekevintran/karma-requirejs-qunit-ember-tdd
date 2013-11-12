define(['Ember'], function(Ember) {
    var Person = Ember.Object.extend({
        firstName: '',
        lastName: '',
        fullName: function() {
            return this.get('firstName') + ' ' + this.get('lastName');
        }.property()
    });

    return Person;
});
