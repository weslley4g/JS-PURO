//buscando com o querySelector a lista (ul) html.
var listElement = document.querySelector('#app ul');
//buscando com o querySelector o input no html.
var inputElement = document.querySelector('#app input');
//buscando com o querySelector o butão(button) no html.
var buttonElement = document.querySelector('#app button');
//Buscando os valores do LocalStorage
var todos = JSON.parse(localStorage.getItem('list_todos') ||  [] );

//função para criar a lista de TO-DOS
function renderTodos(){
	listElement.innerHTML = '';
	for (todo of todos){
		var todoElement = document.createElement('li');
		var todoText = document.createTextNode(todo);
		//criando o elemento "<a href='' ></a>" no html
		var linkElement = document.createElement('a');
		linkElement.setAttribute('href','#');
		var linkText = document.createTextNode('Excluir');
		linkElement.appendChild(linkText);
		//Excluindo TO-DOS
		var pos =todos.indexOf(todo);
		linkElement.setAttribute('onclick', 'deleteTodo('+pos+')');
		// passando o texto para ser exibido no <li></li>
		todoElement.appendChild(todoText);
		todoElement.appendChild(linkElement);

		//pegando todo o conteudo a ser exibido na <ul></ul>
		listElement.appendChild(todoElement);
	}
}
renderTodos();
//função para adicionar um texto na arrey de TO-DOS
function addTodo() {
	var todoText = inputElement.value;
	todos.push(todoText); // adiciona ao final da arrey
	inputElement.value = '';
	renderTodos();
	saveTodos();
}
buttonElement.onclick = addTodo;
// função para excluir TO-DOS
function deleteTodo(pos) {
	todos.splice(pos, 1);
	renderTodos();
	saveTodos();
}
//função para salvar TO-DOS no storage
function saveTodos() {
	localStorage.setItem('list_todos', JSON.stringify(todos));
}
