var display = "";
var n1 = 0;
var n2 = 0;
var ope = "";
$(document).on('click', '.num', function(){
  var n = $(this).html();
  display +=n;
  $('#display').html(display); 
});
function CE(){
  display = "";
  $('#display').html(0);
}
$(document).on('click', '.ce', function(){
  CE();  
});
$(document).on('click', '.ope', function(){
  n1 = display;
  ope = $(this).html();
  CE();
});
$(document).on('click', '.calcular', function(){
  n2 = display;
  var resultado = 0;
  if(ope == "-"){
    resultado = parseFloat(n1)-parseFloat(n2);
    $('#display').html(resultado);
    display = resultado;
  }
  if(ope == "*"){
    resultado = parseFloat(n1)*parseFloat(n2);
    $('#display').html(resultado);
    display = resultado;
  }
  if(ope == "/"){
    resultado = parseFloat(n1)/parseFloat(n2);
    $('#display').html(resultado);
    display = resultado;
  }
  if(ope == "+"){
    resultado = parseFloat(n1)+parseFloat(n2);
    $('#display').html(resultado);
    display = resultado;
  }
});
