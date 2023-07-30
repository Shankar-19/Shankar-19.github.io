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

	static setImage(bgImage, profilePic, notepadHeader, fileUpload) {

		// set the background image on load
		let str = localStorage.getItem("bgImage");
		if(str) {
			bgImage.style.backgroundImage = `url(${str})`;
		}

		// set the profile picture on load
		str = localStorage.getItem("profilePic");
		if(str) {
			profilePic.style.backgroundImage = `url(${str})`;
		}

		// set the notepad background image on load
		str = localStorage.getItem("notepadHeader");
		if(str) {
			notepadHeader.style.backgroundImage = `url(${str})`;
		}

		let image = "";

		bgImage.addEventListener("click", function() {
			fileUpload.click();
			image = "background"
		})

		profilePic.addEventListener("click", function() {
			fileUpload.click();
			image = "profile"
		});

		notepadHeader.addEventListener("click", function() {
			fileUpload.click();
			image = "notepad";
		})

		fileUpload.addEventListener("change", function() {
			const reader = new FileReader();
			reader.readAsDataURL(fileUpload.files[0]);

			reader.addEventListener("load", function() {
				if(image == "background") {
					bgImage.style.backgroundImage = `url(${reader.result})`;
					localStorage.setItem("bgImage", reader.result);
				}
				else if (image == "profile") {
					profilePic.style.backgroundImage = `url(${reader.result})`;
					localStorage.setItem("profilePic", reader.result);
				}
				else {
					notepadHeader.style.backgroundImage = `url(${reader.result})`;
					localStorage.setItem("notepadHeader", reader.result);
				}
			})
		});
	}

	static setUserDetails(name, title) {

		// set the user name on load
		let str = localStorage.getItem("userName");
		if(str) {
			name.value = str;
		}

		// set the user title on load
		str = localStorage.getItem("userTitle");
		if(str) {
			title.value = str;
		}
		
		name.addEventListener("keyup", function(e) {
			localStorage.setItem("userName", name.value);
		})

		title.addEventListener("keyup", function() {
			localStorage.setItem("userTitle", title.value);
		})
	}
}
