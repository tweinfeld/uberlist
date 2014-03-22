/** @jsx React.DOM */
var $ = require('jquery'),
    _ = require('underscore'),
    React = require('react');

module.exports = React.createClass({
    getDefaultProps: function(){
        return {
            onCategoryChange: function(){},
            onKeywordChange: function(){}
        }
    },
    onCategoryChange: function(event){
        var category = _(this.props.data.categories).findWhere({ id: +$(event.target).val() });
        this.props.onCategoryChange(category);
    },
    onKeywordChange: function(event){
        this.props.onKeywordChange($(event.target).val());
    },
    render: function(){
        return <ul className="filters">
            <li><select onChange={this.onCategoryChange}>
            {
                _(this.props.data.categories).chain().map(function(category){
                    return <option value={category.id} key={category.id}>{category.name}</option>
                }).unshift(<option value="-1">Select a Category</option>).value()
            }
            </select></li>
            <li><input type="text" placeholder="Search sites" onChange={ this.onKeywordChange }/></li>
        </ul>
    }
});
