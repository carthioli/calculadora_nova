primeirovalor = ""
segundovalor  = ""

operacao = false
console.log(operacao)


function resultado(clicked_id){
  div = document.getElementById("resultado")
 
  
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
    
  console.log(num)
  console.log(primeirovalor)
  console.log(segundovalor)
}
function multiplicar(clicked_id){
  
  div = document.getElementById("resultado")
  div.innerHTML += clicked_id

  operacao = true

  result = primeirovalor * segundovalor

  console.log(operacao)
  
}
function somar(clicked_id){

  div = document.getElementById("resultado")
  div.innerHTML += clicked_id
  operacao = true
}
function dividir(clicked_id){
  
  div = document.getElementById("resultado")
  div.innerHTML += clicked_id
  operacao = true
  
}
function subtrair(clicked_id){
  
  div = document.getElementById("resultado")
  div.innerHTML += clicked_id
  operacao = true

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

