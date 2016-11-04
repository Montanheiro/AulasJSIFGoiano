function validaForm() {

	validaNome(); //OK
	validaNascimento(); //OK
	validaIdade();
	validaEmail(); //OK
	validaCPFouCNPJ();
	validaTelefone();
	validaSexo();
	validaLinguas();
	//validaEstado();
	//validaCidade();

}

function validaNome() {
	let nome = document.getElementById("nome");
	let validacaoNome = /^[A-Za-záàâãéèêíóúç]{10,30}$/i;
	verificaRegEx(nome, validacaoNome);
}

function validaNascimento() {
	let nascimento = document.getElementById("nascimento");
	let validacaoNascimento = /^([1-9]|0[1-9]|[1,2][0-9]|3[0,1])\/([1-9]|1[0,1,2])\/\d{4}$/;
	verificaRegEx(nascimento, validacaoNascimento);
}

function validaIdade() { 
 	let idade = document.getElementById("idade");
	
}

function validaEmail() {
	let email = document.getElementById("email");
	let validacaoEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	verificaRegEx(email, validacaoEmail);
}

function validaCPFouCNPJ() {
	let cpfoucnpj = document.getElementById("cpforcnpj");
	let validacaoCPFouCNPJ = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})$/;
	verificaRegEx(cpfoucnpj, validacaoCPFouCNPJ);
}

function validaTelefone() {
	let telefone = document.getElementById("telefone");
	
}

function validaSexo() {
	let inputSexo = document.getElementById("sexo");
	if (document.formulario.sexo[0].checked == false &&
			document.formulario.sexo[1].checked == false) {
		console.log("Você não selecionou o sexo");
		inputSexo.classList.add("erroClass");
		return false;
	}
	else{
		inputSexo.classList.remove("erroClass");
	}
}

function validaLinguas() {
	let inputLinguas = document.getElementById("linguas");
	let algumChecado = false;
	let linguas = document.getElementById("linguas").getElementsByTagName("input");
	for(var i = 0; i < linguas.length; i++){
		if(linguas[i].type == "checkbox" && linguas[i].checked == true){
			algumChecado = true;
			inputLinguas.classList.remove("erroClass");
			return;
		}
	}
	if (!algumChecado) {
		console.log("Nenhuma lingua selecionada!");
		inputLinguas.classList.add("erroClass");
		return false;
	}
}

function validaEstado() {
	let estado = document.getElementById("estado");
	if(estado.value == "null"){
		console.log("Selecione um estado")
		estado.classList.add("erroClass");
		return false;
	}else{
		estado.classList.remove("erroClass");
	}
}

function validaCidade() {
	let cidade = document.getElementById("cidade");
	if(cidade.value == "null" || cidade.value == "0"){
		console.log("Selecione uma cidade")
		cidade.classList.add("erroClass");
		return false;
	}else{
		cidade.classList.remove("erroClass");
	}
}


function verificaRegEx(elemento, regex) {
	if(elemento.value.search(regex)){
		bordaVermelha(elemento, true);
		return false;	
	}else{
		bordaVermelha(elemento, false);
	}
}

function verificaPreenchimento(elemento) {
	if (elemento.value == null || elemento.value == ""){
		bordaVermelha(elemento, true);
		return true;
	}else{
		bordaVermelha(elemento, false);
		return false;
	}
}

function bordaVermelha(elemento, valor) {
	if(valor) elemento.classList.add('erroClass');
	else elemento.classList.remove("erroClass");
}