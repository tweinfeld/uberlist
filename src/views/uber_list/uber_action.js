/** @jsx React.DOM */
var _ = require('underscore'),
    React = require('react');

module.exports = React.createClass({
    render: function(){
        return <ul className="actions">
            <li><button className="red">Edit</button></li>
            <li><button className="red">Delete</button></li>
            <li className="divier"><button className="green">Add</button></li>
        </ul>
    }
});
