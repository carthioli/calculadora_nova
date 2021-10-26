primeirovalor = 0
segundovalor  = 0
result = 0
operacao = false



function resultado(){
  div = document.getElementById("resultado")
  div.innerHTML = 100
  
  
}
function numero(clicked_id){
  num = clicked_id
  div = document.getElementById("resultado")
  div.innerHTML += num

    
     
    
  console.log(num)
  console.log(segundovalor)
}
function multiplicar(clicked_id){
  
  div = document.getElementById("resultado")
  div.innerHTML += clicked_id
  
  
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
function virgula(){
  
}
function negativo(){
  
}
