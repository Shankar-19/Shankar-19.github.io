export default class SideBar {

	constructor(sidebar, bar, userName, userTitle) {
		this.sidebar = sidebar;
		this.bar = bar;
		this.userName = userName;
		this.userTitle = userTitle;
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
}