export default class Tasks {

	constructor(taskInput, tasksContainer, tasksImage) {
		this.taskInput = taskInput;
		this.tasksContainer = tasksContainer;
		this.tasksImage = tasksImage;
	}

	static toggleImage(_this) {
		if(_this.tasksContainer.innerText != '')
			_this.tasksImage.classList.add("hide");
		else
			_this.taskInput.classList.remove("hide");
	}

	loadTask() {
		let arr = localStorage.getItem("tasks");
		if(arr) {
			arr = JSON.parse(arr);
			for(let i = 0; i < arr.length;i ++)
				this.tasksContainer.innerHTML += arr[i];
		}

		// check the image visible state on load
		Tasks.toggleImage(this);
	}

	addTask() {

		let _this = this;

		this.taskInput.addEventListener("keyup", function(e) {
			if(e.key == "Enter") {

				let task = 
					`<div class="task">
						<input type="checkbox" class="checkbox">
						<p class="task-content">${this.value}</p>
						<svg class="delete-button" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
					</div>`;

				// get the array from local storage
				let taskArr = JSON.parse(localStorage.getItem("tasks")) || [];
				taskArr.push(task);
				
				_this.tasksContainer.innerHTML += task;

				// save the task in the local storage;
				localStorage.setItem("tasks", JSON.stringify(taskArr));

				Tasks.toggleImage(_this);

				this.value = "";
			}
		})
	}
}