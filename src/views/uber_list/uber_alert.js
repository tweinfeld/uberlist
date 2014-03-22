/** @jsx React.DOM */

var React = require('react'),
    _ = require('underscore');

module.exports = React.createClass({

    render: function(){
        return <ul className="alerts">
        { (this.props.data.length !== this.props.originalData.length) && <li><div className="filtered-warning">You are viewing partial results</div></li> }
        </ul>;
    }
});


