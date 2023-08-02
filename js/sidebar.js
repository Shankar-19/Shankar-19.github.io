export default class SideBar {

	constructor(sidebar, bar, userName, userTitle, tasksButton, notepadButton) {
		this.sidebar = sidebar;
		this.bar = bar;
		this.userName = userName;
		this.userTitle = userTitle;
		this.tasksButton = tasksButton;
		this.notepadButton = notepadButton;
	}

	toggle() {
		let _this = this;

		// check toggle state on load
		let toggle = localStorage.getItem("sidebar");
		if(toggle == "visible") {
			this.sidebar.classList.remove("hide");
		}

		this.bar.addEventListener("click", function() {
			_this.sidebar.classList.toggle("hide");
			
			if(_this.sidebar.classList.contains("hide")) {
				localStorage.setItem("sidebar", "hidden");
			}
			else {
				localStorage.setItem("sidebar", "visible");
			}
		});
	}

	setUserName() {
		// set the user name on load
		let name = localStorage.getItem("userName");
		if(name) {
			this.userName.value = name;
		}

		this.userName.addEventListener("keyup", function(e) {
			localStorage.setItem("userName", this.value);
		})
	}

	setUserTitle() {
		// set the user title on load
		let title = localStorage.getItem("userTitle");
		if(title) {
			this.userTitle.value = title;
		}

		this.userTitle.addEventListener("keyup", function() {
			localStorage.setItem("userTitle", this.value);
		})
	}

	changeApp(tasks, notepad) {

		// set the app on load
		let app = localStorage.getItem("app");
		if(app == "notepad") {
			notepad.classList.remove("hide");
			tasks.classList.add("hide");

			// update the color
			this.notepadButton.style.backgroundColor = "#D0F5BE";
			this.tasksButton.style.backgroundColor = "#f3f3f3";
		} 

		let _this = this;
		this.tasksButton.addEventListener("click", function() {
			tasks.classList.remove("hide");
			notepad.classList.add("hide");

			// change the color
			this.style.backgroundColor = "#D0F5BE";
			_this.notepadButton.style.backgroundColor = "#f3f3f3";

			localStorage.setItem("app", "tasks");
		})

		this.notepadButton.addEventListener("click", function() {
			notepad.classList.remove("hide");
			tasks.classList.add("hide");

			// change the color
			this.style.backgroundColor = "#D0F5BE";
			_this.tasksButton.style.backgroundColor = "#f3f3f3";

			localStorage.setItem("app", "notepad");
		})
	}
}