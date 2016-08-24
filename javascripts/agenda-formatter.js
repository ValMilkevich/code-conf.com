jQuery(function() {
  var agenda = $('.agenda-formatter');
  var agendaLines = agenda.html().split("\n");
  var columns = [];
  agenda.text("");
  for(i in agendaLines){
    var line = agendaLines[i];
    var isTime = /^\d{1,2}:\d{2}/.test(line);
    if(isTime){
      printAgendaTable(agenda, columns);
      columns = [];
      agenda.append("<div class='time'>"+line+"</div>");
    } 
    else{
      columns.push(line);
    }
  }
  printAgendaTable(agenda, columns);
});

function printAgendaTable(agenda, columns){
  if (columns.length > 0){
    var table = $('<table></table>');
    var row = $('<tr></tr>');
    for(i in columns){
      var column = $('<td></td>').html(columns[i]);
      row.append(column);
    }
    table.append(row);
    agenda.append(table);
  }
}
