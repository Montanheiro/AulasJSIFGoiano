function validaForm() {

	validaNome();
	validaIdade();
	validaEmail();
	validaTelefone();
	validaSexo();
	validaLinguas();
	validaEstado();
	validaCidade();

}

function validaNome() {
	let nome = document.getElementById("nome");
	if (nome.value == null || nome.value == "") {
		alert("É preciso preencher seu nome");
		nome.classList.add('erroClass');
		return false;
	}else{
		nome.classList.remove("erroClass");
	}
}

function validaIdade() { 
 	let idade = document.getElementById("idade");
	if (idade.value == null || idade.value == "") {
		alert("Preencha a idade");
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
		alert("Email inválido");
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
		alert("Telefone inválido");
		telefone.classList.add("erroClass");
		return false;
	}else{
		telefone.classList.remove("erroClass");
	}
}
function mascara(t, mask){
	var i = t.value.length;
	var saida = mask.substring(1,0);
	var texto = mask.substring(i)
	if (texto.substring(0,1) != saida){
		t.value += texto.substring(0,1);
	}
} //fonte: vivaolinux.com.br/script/Mascara-JavaScript-para-Campos-de-Telefone-Celular-e-CEP/

function validaSexo() {
	let inputSexo = document.getElementById("sexo");
	if (document.formulario.sexo[0].checked == false &&
			document.formulario.sexo[1].checked == false) {
		alert("Você não selecionou o sexo");
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
		alert("Nenhuma lingua selecionada!");
		inputLinguas.classList.add("erroClass");
		return false;
	}
}

function validaEstado() {
	let estado = document.getElementById("estado");
	if(estado.value == "null"){
		alert("Selecione um estado")
		estado.classList.add("erroClass");
		return false;
	}else{
		estado.classList.remove("erroClass");
	}
}

function validaCidade() {
	let cidade = document.getElementById("cidade");
	if(cidade.value == "null" || cidade.value == "0"){
		alert("Selecione uma cidade")
		cidade.classList.add("erroClass");
		return false;
	}else{
		cidade.classList.remove("erroClass");
	}
}