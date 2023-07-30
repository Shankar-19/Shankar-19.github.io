export default class Notepad {

	static save(saveButton, textarea) {
		textarea.addEventListener("keyup", function() {
			let value = localStorage.getItem("notes");

			if(value != textarea.value){
				saveButton.style.fill = "#0079FF";
			}
			else {
				saveButton.style.fill = "#3A3845";
			}
		});

		// set the notes on load
		let notes = localStorage.getItem("notes");
		if(notes) {
			textarea.value = notes;
		} 
		else {
			localStorage.setItem("notes", "");
		}

		saveButton.addEventListener("click", function() {
			localStorage.setItem("notes", textarea.value);
			saveButton.style.fill = "#3A3845";
		});
	}
}