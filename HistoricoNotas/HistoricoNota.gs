//Salvar Histórico de Alterações

function onEdit(e) {
  var range = e.range;
  salvarHistorico(range);  
}

function salvarHistorico(range){
  var valor = range.getValue();
  var texto = range.getNote();
  range.setNote('Valor: ' + valor + ' Alteração Realizada: ' + new Date() + '\n\n' + texto);
}
