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
/*DEFINE QUAL OPERAÇÃO ESTÁ SENDO REALIZADA*/
function resultado(clicked_id){
  div = document.getElementById("resultado")
   
  if ( multi == true ) {
    this.multiplicar(clicked_id)
    div.innerHTML = result
    multi = false
    primeirovalor = result
    segundovalor = ""
  } 
  if ( soma == true ) {
    this.somar(clicked_id)
    div.innerHTML = result
    soma = false
    primeirovalor = result
    segundovalor = ""
  }
  if ( dividi == true ) {
    this.dividir(clicked_id)
    div.innerHTML = result
    dividi = false
    primeirovalor = result
    segundovalor = ""
  } 
  if ( subtrai == true ) {
    this.subtrair(clicked_id)
    div.innerHTML = result
    subtrai = false
    primeirovalor = result
    segundovalor = ""
  }
}
/*DEFINE EM QUAL VARIAVEL O NÚMERO ESTÁ GUARDADO*/
function numero(clicked_id){
  num = clicked_id
  div = document.getElementById("resultado")
  div.innerHTML += num
  if ( operacao == true ){
    segundovalor += num
    this.armazena()
  }
  else{
    primeirovalor += num
    this.armazena()
  } 
}
/*REALIZA OPERAÇÃO MULTIPLICAR*/
function multiplicar(clicked_id){
  div = document.getElementById("resultado") 
  operacao = true
  multi = true
  this.armazena()
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
/*REALIZA OPERAÇÃO SOMAR*/
function somar(clicked_id){
  this.armazena()
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
/*REALIZA OPERAÇÃO DIVIDIR*/
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
}
/*REALIZA OPERAÇÃO SUBTRAIR*/
function subtrair(clicked_id){
  div = document.getElementById("resultado")
  operacao = true
  subtrai = true
  this.armazena()
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
/*CHAMA O RESLTADO*/
function igual(){
  this.resultado()
}
/*ZERA OPERAÇÕES E LIMPA O HISTÓRICO*/
function limpar(){
  div.innerHTML = ""
  operacao = false
  primeirovalor = ""
  segundovalor = ""
  historico.innerHTML = ""
  hprimeirovalor = ""
  hsegundovalor = ""
  hresult = ""
}
/*ARMAZENA O HISTÓRICO*/
function armazena(){
  historico = document.getElementById("historico")
  if ( soma == true ) {
    resultope = "+"
  }
  if ( multi == true ) {
    resultope = "&times"
  }
  if ( subtrai == true ) {
    resultope = "-"
  }
  if ( dividi == true) {
    resultope = "&divide"
  }
  if ( operacao == true ){
    hsegundovalor  = num
  }
 else {
    hprimeirovalor = num
  } 
  if ( result != "" ) {
  historico.innerHTML = result + "<br>"
  }
  /*
  hresult = result
  historico.innerHTML = hprimeirovalor + "    " + "    " +  resultope + "    " + hsegundovalor + "<br>"
  if ( result != "" ) {
    historico.innerHTML += hprimeirovalor + "    " + "    " + resultope + "    " + hsegundovalor + "  =  " + hresult + "<br>"
    resultope = ""
    hprimeirovalor = result
    hsegundovalor = ""
    
  }*/
  
    
  console.log(hprimeirovalor)
  console.log(hsegundovalor)
  
  console.log(resultope)
}