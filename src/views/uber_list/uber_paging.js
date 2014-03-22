/** @jsx React.DOM */

var React = require('react'),
    _ = require('underscore');

module.exports = React.createClass({
    getDefaultProps: function(){

        return {
            onPrevious: function(){},
            onNext: function(){}
        }
    },
    onPreviousClick: function(){
        this.props.onPrevious();
    },
    onNextClick: function(){
        this.props.onNext();
    },
    render: function(){
        return <ul className="paging">
            <li><button className="previous" onClick={this.onPreviousClick}>Previous</button></li>
            <li><button className="next" onClick={this.onNextClick}>Next</button></li>
        </ul>;
    }
});


