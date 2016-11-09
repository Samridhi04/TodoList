function get_todos() {
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str); 
    }
    return todos;
}
 
function add() {
    var task = document.getElementById('task').value;
	if(task.trim() == "") {			
				alert("Please enter some value");
			}
			
	else {
		var todos = get_todos();
		todos.push(task);
		localStorage.setItem('todo', JSON.stringify(todos));
	}
    
 
    show();
 
    return false;
}

function edit() {
	var id = this.getAttribute('id');
	var todos = get_todos();
	localStorage.changeId = id;
	localStorage.change = todos[id];
	window.location.href = "newpage.html";
	
}



function editData() {
	
	document.getElementById("result").value = localStorage.change;
	
}

function data() {
	 
	 localStorage.change = document.getElementById("result").value ; 
	 var todos = get_todos();
	 var id = localStorage.changeId;
	 if(localStorage.change.trim() == "") {			
				alert("Please enter some value");
			}
	 else {
		 todos[id] = localStorage.change;
		 localStorage.setItem('todo', JSON.stringify(todos));
		 window.location.href = "newtry.html";
		 
	 }
	 
	 
	// alert(todos[id]);
	// todos[id] = localStorage.change;
	 

	 // alert(localStorage.change);
	 
	
}


 
function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
 
    show();
 
    return false;
}
 
function show() {
    var todos = get_todos();
 
    var html = '<ul>';
    for(var i=0; i<todos.length; i++) {
        html += '<li>' + '<input type = "checkbox" class="remove" id="'+ i + '">' + '<span>' + todos[i] +'&nbsp;&nbsp;&nbsp' + '<button class="edit" id="' + i  + '">Edit</button>' + '</span>' + '</li>';
    };
    html += '</ul>';
 
    document.getElementById('todos').innerHTML = html;
 
    var buttons = document.getElementsByClassName('edit');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', edit);
    };
	
	var checkboxes = document.getElementsByClassName('remove');
	for(var i=0; i< checkboxes.length; i++) {
		checkboxes[i].addEventListener('click' , remove ) ;
		
	}
}
 
document.getElementById('add').addEventListener('click', add);
show();