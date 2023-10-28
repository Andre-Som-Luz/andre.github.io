//    var name = document.getElementById("name").value;
//    var email = document.getElementById("email").value;

function validar() {
	var name = document.getElementById("nome").value;
	var observacao = document.getElementById("mensagem").value;
	var aceite = document.getElementById("aceite").value;
	if (name == "") {
		alert("Nome em branco!");
		return;
	}else if (aceite == "") {
		alert("Confime que aceita nossas políticas de privacidade!");
		return;
	}else{
		var url = "https://api.whatsapp.com/send/?phone=5521989124255&text="  
		+ "Nome: " + name + "%0a"
        + "Mensagem: " + observacao + "%0a"
		+ "Aceite: " + aceite + "%0a" + "%0a"
		+ "Mensagem enviada pelo site André Som Luz & Imagem" + "%0a"; 

    window.open(url, '_blank').focus();
	}
}