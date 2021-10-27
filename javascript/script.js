/*ARMAZENA OS VALORES*/
result = ""
primeirovalor = ""
segundovalor  = ""
/*VERICA ESTADO DA OPERAÇÃO*/
operacao = false
/*OPERADORES*/
soma = false
multi = false
dividi = false
subtrai = false
/*HISTORICO*/
hresult = ""
hprimeirovalor = ""
hsegundovalor  = ""
/*VERIFICAÇÃO DA OPERAÇÃO HISTORICO*/
resultope = ""

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
  this.armazena()
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
    this.armazena()
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
    this.armazena()
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
    

    if( segundovalor == 0  ) {
      primeirovalor = ""
      segundovalor = ""
      result = ""
      alert("Não há divisão em base zero!")
     
    }
    segundovalor = ""
    this.armazena()
    
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
    this.armazena()
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
  historico.innerHTML = null
}
function armazena(){
  historico = document.getElementById("historico")
  
  if ( operacao == false ) {
    hprimeirovalor = num
  }

  if ( operacao == true ){
    hsegundovalor = num
  }
  
  console.log(hprimeirovalor)
  console.log(hsegundovalor)
  /*if ( soma == true ) {
    hsoma = "+"
  }
  if ( multi == true ) {
    hmulti = "&times"
  }
  if ( subtrai == true ) {
    hsubtrai = "-"
  }
  if ( dividi == true) {
    hdividi = "&divide"
  }
  console.log(hsoma)
*/
  
  historico.innerHTML = hprimeirovalor + hsegundovalor + result + "<br>"
 
}