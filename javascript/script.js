primeirovalor = ""
segundovalor  = ""

operacao = false

 soma = false
 multi = false
 dividi = false
 subtrai = false



function resultado(clicked_id){
  div = document.getElementById("resultado")
   
  if ( multi == true ) {

    this.multiplicar(clicked_id)
    div.innerHTML = result
    
    multi = false
    primeirovalor = result
    segundovalor = ""
 
  } 
  else{
    if ( soma == true ) {
      this.somar(clicked_id)
      div.innerHTML = result
     
      soma = false
      primeirovalor = result
      segundovalor = ""
    }
  }
  if ( dividi == true ) {
    this.dividir(clicked_id)
    div.innerHTML = result
    
    dividi = false
    primeirovalor = result
    segundovalor = ""
  } 
  else {
    if ( subtrai == true ) {
    this.subtrair(clicked_id)
    div.innerHTML = result
    
    subtrai = false
    primeirovalor = result
    segundovalor = ""
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
  }

    
}
function multiplicar(clicked_id){
  
  div = document.getElementById("resultado")
 
  
  operacao = true
  multi = true
  
  if ( operacao == true ) {
    multi = false
    
    this.resultado()
    
    div.innerHTML += clicked_id 
    multi = true
    
  }
  
  result = primeirovalor * segundovalor
  if ( segundovalor != "" ){
    
    div.innerHTML = result + clicked_id
    primeirovalor = result
    segundovalor = ""
  }
  
  
}
function somar(clicked_id){

  div = document.getElementById("resultado")
  
  operacao = true
  soma = true
  
  if ( operacao == true ) {
    soma = false
    
    this.resultado()
    
    div.innerHTML += clicked_id 
    soma = true
    
  }
  
  result = parseFloat(primeirovalor) + parseFloat(segundovalor)

  if ( segundovalor != "" ){
    
    div.innerHTML = result + clicked_id
    primeirovalor = result
    segundovalor = ""
  }

}
function dividir(clicked_id){
  
  div = document.getElementById("resultado")

  operacao = true
  dividi = true
  
  if ( operacao == true ) {
    dividi = false
    
    this.resultado()
    
    div.innerHTML += clicked_id 
    dividi = true
    
  }

  result = primeirovalor / segundovalor

  if ( segundovalor != "" ){
    
    div.innerHTML = result + clicked_id
    primeirovalor = result
    segundovalor = ""
  }
 
}
function subtrair(clicked_id){
  
  div = document.getElementById("resultado")
  
  operacao = true
  subtrai = true

  if ( operacao == true ) {
    subtrai = false
    
    this.resultado()
    
    div.innerHTML += clicked_id 
    subtrai = true
    
  }
  result = primeirovalor - segundovalor

  if ( segundovalor != "" ){
    
    div.innerHTML = result + clicked_id
    primeirovalor = result
    segundovalor = ""
   
  }

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

