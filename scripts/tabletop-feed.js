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
    //console.log(dataSource.Sheet1.column_names);
    console.log(dataSource);
    $.each(dataSource, function(key, value){
        //console.log(value.elements);
        $.each(value.elements, function(key, value){
            // console.log(value.website);
            // console.log(this);
            $('tr').find('td:eq(2)').append("<p>gehwhajehw</p>");

        });
        //console.log(dataSource);
    });

    
    

    $.each( dataSource.Sheet1.elements, function( key, value ) {
        $(value.website).prepend("<p>this</p>");
        $(value.website).append("<p>this</p>");
        $(value.website).addClass("website");
        //console.log($(value.website));
    });
    //console.log(dataSource.Sheet1.elements);
    

    jqueryNoConflict('#demo').html('<table cellpadding="0" cellspacing="0" border="0" class="display table table-bordered table-striped" id="data-table-container"></table>');
    jqueryNoConflict('#demo2').html('<table cellpadding="0" cellspacing="0" border="0" class="display table table-bordered table-striped" id="data-table-container2"></table>');
    jqueryNoConflict('#demo3').html('<table cellpadding="0" cellspacing="0" border="0" class="display table table-bordered table-striped" id="data-table-container3"></table>');
    jqueryNoConflict('#demo4').html('<table cellpadding="0" cellspacing="0" border="0" class="display table table-bordered table-striped" id="data-table-container4"></table>');
    jqueryNoConflict('#demo5').html('<table cellpadding="0" cellspacing="0" border="0" class="display table table-bordered table-striped" id="data-table-container5"></table>');
    jqueryNoConflict('#demo6').html('<table cellpadding="0" cellspacing="0" border="0" class="display table table-bordered table-striped" id="data-table-container6"></table>');
    jqueryNoConflict('#demo7').html('<table cellpadding="0" cellspacing="0" border="0" class="display table table-bordered table-striped" id="data-table-container7"></table>');
    jqueryNoConflict('#demo8').html('<table cellpadding="0" cellspacing="0" border="0" class="display table table-bordered table-striped" id="data-table-container8"></table>');
    jqueryNoConflict('#demo9').html('<table cellpadding="0" cellspacing="0" border="0" class="display table table-bordered table-striped" id="data-table-container9"></table>');
    jqueryNoConflict('#demo10').html('<table cellpadding="0" cellspacing="0" border="0" class="display table table-bordered table-striped" id="data-table-container10"></table>');
    jqueryNoConflict('#demo11').html('<table cellpadding="0" cellspacing="0" border="0" class="display table table-bordered table-striped" id="data-table-container11"></table>');
    jqueryNoConflict('#demo12').html('<table cellpadding="0" cellspacing="0" border="0" class="display table table-bordered table-striped" id="data-table-container12"></table>');
    jqueryNoConflict('#demo13').html('<table cellpadding="0" cellspacing="0" border="0" class="display table table-bordered table-striped" id="data-table-container13"></table>');
    jqueryNoConflict('#demo14').html('<table cellpadding="0" cellspacing="0" border="0" class="display table table-bordered table-striped" id="data-table-container14"></table>');
    jqueryNoConflict('#demo15').html('<table cellpadding="0" cellspacing="0" border="0" class="display table table-bordered table-striped" id="data-table-container15"></table>');
    jqueryNoConflict('#demo16').html('<table cellpadding="0" cellspacing="0" border="0" class="display table table-bordered table-striped" id="data-table-container16"></table>');
    jqueryNoConflict('#demo17').html('<table cellpadding="0" cellspacing="0" border="0" class="display table table-bordered table-striped" id="data-table-container17"></table>');
    jqueryNoConflict('#demo18').html('<table cellpadding="0" cellspacing="0" border="0" class="display table table-bordered table-striped" id="data-table-container18"></table>');
    jqueryNoConflict('#demo19').html('<table cellpadding="0" cellspacing="0" border="0" class="display table table-bordered table-striped" id="data-table-container19"></table>');


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

    var fTable = jqueryNoConflict('#data-table-container6').dataTable({
        'sPaginationType': 'bootstrap',
        'iDisplayLength': 25,
        'aaData': dataSource.Sheet6.elements,
        'aoColumns': createTableColumns(),
        'oLanguage': {
            'sLengthMenu': '_MENU_ records per page'
        }
    });

    var gTable = jqueryNoConflict('#data-table-container7').dataTable({
        'sPaginationType': 'bootstrap',
        'iDisplayLength': 25,
        'aaData': dataSource.Sheet7.elements,
        'aoColumns': createTableColumns(),
        'oLanguage': {
            'sLengthMenu': '_MENU_ records per page'
        }
    });

    var hTable = jqueryNoConflict('#data-table-container8').dataTable({
        'sPaginationType': 'bootstrap',
        'iDisplayLength': 25,
        'aaData': dataSource.Sheet8.elements,
        'aoColumns': createTableColumns(),
        'oLanguage': {
            'sLengthMenu': '_MENU_ records per page'
        }
    });

    var iTable = jqueryNoConflict('#data-table-container9').dataTable({
        'sPaginationType': 'bootstrap',
        'iDisplayLength': 25,
        'aaData': dataSource.Sheet9.elements,
        'aoColumns': createTableColumns(),
        'oLanguage': {
            'sLengthMenu': '_MENU_ records per page'
        }
    });

    var jTable = jqueryNoConflict('#data-table-container10').dataTable({
        'sPaginationType': 'bootstrap',
        'iDisplayLength': 25,
        'aaData': dataSource.Sheet10.elements,
        'aoColumns': createTableColumns(),
        'oLanguage': {
            'sLengthMenu': '_MENU_ records per page'
        }
    });

    var kTable = jqueryNoConflict('#data-table-container11').dataTable({
        'sPaginationType': 'bootstrap',
        'iDisplayLength': 25,
        'aaData': dataSource.Sheet11.elements,
        'aoColumns': createTableColumns(),
        'oLanguage': {
            'sLengthMenu': '_MENU_ records per page'
        }
    });

    var lTable = jqueryNoConflict('#data-table-container12').dataTable({
        'sPaginationType': 'bootstrap',
        'iDisplayLength': 25,
        'aaData': dataSource.Sheet12.elements,
        'aoColumns': createTableColumns(),
        'oLanguage': {
            'sLengthMenu': '_MENU_ records per page'
        }
    });

    var mTable = jqueryNoConflict('#data-table-container13').dataTable({
        'sPaginationType': 'bootstrap',
        'iDisplayLength': 25,
        'aaData': dataSource.Sheet13.elements,
        'aoColumns': createTableColumns(),
        'oLanguage': {
            'sLengthMenu': '_MENU_ records per page'
        }
    });

    var nTable = jqueryNoConflict('#data-table-container14').dataTable({
        'sPaginationType': 'bootstrap',
        'iDisplayLength': 25,
        'aaData': dataSource.Sheet14.elements,
        'aoColumns': createTableColumns(),
        'oLanguage': {
            'sLengthMenu': '_MENU_ records per page'
        }
    });

    var oTable = jqueryNoConflict('#data-table-container15').dataTable({
        'sPaginationType': 'bootstrap',
        'iDisplayLength': 25,
        'aaData': dataSource.Sheet15.elements,
        'aoColumns': createTableColumns(),
        'oLanguage': {
            'sLengthMenu': '_MENU_ records per page'
        }
    });

    var pTable = jqueryNoConflict('#data-table-container16').dataTable({
        'sPaginationType': 'bootstrap',
        'iDisplayLength': 25,
        'aaData': dataSource.Sheet16.elements,
        'aoColumns': createTableColumns(),
        'oLanguage': {
            'sLengthMenu': '_MENU_ records per page'
        }
    });

    var qTable = jqueryNoConflict('#data-table-container17').dataTable({
        'sPaginationType': 'bootstrap',
        'iDisplayLength': 25,
        'aaData': dataSource.Sheet17.elements,
        'aoColumns': createTableColumns(),
        'oLanguage': {
            'sLengthMenu': '_MENU_ records per page'
        }
    });

    var rTable = jqueryNoConflict('#data-table-container18').dataTable({
        'sPaginationType': 'bootstrap',
        'iDisplayLength': 25,
        'aaData': dataSource.Sheet18.elements,
        'aoColumns': createTableColumns(),
        'oLanguage': {
            'sLengthMenu': '_MENU_ records per page'
        }
    });

    var sTable = jqueryNoConflict('#data-table-container19').dataTable({
        'sPaginationType': 'bootstrap',
        'iDisplayLength': 25,
        'aaData': dataSource.Sheet19.elements,
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