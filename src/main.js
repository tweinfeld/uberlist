var _ = require('underscore'),
    $ = require('jquery'),
    Faker = require('faker2'),
    React = require('react'),
    UberList = require('./views/uber_list/uber_list');

$(function(){

    var categories = _(["Browsers", "Business", "Drivers", "Educational", "Internet Software", "Home software", "Productivity"]).map(function(categoryString, index){
        return { id: index, name: categoryString }
    });

    var generateData = function(){
        return _(_.range(1,50)).map(function(index){
                var publisher = Faker.Company.companyName();
                return {
                    index: index,
                    id: _.random(1000,9999),
                    publisher: publisher,
                    site: ["www", publisher.match(/[a-z0-9]/ig).join('').toLowerCase(), _(["com", "co.uk", "co.pl", "co.uk", "gov", "fr", "co.fr", "net", "org", "org.il"]).chain().shuffle().first().value()].join('.'),
                    category: _(categories).chain().shuffle().first().value()
                }
        })
    };

    var rows = generateData();

    var dataSet, comp, selectedCategory, selectedKeyword;

    var update = function(){
        dataSet["rows"] = _(rows)
            .chain()
            .where(selectedCategory && {
                category: selectedCategory
            })
            .filter(
            function(row){
                return !selectedKeyword || (row.publisher.toLowerCase().indexOf(selectedKeyword.toLowerCase()) > -1);  }
            ).value();

        comp.setProps(dataSet);
    }

    var onCategoryChange = function(category){
        selectedCategory = category;
        update();
    }

    var onKeywordChange = function(keyword){
        selectedKeyword = keyword;
        update();
    }

    dataSet = {
        rows: rows,
        originalRows: rows,
        filters: {
            categories: categories
        },
        onCategoryChange: onCategoryChange,
        onKeywordChange: onKeywordChange
    };

    comp = React.renderComponent(
        new UberList(dataSet),
        $('#demo')[0]
    );

});





