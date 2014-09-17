var _ = require('ramda');
var Fluxxor = require('fluxxor');
var request = require('superagent');

// =============================================================================
// Store: Private  API
// =============================================================================
var CountStore = Fluxxor.createStore({
    // map actions from the dispatcher to our private methods
    actions: {
        'INC': 'inc'
    },

    initialize: function() {
        this.count = 0;
    },

    inc: function(payload) {
        this.count = this.count + 1;
        this.emit('change');
    },

    // Expose our state via this method (for read only protection)
    getState: function() {
        return {
            count: this.count
        };
    }
});


// =============================================================================
// Actions: Public API
// =============================================================================
var actions = {
    inc: function(number) {
        this.dispatch('INC', {number: number});
    }
};


// =============================================================================
// Exports
// =============================================================================
module.exports = {
    store: {CountStore: new CountStore()},
    actions: {count: actions}
};
