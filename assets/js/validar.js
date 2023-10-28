//    var name = document.getElementById("name").value;
//    var email = document.getElementById("email").value;

function validar() {
	var name = document.getElementById("nome").value;
	var observacao = document.getElementById("mensagem").value;
	if (name == "") {
		alert("Nome em branco!");
		return;
	}else{
		var url = "https://api.whatsapp.com/send/?phone=5521991531856&text="  
		+ "Nome: " + name + "%0a"
        + "Mensagem: " + observacao + "%0a"
		+ "Mensagem enviada pelo site André Som Luz & Imagem" + "%0a"; 

    window.open(url, '_blank').focus();
	}
}