primeirovalor = 0
segundovalor  = 0
result = 0
div = 0


function resultado(){
  div = document.getElementById("resultado")
  div.innerHTML = 100
  
  
}
function numero(clicked_id){
  num = clicked_id
  div = document.getElementById("resultado")
  div.innerHTML += num
  
}
function multiplicar(clicked_id){
  multiplica = clicked_id
  div = document.getElementById("resultado")
  div.innerHTML += multiplica
}
function somar(clicked_id){
  soma = clicked_id
  div = document.getElementById("resultado")
  div.innerHTML += soma
}
function dividir(clicked_id){
  divide = clicked_id
  div = document.getElementById("resultado")
  div.innerHTML += divide
}
function subtrair(clicked_id){
  subtrai = clicked_id
  div = document.getElementById("resultado")
  div.innerHTML += subtrai
}
function igual(){
  this.resultado()
}
function limpar(){
  div.innerHTML = null
}
function virgula(){
  
}
function negativo(){
  
}
