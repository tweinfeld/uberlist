/** @jsx React.DOM */
var _ = require('underscore'),
    React = require('react');

module.exports = React.createClass({
    getDefaultProps: function(){
        return {
            startAt: 0,
            endAfter: 5,
            selected: [],
            onSelect: function(){},
            onToggle: function(){}
        }
    },

    render: function(){
        var _this = this;
        return  <table>
                    <thead>
                        <tr>
                            <th><input type="checkbox" checked={ this.props.selection.length === this.props.data.length } onChange={ this.props.onToggle }/></th>
                            <th>ID</th>
                            <th>Publisher</th>
                            <th>Site</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        { _(this.props.data).chain().first(this.props.startAt + this.props.endAfter).last(this.props.endAfter).map(function(row){
                            return <tr className={ _(_this.props.selection).contains(row) ? "selected" : "" } key={row.index}>
                                <td><input type="checkbox" checked={_(_this.props.selection).contains(row)} onChange={ _.partial(_this.props.onSelect, row) }></input></td>
                                <td>{row.id}</td>
                                <td>{row.publisher}</td>
                                <td>{row.site}</td>
                                <td>
                                    <div className="tag">{row.category.name}</div>
                                </td>
                            </tr>
                        }).value() }
                    </tbody>
                    <tfoot className={ this.props.selection.length > 0 ? "selected" : "" }><tr><td colSpan="5"><div>{ _this.props.selection.length } item(s) selected</div></td></tr></tfoot>
                </table>
    }
});
