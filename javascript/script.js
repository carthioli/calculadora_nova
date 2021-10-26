primeirovalor = ""
segundovalor  = ""
result = 0
operacao = false
console.log(operacao)


function resultado(){
  div = document.getElementById("resultado")
  div.innerHTML = 100
  
  
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
  console.log(operacao)
  
}
function somar(clicked_id){

  div = document.getElementById("resultado")
  div.innerHTML += clicked_id
}
function dividir(clicked_id){
  
  div = document.getElementById("resultado")
  div.innerHTML += clicked_id

  
}
function subtrair(clicked_id){
  
  div = document.getElementById("resultado")
  div.innerHTML += clicked_id
}
function igual(){
  this.resultado()
}
function limpar(){
  div.innerHTML = null
}

