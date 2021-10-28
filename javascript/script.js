
/*ARMAZENA VALORES E RESULTADO*/
primeirovalor = ""
segundovalor  = ""
result = ""
/*STATUS DA OPERAÇÃO*/
operacao = false
/*VERIFICA A OPERAÇÃO*/
soma = false
multi = false
dividi = false
subtrai = false
/*DETERMINA O NUMERO QUE ESTA ARMAZENANDO*/
function numero(clicked_id){
  num = clicked_id
  divresult = document.getElementById("resultado")
  divresult.innerHTML += num

  if ( operacao == false) {
    primeirovalor += num
    
  }
  else{
    segundovalor += num
    
  }
  console.log(num)
  console.log(operacao)
  console.log(primeirovalor)
  console.log(segundovalor)
  console.log(soma)
  console.log(multi)
}
/*REALIZA SOMA E FAZ VERIFICAÇÕES*/
function somar(clicked_id) {
  
  divresult = document.getElementById("resultado")
  /*VERFICA SE JÁ EXISTE OUTRA OPERAÇÃO NO VISOR*/
  if ( primeirovalor != "" ) {
    if ( operacao == false ){
      divresult.innerHTML += clicked_id 
      operacao = true
      soma = true 
      
  }else{
      if ( segundovalor != "" ) {
        divresult.innerHTML = result + clicked_id
      }else{
        divresult.innerHTML = primeirovalor + clicked_id
      } 
    }
  }
  /*REALIZA A CONTA*/
  if ( segundovalor != "" ){
    result = Number(primeirovalor) + Number(segundovalor)
    primeirovalor = result
    segundovalor = ""
    
    divresult.innerHTML = result + clicked_id 
  }
  if ( result != "" ){
    
  }
  
  
}
/*REALIZA MULTIPLICAÇÃO E FAZ VERIFICAÇÕES*/
function multiplicar(clicked_id){
  divresult = document.getElementById("resultado")
  /*VERFICA SE JÁ EXISTE OUTRA OPERAÇÃO NO VISOR*/
  if ( primeirovalor != "" ) {
    if ( operacao == false ){
      divresult.innerHTML += clicked_id 
      operacao = true
      multi = true 
      
  }else{
      if ( segundovalor != "" ) {
        divresult.innerHTML = result + clicked_id
      }else{
        divresult.innerHTML = primeirovalor + clicked_id
      } 
    }
  }
  /*REALIZA A CONTA*/
  if ( segundovalor != "" ){
    result = Number(primeirovalor) * Number(segundovalor)
    primeirovalor = result
    segundovalor = ""
    
    divresult.innerHTML = result + clicked_id 
  }
}
/*REALIZA SUBTRAÇÃO E FAZ VERIFICAÇÕES*/
function subtrair(clicked_id){
  divresult = document.getElementById("resultado")
  /*VERFICA SE JÁ EXISTE OUTRA OPERAÇÃO NO VISOR*/
  if ( primeirovalor != "" ) {
    if ( operacao == false ){
      divresult.innerHTML += clicked_id 
      
      operacao = true
      subtrai = true 
      
  }else{
      if ( segundovalor != "" ) {
        divresult.innerHTML = result + clicked_id
      }else{
        divresult.innerHTML = primeirovalor + clicked_id
      } 
    }
  }
  /*REALIZA A CONTA*/
  if ( segundovalor != "" ){
    result = Number(primeirovalor) - Number(segundovalor)
    primeirovalor = result
    segundovalor = ""
    
    divresult.innerHTML = result + clicked_id 
  }  
} 
/*REALIZA DIVISÃO E FAZ VERIFICAÇÕES*/
function dividir(clicked_id){
  divresult = document.getElementById("resultado")
  /*VERFICA SE JÁ EXISTE OUTRA OPERAÇÃO NO VISOR*/
  if ( primeirovalor != "" ) {
    if ( operacao == false ){
      divresult.innerHTML += clicked_id 
      operacao = true
      dividi = true 
      
  }else{
      if ( segundovalor != "" ) {
        divresult.innerHTML = result + clicked_id
      }else{
        divresult.innerHTML = primeirovalor + clicked_id
      } 
    }
  }
  /*VERIFICA SE A DIVISÃO É POR 0*/
  if ( primeirovalor == 0 ){
    alert('Não há divisão por zero')
    primeirovalor = ""
    segundovalor = ""
    result = ""
    divresult.innerHTML = ""
    operacao = false
    dividi = false
  }
  if ( segundovalor != "" && segundovalor == 0 ){
    alert('Não há divisão por zero')
    primeirovalor = ""
    segundovalor = ""
    result = ""
    divresult.innerHTML = ""
    operacao = false
    dividi = false
  }
  /*REALIZA A CONTA*/
  if ( segundovalor != "" ){
    result = Number(primeirovalor) / Number(segundovalor)
    primeirovalor = result
    segundovalor = ""
    
    divresult.innerHTML = result + clicked_id 
  }  
}
/*VERIFICA QUAL OPERAÇÃO ESTÁ SENDO REALIZADA*/
function resultado(clicked_id){
  if ( soma == true ){
    this.somar(clicked_id)
    
    divresult.innerHTML = result  
    operacao = false
    soma = false
  }
  if ( multi == true){
    this.multiplicar(clicked_id)
    operacao = false
    divresult.innerHTML = result  
  }
  if ( subtrai == true){
    this.subtrair(clicked_id)
    operacao = false
    divresult.innerHTML = result  
  }
  if ( dividi == true){
    this.dividir(clicked_id)
    operacao = false
    divresult.innerHTML = result  
  }
}
/*CHAMA O RESULTADO E O HISTORICO*/
function igual(){
  this.resultado()
  operacao = false
  soma = false
  multi = false
  dividi = false
  subtrai = false
  
}
/*ZERA AS OPERAÇÕES*/ 
function limpar(){
  operacao = false
  primeirovalor = ""
  segundovalor = ""
  divresult.innerHTML = ""
  result = ""
}
