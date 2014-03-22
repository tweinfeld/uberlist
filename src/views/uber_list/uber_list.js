/** @jsx React.DOM */

var _ = require('underscore'),
    React = require('react'),
    UberTable = require('./uber_table'),
    UberPaging = require('./uber_paging'),
    UberFilter = require('./uber_filter'),
    UberAction = require('./uber_action'),
    UberAlert = require('./uber_alert');

module.exports = React.createClass({
    getInitialState: function(){
        return {
            startAt: 0,
            endAfter: 10,
            selection: [],
        }
    },
    onToggle: function(){
        this.setState({ "selection": this.state.selection.length === this.props.rows.length ? [] : _(this.props.rows).clone() });
    },
    onSelect: function(row){
        this.setState({ "selection": _(this.state.selection).contains(row) ? _(this.state.selection).without(row) : this.state.selection.concat([row]) });
    },
    onNext: function(){
        this.state.startAt + this.state.endAfter < this.props.rows.length && this.setState({ "startAt": this.state.startAt + 5 });
    },
    onPrevious: function(){
        this.setState({ "startAt": Math.max(this.state.startAt - 5, 0) });
    },
    render: function(){
        return <div className="uberlist ca-site-selection">
                <div className="control-panel">
                    <UberFilter
                        data={ this.props.filters }
                        onCategoryChange={ this.props.onCategoryChange }
                        onKeywordChange={ this.props.onKeywordChange }
                    />
                    <UberAlert data={this.props.rows} originalData={this.props.originalRows}/>
                </div>
                <UberTable
                    onSelect={this.onSelect}
                    onToggle={this.onToggle}
                    startAt={this.state.startAt}
                    endAfter={this.state.endAfter}
                    selection={this.state.selection}
                    data={this.props.rows}/>
                <div className="control-panel">
                <UberPaging
                    startAt={this.state.startAt}
                    endAfter={this.state.endAfter}
                    onNext={this.onNext}
                    onPrevious={this.onPrevious}
                    data={this.props.rows}/>
                </div>
            </div>
    }
});


