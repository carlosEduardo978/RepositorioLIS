function createlist(quantidadeLi, texto) {
	console.log("criando a lista");

	for(var i =0; i < quantidadeLi; i++){
		var node = document.createElement("Li");
		var textnod = document.createTextnode(+ " " + i);
		node.appendChild(textnode);

		document.getElementByid("minhaLista").appendChild(node);
	}
	

createlist(5, "item");