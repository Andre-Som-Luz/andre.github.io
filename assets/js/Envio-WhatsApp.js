//    var name = document.getElementById("name").value;
//    var email = document.getElementById("email").value;

function validar() {
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var evento = document.getElementById("evento").value;
	var data = document.getElementById("data").value;
	var cidade = document.getElementById("cidade").value;
	var observacao = document.getElementById("observacao").value;
	var aceite = document.getElementById("aceite").value;
	if (name == "") {
		alert("Nome em branco!");
		return;
	}else if (email == "") {
		alert("Email em branco!");
		return;	
	}else if (evento == "") {
		alert("Informe o tipo de evento");
		return;
	}else if (data == "") {
		alert("Informe a data do evento");
		return;
	}else if (evento == "") {
		alert("Informe a cidade do evento");
		return;
	}else if (aceite == "") {
		alert("Confime que aceita nossas políticas de privacidade!");
		return;
	}else{
		var url = "https://wa.me/5521991531856?text=" 
		+ "Name: " + name + "%0a"
    	+ "Email: " + email + "%0a"
		+ "Evento: " + evento + "%0a"
		+ "Data: " + data + "%0a"
		+ "Cidade: " + cidade + "%0a"
		+ "Observações: " + observacao + "%0a"
		+ "Aceite: " + aceite + "%0a" + "%0a"
		+ "Mensagem enviada pelo site André Som Luz & Imagem" + "%0a"; 

    window.open(url, '_blank').focus();
	}
}