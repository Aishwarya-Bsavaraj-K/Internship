function myfunc() {
    var name_of_the_sheet = "subjects";
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var Source_sheet = spreadsheet.getSheetByName("Marks_Data");
    Source_sheet.activate();
    subject = "Java"
    var Origianaldata = Source_sheet.getRange(1, 1, Source_sheet.getLastRow(), 2).getValues();
    var Filterdata = Origianaldata.filter(function(s_name) {
        if (s_name.toString().indexOf("Java") === -1) {
            return false;
        } else {
            return true;
        }
    });

    var targetsheet = spreadsheet.insertSheet(subject);
    targetsheet.getRange(1, 1, Filterdata.length, Filterdata[0].length).setValues(Filterdata)
    console.log(Origianaldata)
}