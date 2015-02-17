var jqueryNoConflict = jQuery;

jqueryNoConflict(document).ready(function(){
    initializeTabletopObject('https://docs.google.com/spreadsheets/d/1kVM7vWKGSCAoLhbIMUaCsgcd0WExq5vOC1Nu2aesv5Q/pubhtml');  
});

// pull data from google spreadsheet
function initializeTabletopObject(dataSpreadsheet){
    Tabletop.init({
        key: dataSpreadsheet,
        callback: writeTableWith,
        debug: false
    }); 
}

// create table headers
function createTableColumns(){
    var tableColumns =   [
        {'mDataProp': 'organization', 'sTitle': 'Organization', 'sClass': 'left'},
        {'mDataProp': 'phone', 'sTitle': 'Phone Number', 'sClass': 'left'},
        {'mDataProp': 'address', 'sTitle': 'Address', 'sClass': 'left'},
        {'mDataProp': 'website', 'sTitle': 'Website', 'sClass': 'left'},
        {'mDataProp': 'population', 'sTitle': 'Population Served/Eligibility', 'sClass': 'left'}
    ];
    return tableColumns;
}

// create the table container and object
function writeTableWith(dataSource){
    $.each(dataSource, function(key, value){
        var thisValue = value;
        var thisItem = key.substring(5);

        $.each(value.elements, function(key, value){
            itemWebsite = value.website;
            value.website = '<a href="http://'+itemWebsite+'" target="_blank">'+itemWebsite+'</a>';
            jqueryNoConflict('#demo'+thisItem).html('<table cellpadding="0" cellspacing="0" border="0" class="display table table-bordered table-striped" id="data-table-container'+thisItem+'"></table>');

        });
    });

    $.each(dataSource, function(key, value){
        var thisItem = key.substring(5);
        jqueryNoConflict('#data-table-container'+thisItem).dataTable({
            'sPaginationType': 'bootstrap',
            'iDisplayLength': 25,
            'aaData': value.elements,
            'aoColumns': createTableColumns(),
            'oLanguage': {
                'sLengthMenu': '_MENU_ records per page'
            }
        });
    })
};

//define two custom functions (asc and desc) for string sorting
jQuery.fn.dataTableExt.oSort['string-case-asc']  = function(x,y) {
    return ((x < y) ? -1 : ((x > y) ?  0 : 0));
};

jQuery.fn.dataTableExt.oSort['string-case-desc'] = function(x,y) {
    return ((x < y) ?  1 : ((x > y) ? -1 : 0));
};