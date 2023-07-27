export default class SideBar {

	static toggle(sidebar, bar) {

		// check toggle state on load
		let toggle = localStorage.getItem("sidebar");
		if(toggle == "visible") {
			sidebar.classList.remove("hide");
		}

		bar.addEventListener("click", function() {
			sidebar.classList.toggle("hide");
			
			if(sidebar.classList.contains("hide")) {
				localStorage.setItem("sidebar", "hidden");
			}
			else {
				localStorage.setItem("sidebar", "visible");
			}
		});
	}

}
