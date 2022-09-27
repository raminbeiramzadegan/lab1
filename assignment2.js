function makeTable()
{    
    var numberOfRows = document.getElementById('numrows').value;
   
    var numberOfCols = document.getElementById('numcols').value;
    // var table = document.createElement("table");
    var tableOpen = '<table border="1">\n';
    var tableBody ='';
    
    for( var i=1; i<=numberOfRows;i++)
    {
        tableBody = tableBody + '<tr>';
        for( var j=1; j<=numberOfCols;j++)
        {
            tableBody = tableBody +'<td>';
            tableBody = tableBody + i + ',' + j;
            tableBody = tableBody + '</td>'
        }
        tableBody = tableBody + '</tr>\n';
    }
    var tableClose = '</table>';

    document.getElementById('result').innerHTML = tableOpen + tableBody + tableClose;
    
}