function validaForm() {

	validaNome();
	//validaIdade();
	//validaEmail();
	//validaTelefone();
	//validaSexo();
	//validaLinguas();
	//validaEstado();
	//validaCidade();

}

function validaNome() {
	let nome = document.getElementById("nome");
	let validacaoNome = /^[A-Za-záàâãéèêíóúçÇ ]{10,30}$/;
	verificaRegEx(nome, validacaoNome);
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

function validaIdade() { 
 	let idade = document.getElementById("idade");
	if (idade.value == null || idade.value == "") {
		console.log("Preencha a idade");
		idade.classList.add("erroClass");
		return false;
	}else{
		idade.classList.remove("erroClass");
	}
}

function validaEmail() {
	let email = document.getElementById("email");
	let atpos = email.value.indexOf("@");
	let dotpos = email.value.lastIndexOf(".");
	if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 > email.value.length) {
		console.log("Email inválido");
		email.classList.add("erroClass");
		return false;
	}
	else{
		email.classList.remove("erroClass");
	}
}

function validaTelefone() {
	let telefone = document.getElementById("telefone");
	if (telefone.value == null || telefone.value == "") {
		console.log("Telefone inválido");
		telefone.classList.add("erroClass");
		return false;
	}else{
		telefone.classList.remove("erroClass");
	}
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