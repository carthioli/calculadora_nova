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
  this.armazena() 
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
  this.armazena()
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
  this.armazena()
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
    

    if( segundovalor == 0  ) {
      primeirovalor = ""
      segundovalor = ""
      result = ""
      alert("Não há divisão em base zero!")
     
    }
    segundovalor = ""
  }
  if ( primeirovalor == 0 ) {
    
    dividi = false
    this.limpar()
    alert("Não há divisão em base zero!")
  }

  console.log(primeirovalor)
  console.log(segundovalor)
  console.log(num)
  console.log(operacao)

}
function subtrair(clicked_id){
  div = document.getElementById("resultado")
  this.armazena()
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
  this.armazena()
}
function limpar(){
  div.innerHTML = null
  operacao = false
  primeirovalor = ""
  segundovalor = ""
}

function armazena(){
  historico = document.getElementById("historico")
  /*ADICIONA OPERADOR NO RESULTADO*/
  if ( soma == true ) {
    hsoma = "+"
    if ( result != "" ){
      historico.innerHTML = result
    }
  }
  if ( multi == true ) {
    hmulti = "*"
    if ( result != "" ){
      historico.innerHTML = result
    }
  }
  if ( subtrai == true ) {
    hsubtrai = "-"
    if ( result != "" ){
      historico.innerHTML = result
    }
  }
  if ( dividi == true ) {
    hdividi = "/"
    if ( result != "" ){
      historico.innerHTML = result
    }
  }
  
  console.log(historico)
}