document.getElementById("novoContato").addEventListener("click", criarContato);
document.getElementById("listaContatos").addEventListener("click", listaContatos);

function criarContato()
{
	var nome = document.getElementById('nome').value;
	var novoContato = navigator.contacts.create({"displayName": nome});
	var telefones = [];
	var celular = document.getElementById('ntel').value;

	telefones[1] = new ContactField('mobile', celular, true);
	novoContato.phoneNumbers = telefones;
	novoContato.save(ok, erro);

	function ok()
	{
		alert("Contato Salvo!");
	}

	function erro(message)
	{
		alert('falha: ' + message);
	}

}


function listaContatos()
{
	var options = new ContactFindOptions();
	options.filter = "";
	options.multiple = true;

	fields = ["displatName", "phoneNumbers"];
	navigator.contacts.find(fields, sucesso, falha, options);

	contatoDiv = document.querySelector("#contato");
	contatoDiv.innerHtml = "";

	function sucesso(contacts)
	{
		for (var i = 0; i < contacts.length; i++)
		{
			contatoDiv.innerHTML += "<b>" + contacts[i].displayName + "</b> <br/>" + 
			contacts[i].phoneNumbers[0].value + "<br/>";
		}
	}

	function falha(message)
	{
		alert('Falha: ' + message);
	}

}