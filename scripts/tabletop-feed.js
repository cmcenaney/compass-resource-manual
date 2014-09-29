var jqueryNoConflict = jQuery;

// begin main function
jqueryNoConflict(document).ready(function(){

    initializeTabletopObject('https://docs.google.com/spreadsheets/d/1ab8xfG0taMF1cW-0PotiOFJ2gPMCIiPtTmSsZObEXDk/pubhtml');

});

// pull data from google spreadsheet
function initializeTabletopObject(dataSpreadsheet){
    Tabletop.init({
        key: dataSpreadsheet,
        callback: writeTableWith,

        debug: false
    });

    //var sheet1 = tabletop.sheets("Sheet1");



   // Tabletop.sheets('Sheet1').all();
   // console.log(Tabletop);   
   // var yhh = tabletop.sheets("Sheet1");
   // console.log(yhh);
    
}

// create table headers
function createTableColumns(){

    /* swap out the properties of mDataProp & sTitle to reflect
    the names of columns or keys you want to display.
    Remember, tabletop.js strips out spaces from column titles, which
    is what happens with the More Info column header */

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
    //console.log(dataSource.sheets('sheet1').all());
    //console.log(dataSource.all());
    console.log(dataSource.Sheet1.column_names);
    console.log(dataSource.Sheet3.elements);
    

    jqueryNoConflict('#demo').html('<table cellpadding="0" cellspacing="0" border="0" class="display table table-bordered table-striped" id="data-table-container"></table>');
    jqueryNoConflict('#demo2').html('<table cellpadding="0" cellspacing="0" border="0" class="display table table-bordered table-striped" id="data-table-container2"></table>');
    jqueryNoConflict('#demo3').html('<table cellpadding="0" cellspacing="0" border="0" class="display table table-bordered table-striped" id="data-table-container3"></table>');
    jqueryNoConflict('#demo4').html('<table cellpadding="0" cellspacing="0" border="0" class="display table table-bordered table-striped" id="data-table-container4"></table>');
    jqueryNoConflict('#demo5').html('<table cellpadding="0" cellspacing="0" border="0" class="display table table-bordered table-striped" id="data-table-container5"></table>');

    var aTable = jqueryNoConflict('#data-table-container').dataTable({
		'sPaginationType': 'bootstrap',
		'iDisplayLength': 25,
        'aaData': dataSource.Sheet1.elements,
        'aoColumns': createTableColumns(),
        'oLanguage': {
            'sLengthMenu': '_MENU_ records per page'
        }
    });

    var bTable = jqueryNoConflict('#data-table-container2').dataTable({
        'sPaginationType': 'bootstrap',
        'iDisplayLength': 25,
        'aaData': dataSource.Sheet2.elements,
        'aoColumns': createTableColumns(),
        'oLanguage': {
            'sLengthMenu': '_MENU_ records per page'
        }
    });

    var cTable = jqueryNoConflict('#data-table-container3').dataTable({
        'sPaginationType': 'bootstrap',
        'iDisplayLength': 25,
        'aaData': dataSource.Sheet3.elements,
        'aoColumns': createTableColumns(),
        'oLanguage': {
            'sLengthMenu': '_MENU_ records per page'
        }
    });

    var dTable = jqueryNoConflict('#data-table-container4').dataTable({
        'sPaginationType': 'bootstrap',
        'iDisplayLength': 25,
        'aaData': dataSource.Sheet4.elements,
        'aoColumns': createTableColumns(),
        'oLanguage': {
            'sLengthMenu': '_MENU_ records per page'
        }
    });

    var eTable = jqueryNoConflict('#data-table-container5').dataTable({
        'sPaginationType': 'bootstrap',
        'iDisplayLength': 25,
        'aaData': dataSource.Sheet5.elements,
        'aoColumns': createTableColumns(),
        'oLanguage': {
            'sLengthMenu': '_MENU_ records per page'
        }
    });


    

};

//define two custom functions (asc and desc) for string sorting
jQuery.fn.dataTableExt.oSort['string-case-asc']  = function(x,y) {
	return ((x < y) ? -1 : ((x > y) ?  0 : 0));
};

jQuery.fn.dataTableExt.oSort['string-case-desc'] = function(x,y) {
	return ((x < y) ?  1 : ((x > y) ? -1 : 0));
};