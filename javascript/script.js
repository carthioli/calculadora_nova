primeirovalor = ""
segundovalor  = ""

operacao = false


function resultado(clicked_id){
  div = document.getElementById("resultado")
 
  soma = document.getElementsByClassName("btnoperador")
  
  
  this.multiplicar(clicked_id)
  div.innerHTML = result
  console.log(result)
}
function numero(clicked_id){
  num = clicked_id
  div = document.getElementById("resultado")
  div.innerHTML += num

  if ( operacao == true ){
    segundovalor += num  
  }
  else{
    primeirovalor += num
  }
    
}
function multiplicar(clicked_id){
  
  div = document.getElementById("resultado")
  div.innerHTML += clicked_id
  operacao = true
  multi = document.getElementsByClassName("btnsoma")
  result = primeirovalor * segundovalor

  console.log(multi)
}
function somar(clicked_id){

  div = document.getElementById("resultado")
  div.innerHTML += clicked_id
  operacao = true
  result = parseFloat(primeirovalor) + parseFloat(segundovalor)

}
function dividir(clicked_id){
  
  div = document.getElementById("resultado")
  div.innerHTML += clicked_id
  operacao = true
  result = primeirovalor / segundovalor
  
  
  
}
function subtrair(clicked_id){
  
  div = document.getElementById("resultado")
  div.innerHTML += clicked_id
  operacao = true
  result = primeirovalor - segundovalor

}
function igual(){
  this.resultado()
  
}
function limpar(){
  div.innerHTML = null
  operacao = false
  primeirovalor = ""
  segundovalor = ""
}

