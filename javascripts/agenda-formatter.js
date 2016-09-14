jQuery(function() {
  var agenda = $('.agenda-formatter');
  if (agenda.length){
    var agendaLines = agenda.first().html().split("\n");
    var columns = [];
    var timeLine = "";
    agenda.text("");
    for(i in agendaLines){
      var line = agendaLines[i];
      var isTime = /^\d{1,2}:\d{2}/.test(line);
      if(isTime){
        if (timeLine){
          printAgendaTable(agenda, columns, timeLine);
        }
        columns = [];
        timeLine = line;
      } 
      else{
        columns.push(line);
      }
    }
    printAgendaTable(agenda, columns, timeLine);
  }
});

function printAgendaTable(agenda, columns, timeLine){
  var time = '<div class="time col-'+columns.length+'">'+timeLine+'</div>';
  agenda.append(time);
  if (columns.length > 0){
    var table = $('<table class="col-'+columns.length+'"></table>');
    var row = $('<tr></tr>');
    for(i in columns){
      var column = $('<td></td>').html(columns[i]);
      row.append(column);
    }
    table.append(row);
    agenda.append(table);
  }
}
