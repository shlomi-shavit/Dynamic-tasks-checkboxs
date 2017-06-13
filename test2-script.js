var taskList = [
	{
		taskName: "Task 1",
		taskStatus: true,
		taskLastDate: new Date("2016.01.01")
	},
	{
		taskName: "Task 2",
		taskStatus: false,
		taskLastDate: new Date("2016.08.01")
	},
	{
		taskName: "Task 3",
		taskStatus: true,
		taskLastDate: new Date("2017.06.12")
	},
	{
		taskName: "Task 4",
		taskStatus: false,
		taskLastDate: new Date("2017.07.01")
	},
	{
		taskName: "Task 5",
		taskStatus: true,
		taskLastDate: new Date("2017.08.01")
	}
]

var currentDate = new Date();

// Creating inputs
var wrapper = document.getElementById("wrapper");

for( var i =0; i < taskList.length; i++ ){

	var newLabel = document.createElement('label'),
		newCheckBox = document.createElement('input'),
		inputContent = document.createTextNode(taskList[i].taskName + " " + taskList[i].taskLastDate);

    newCheckBox.type = 'checkbox';
    newCheckBox.id = 'task-' + i;
    newCheckBox.value = taskList[i].taskName + " " + taskList[i].taskLastDate;
	newLabel.appendChild(newCheckBox);
	newLabel.appendChild(inputContent);
	wrapper.appendChild(newLabel);

	// Dates comparison - adding old class and disable the checkbox
	if( currentDate.setHours(0,0,0,0) > taskList[i].taskLastDate.setHours(0,0,0,0)){
		newCheckBox.parentNode.classList.add("old");
		newCheckBox.disabled = true;
	}

	// Checkboxs clicks event
	newCheckBox.onclick = function() {
	    if ( this.checked ) {
	        //console.log( "addClass" );
	        this.parentNode.classList.add("checked");
	        
	    } else {
	        //console.log( "removeClass" );
	        this.parentNode.classList.remove("checked");
	    }
	};

}

