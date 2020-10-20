function documentosDigitalizados(){
  var sheet = SpreadsheetApp.getActiveSheet();
  var ultimaLinha = SpreadsheetApp.getActiveSpreadsheet().getLastRow();
  var ul = "J6J" + ultimaLinha;  //criando a String delimitando a busca
  var selecao = sheet.getRange(ul).getValues();
  var nao = 0;
  var sim = 0;
  for (var i = 0; i  selecao.length; i++) {
    if (selecao[i][0] == NÃO){
      nao++;
    } else if (selecao[i][0] == SIM){
      sim++;
    }
  }
  SpreadsheetApp.getUi().alert('Total de Arquivos Digitalizados '+sim+'nTotal de Arquivos que Faltam Digitalizar '+nao);
}
