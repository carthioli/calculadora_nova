/**/
 
  divresult= ""
/*ARMAZENA VALORES HISTORICO*/
  hprimeirovalor = ""
  hsegundovalor  = ""
  divhistorico = ""
  hoperacao = ""
  hresult = ""
/*ARMAZENA VALORES E RESULTADO*/
  primeirovalor = ""
  segundovalor  = ""
  result = ""
  num = ""
/*STATUS DA OPERAÇÃO*/
  operacao = false
/*VERIFICA A OPERAÇÃO*/
  soma = false
  multi = false
  dividi = false
  subtrai = false
/**/


/*DETERMINA O NUMERO QUE ESTA ARMAZENANDO*/
function numero(clicked_id){
  num = clicked_id
  divresult = document.getElementById("resultado")
  divresult.innerHTML += num

  if ( operacao == false) {
    primeirovalor += num
    this.armazena()
  }
  else{
    segundovalor += num
    this.armazena()
  }
  console.log(num)
  console.log(operacao)
  console.log(primeirovalor)
  console.log(segundovalor)
  console.log(soma)
  console.log(subtrai)
  console.log(result)
}
/*REALIZA SOMA E FAZ VERIFICAÇÕES*/
function somar(clicked_id) {
  
  divresult = document.getElementById("resultado")
  /*VERFICA SE JÁ EXISTE OUTRA OPERAÇÃO NO VISOR*/
  
  if ( primeirovalor != "" ) {
    if ( operacao == false ){
      divresult.innerHTML += clicked_id 
      operacao = true
      subtrai = false
      dividi = false
      multi = false
      soma = true 
  }else {
  /*REALIZA A CONTA*/
      if ( soma == true && subtrai == false && multi == false && dividi == false ) {
        subtrai = false
        dividi = false
        multi = false
        soma = true
          result = Number(primeirovalor) + Number(segundovalor)
          armazenaprimeiro = primeirovalor
          primeirovalor = result
          segundovalor = ""
          this.armazena()
          divresult.innerHTML = result + clicked_id
      }
      if (segundovalor != "") {
        if (subtrai == true && soma == false && multi == false && dividi == false) {
          result = primeirovalor - segundovalor
          armazenaprimeiro = primeirovalor
          primeirovalor = result
          segundovalor = ""
          divresult.innerHTML = result + clicked_id
          subtrai = false
          soma = true
        }
        if (multi == true && soma == false && subtrai == false && dividi == false) {
          result = primeirovalor * segundovalor
          armazenaprimeiro = primeirovalor
          primeirovalor = result
          segundovalor = ""
          divresult.innerHTML = result + clicked_id
          multi = false
          soma = true
        }
        if (dividi == true && soma == false && subtrai == false && multi == false) {
          result = primeirovalor / segundovalor
          armazenaprimeiro = primeirovalor
          primeirovalor = result
          segundovalor = ""
          divresult.innerHTML = result + clicked_id
          dividi = false
          soma = true
        }
      }
    }
      }else{
        divresult.innerHTML = primeirovalor + clicked_id
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
    }else {
  /*REALIZA A CONTA*/
      if ( multi == true && subtrai == false && soma == false && dividi == false ) {
        subtrai = false
        dividi = false
        soma = false
        multi = true
          result = primeirovalor * segundovalor
          armazenaprimeiro = primeirovalor
          primeirovalor = result
          segundovalor = ""
          divresult.innerHTML = result + clicked_id
      }
      if (segundovalor != "") {
        if (subtrai == true && soma == false && multi == false && dividi == false) {
          result = primeirovalor - segundovalor
          armazenaprimeiro = primeirovalor
          primeirovalor = result
          segundovalor = ""
          divresult.innerHTML = result + clicked_id
          subtrai = false
          multi = true
        }
        if (soma == true && multi == false && subtrai == false && dividi == false) {
          result = Number(primeirovalor) + Number(segundovalor)
          armazenaprimeiro = primeirovalor
          primeirovalor = result
          segundovalor = ""
          divresult.innerHTML = result + clicked_id
          soma = false
          multi = true
        }
        if (dividi == true && soma == false && subtrai == false && multi == false) {
          result = primeirovalor / segundovalor
          armazenaprimeiro = primeirovalor
          primeirovalor = result
          segundovalor = ""
          divresult.innerHTML = result + clicked_id
          dividi = false
          multi = true
        }
      }
    }
  }else{
    divresult.innerHTML = primeirovalor + clicked_id
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
    }else {
      if ( multi == false && soma == false && dividi == false ) {
        multi = false
        dividi = false
        soma = false
        subtrai = true
        /*REALIZA A CONTA*/
        if (subtrai == true ) {
          result = Number(primeirovalor) - Number(segundovalor)
          armazenaprimeiro = primeirovalor
          primeirovalor = result
          segundovalor = ""
          divresult.innerHTML = result + clicked_id
        }
      }
      if (segundovalor != "") {
        if (multi == true && soma == false && subtrai == false && dividi == false) {
          result = primeirovalor * segundovalor
          armazenaprimeiro = primeirovalor
          primeirovalor = result
          segundovalor = ""
          divresult.innerHTML = result + clicked_id
          multi = false
          subtrai = true
        }
        if (soma == true && multi == false && subtrai == false && dividi == false) {
          result = Number(primeirovalor) + Number(segundovalor)
          armazenaprimeiro = primeirovalor
          primeirovalor = result
          segundovalor = ""
          divresult.innerHTML = result + clicked_id
          soma = false
          subtrai = true
        }
        if (dividi == true && soma == false && subtrai == false && multi == false) {
          result = primeirovalor / segundovalor
          armazenaprimeiro = primeirovalor
          primeirovalor = result
          segundovalor = ""
          divresult.innerHTML = result + clicked_id
          dividi = false
          subtrai = true
        }
      }
    }
  }else{
    divresult.innerHTML = primeirovalor + clicked_id
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
    }else {
      if ( multi == false && soma == false && subtrai == false ) {
        multi = false
        subtrai = false
        soma = false
        dividi = true
        /*REALIZA A CONTA*/
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
        if (dividi == true ) {
          result = Number(primeirovalor) / Number(segundovalor)
          armazenaprimeiro = primeirovalor
          primeirovalor = result
          segundovalor = ""
          divresult.innerHTML = result + clicked_id
        }
      }
      if (segundovalor != "") {
        if (multi == true && soma == false && subtrai == false && dividi == false) {
          result = primeirovalor * segundovalor
          armazenaprimeiro = primeirovalor
          primeirovalor = result
          segundovalor = ""
          divresult.innerHTML = result + clicked_id
          multi = false
          dividi = true
        }
        if (soma == true && multi == false && subtrai == false && dividi == false) {
          result = Number(primeirovalor) + Number(segundovalor)
          armazenaprimeiro = primeirovalor
          primeirovalor = result
          segundovalor = ""
          divresult.innerHTML = result + clicked_id
          soma = false
          dividi = true
        }
        if (subtrai == true && soma == false && dividi == false && multi == false) {
          result = primeirovalor - segundovalor
          armazenaprimeiro = primeirovalor
          primeirovalor = result
          segundovalor = ""
          divresult.innerHTML = result + clicked_id
          subtrai = false
          dividi = true
        }
      }
    }
  }else{
    divresult.innerHTML = primeirovalor + clicked_id
  }
}
/*VERIFICA QUAL OPERAÇÃO ESTÁ SENDO REALIZADA*/
function resultado(clicked_id){
  if ( soma == true ){
    this.somar(clicked_id)
    
    divresult.innerHTML = result  
    
  }
  if ( multi == true){
    this.multiplicar(clicked_id)
    
    divresult.innerHTML = result  
  }
  if ( subtrai == true){
    this.subtrair(clicked_id)
    
    divresult.innerHTML = result  
  }
  if ( dividi == true){
    this.dividir(clicked_id)
    
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
  this.armazena()
}
/*ZERA AS OPERAÇÕES*/ 
function limpar(){
  result = ""
  operacao = false
  primeirovalor = ""
  segundovalor  = ""
  divresult.innerHTML = ""
  divhistorico.innerHTML = ""  
}
/*ARMAZENA E MOSTRA O HISTORICO*/
function armazena(clicked_id){

  divhistorico = document.getElementById("historico")
  
  divhistorico.innerHTML += result + "<br/>"
  console.log(hresult)
}
/*ARMAZENA O HISTÓRICO*/
function armazena(){
  historico = document.getElementById("historico")
  if ( segundovalor != "" ) {
    hsegundovalor += num
  } else {
    if ( segundovalor == "" ){
      hprimeirovalor = num
    }
  }  
  if ( soma == true ) {
    hoperacao = "+"
  }
  if ( multi == true ) {
    hoperacao = "&times"
  }
  if ( subtrai == true ) {
    hoperacao = "-"
  }
  if ( dividi == true) {
    hoperacao = "&divide"
  }
  
  
  hresult = result
  if ( result != "" ) {
    historico.innerHTML += armazenaprimeiro + "    " + "    " + hoperacao + "    " + hsegundovalor + "  =  " + hresult + "<br>"
    
    hsegundovalor = ""
    
    hresult = ""
    this.limpar() 
    
  }
  
}