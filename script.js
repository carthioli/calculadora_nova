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
    if ( primeirovalor == 0 || segundovalor == 0 ){
      alert('Não pode ser divido por zero na base zero')
      div.innerHTML = ""
      num = "" 
    }
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
  if ( operacao == false ) {
  div.innerHTML += clicked_id
  operacao = true
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
  if ( operacao == false ) {
  div.innerHTML += clicked_id
  operacao = true
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
  if ( operacao == false ) {
  div.innerHTML += clicked_id
  operacao = true
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
  if ( operacao == false ) {
  div.innerHTML += clicked_id
  operacao = true
  subtrai = true
  }
  

  if ( segundovalor != "" ){
    result = primeirovalor - segundovalor
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