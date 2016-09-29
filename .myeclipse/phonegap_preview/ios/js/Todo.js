function getArray()
{
	var toDoList = new Array;							//create an array
	var taskStr = localStorage.getItem('toDoList') 		//get the task from input using LocalStorage
	if (taskStr !== null)								//if the value is NOT empty --null--
	{
		toDoList = JSON.parse(taskStr);
	}
		return toDoList;
}

function addTask()
{
	var task = document.getElementById("taskName").value;		//create a variable to hold value of input
	var array = getArray();										//create a variable to hold our array
	array.push(task);											//pushing the task into the array
	localStorage.setItem(array, JSON.stringify(task));			//store the task LocalStorage saving to the array
	show();
	
	return false;
}

function show()
{
	var array = getArray();					//create the variable to hold Array
	var htmlFormat = "<ul>";				//add unordered List
	for (var i=0; i < array.length; i++)	//A For Loop to display the Array
		{
			htmlFormat += "<li>" + array[i] + "<li>"
		}
	htmlFormat += "<ul>"
	document.getElementById(array).innerHTML = htmlFormat; 						//show the document
}

document.getElementById('add').addEventListener('click', addTask) show();