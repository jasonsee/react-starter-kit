/** @jsx React.DOM */

var React = require('react');

var FluxChildMixin = require('fluxxor').FluxChildMixin(React);
var StoreWatchMixin = require('fluxxor').StoreWatchMixin;

var DashboardView = React.createClass({
    mixins: [FluxChildMixin, StoreWatchMixin('CountStore')],

    getStateFromFlux: function() {
        return this.getFlux().store('CountStore').getState();
    },

    render: function() {
        var countActions = this.getFlux().actions.count;

        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={countActions.inc}>INC</button>
            </div>
        );
    }
});


module.exports = DashboardView;
