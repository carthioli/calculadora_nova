primeirovalor = ""
segundovalor  = ""

operacao = false


 soma = false
 multi = false
 subtrai = false
 dividi = false


function resultado(clicked_id){
  div = document.getElementById("resultado")
   
  if ( multi == true ) {
    this.multiplicar(clicked_id)
    div.innerHTML = result
    multi = false
  } 
  else{
    if ( soma == true ) {
      this.somar(clicked_id)
      div.innerHTML = result
      soma = false
    }
  }
  if ( dividi == true ) {
    this.dividir(clicked_id)
    div.innerHTML = result
    dividi = false
  } 
  else {
    if ( subtrai == true ) {
    this.subtrair(clicked_id)
    div.innerHTML = result
    subtrai = false
    }
  }
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
    console.log(multi)
  }
    
}
function multiplicar(clicked_id){
  
  div = document.getElementById("resultado")
  div.innerHTML += clicked_id
  operacao = true
  multi = true
  result = primeirovalor * segundovalor

  
  console.log(multi)
}
function somar(clicked_id){

  div = document.getElementById("resultado")
  div.innerHTML += clicked_id
  operacao = true
  soma = true
  result = parseFloat(primeirovalor) + parseFloat(segundovalor)

}
function dividir(clicked_id){
  
  div = document.getElementById("resultado")
  div.innerHTML += clicked_id
  operacao = true
  dividi = true
  result = primeirovalor / segundovalor
  
  
  
}
function subtrair(clicked_id){
  
  div = document.getElementById("resultado")
  div.innerHTML += clicked_id
  operacao = true
  subtrai = true
  result = primeirovalor - segundovalor

}
function igual(){
  this.resultado()
  multi = false
}
function limpar(){
  div.innerHTML = null
  operacao = false
  primeirovalor = ""
  segundovalor = ""
  multi = false
}

