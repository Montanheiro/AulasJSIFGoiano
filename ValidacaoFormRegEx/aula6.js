function validaForm() {

	validaNome(); //OK
	validaNascimento(); //OK
	validaIdade(); //OK
	validaEmail(); //OK
	validaCPFouCNPJ(); //OK
	validaTelefone(); //OK
	validaSexo(); //OK
	validaLinguas(); //OK
	validaEstado(); //OK
	validaCidade(); //Ok*/

	if(validaNome() && validaNascimento() && validaIdade() &&
		validaEmail() && validaCPFouCNPJ() && validaTelefone() &&
		validaSexo() && validaLinguas() && validaEstado() && validaCidade()){
		alert("passou tudo ok");
		return true;
	}else{
		console.log("deu ruim");
		return false;
	}
}

function validaNome() {
	let nome = document.getElementById("nome");
	let validacaoNome = /^[A-Za-záàâãéèêíóúç]{10,30}$/i;
	return verificaRegEx(nome, validacaoNome);
}

function validaNascimento() {
	let nascimento = document.getElementById("nascimento");
	let validacaoNascimento = /^[0-9]{2}\/?[0-9]{2}\/?[0-9]{4}$/;
	return verificaRegEx(nascimento, validacaoNascimento);
}

function validaIdade() { 
 	let idade = document.getElementById("idade");
 	let validacaoIdade = /^(([1]{1}[0]{1}[0]{1})|([1-9]{1}[0-9]{1}))$/;
 	return verificaRegEx(idade, validacaoIdade);
}

function validaEmail() {
	let email = document.getElementById("email");
	let validacaoEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; //by W3C
	return verificaRegEx(email, validacaoEmail);
}

function validaCPFouCNPJ() {
	let cpfoucnpj = document.getElementById("cpforcnpj");
	let validacaoCPFouCNPJ = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})$/;
	return verificaRegEx(cpfoucnpj, validacaoCPFouCNPJ);
}

function validaTelefone() {
	let telefone = document.getElementById("telefone");
	validacaoTelefone = /^\(?[0]?[1-9]{2}\)? ?[9]?[0-9]{4}\-?[0-9]{4}$/;
	return verificaRegEx(telefone, validacaoTelefone);	
}

function validaSexo() {
	let inputSexo = document.getElementById("sexo");
	if (document.formulario.sexo[0].checked == false &&
			document.formulario.sexo[1].checked == false) {
		bordaVermelha(inputSexo, true);
		return false;
	}
	else return bordaVermelha(inputSexo, false);
}

function validaLinguas() {
	let inputLinguas = document.getElementById("linguas");
	let selecionado = 0;
	let linguas = document.getElementById("linguas").getElementsByTagName("input");
	
	for(var i = 0; i < linguas.length; i++){
		if(linguas[i].type == "checkbox" && linguas[i].checked == true)	selecionado++;
	}

	if (selecionado < 3) {
		bordaVermelha(inputLinguas, true);
		return false;
	}
	else return bordaVermelha(inputLinguas, false);
}

function validaEstado() {
	let estado = document.getElementById("estado");
	if(estado.value == "null"){
		bordaVermelha(estado, true);
		return false;
	}
	else return bordaVermelha(estado, false);
}

function validaCidade() {
	let cidade = document.getElementById("cidade");
	if(cidade.value == "null" || cidade.value == "0" || cidade.value == ""){
		bordaVermelha(cidade, true);
		return false;
	}
	else return bordaVermelha(cidade, false);
}


function verificaRegEx(elemento, regex) {
	if(elemento.value.search(regex)){
		bordaVermelha(elemento, true);
		return false;	
	}else{
		bordaVermelha(elemento, false);
		return true;
	}
}

function verificaPreenchimento(elemento) {
	if (elemento.value == null || elemento.value == ""){
		bordaVermelha(elemento, true);
		return false;
	}else{
		bordaVermelha(elemento, false);
		return true;
	}
}

function bordaVermelha(elemento, valor) {
	if(valor){
		elemento.classList.add('erroClass');
		return false;
	}
	else{
		elemento.classList.remove("erroClass");
		return true;
	}
}