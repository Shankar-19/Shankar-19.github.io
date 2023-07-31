export default class Notepad {

	constructor(textarea, emoji, upload, saveButton, settings, wordCount, charCount) {
		this.textarea = textarea;
		this.emoji = emoji;
		this.upload = upload;
		this.saveButton = saveButton;
		this.settings = settings;
		this.wordCount = wordCount;
		this.charCount = charCount;
	}

	static totalWords(_this) {
		// \s matches any whitespace (spaces, newline)
		let str = _this.textarea.value.replace(/\s+/g, ' ');

		// split at whitespace
		let arr = str.trim().split(' ');

		if(arr.length == 1 && arr[0] == '') {
			_this.wordCount.innerText = 0;
		}
		else {
			_this.wordCount.innerText = arr.length;
		}
	}

	static totalChar(_this) {
		// remove newlines
		_this.charCount.innerText = _this.textarea.value.replace(/\n+/g, '').length;
	}

	uploadFile(fileUpload) {
		this.upload.addEventListener("click", function() {
			fileUpload.click();
		})

		/* Inside the event listener this refers to the event, so we are unable to access the class properties.
		We have to store this in a variable in order to access the class properties. */
		let _this = this;

		fileUpload.addEventListener("change", function() {
			const reader = new FileReader();
			reader.readAsText(fileUpload.files[0]);
			reader.addEventListener("load", function() {
				_this.textarea.value = reader.result;
				_this.saveButton.style.fill = "#0079FF";

				// update the word count and char count
				Notepad.totalWords(_this);
				Notepad.totalChar(_this);
			});
		})
	}

	saveNotes() {
		let _this = this;

		// set the notes on load
		let notes = localStorage.getItem("notes");
		if(notes) {
			this.textarea.value = notes;
		} 
		else {
			localStorage.setItem("notes", "");
		}

		// toggle save button color
		this.textarea.addEventListener("keyup", function() {
			let value = localStorage.getItem("notes");

			if(value != this.value){
				_this.saveButton.style.fill = "#0079FF";
			}
			else {
				_this.saveButton.style.fill = "#3A3845";
			}
		});

		this.saveButton.addEventListener("click", function() {
			localStorage.setItem("notes", _this.textarea.value);
			this.style.fill = "#3A3845";

			// save word count
			localStorage.setItem("wordCount", _this.wordCount.innerText);

			// save character count
			localStorage.setItem("charCount", _this.charCount.innerText);
		});
	}

	setWordCount() {
		let _this = this;

		// set total words on load
		let totalWords = localStorage.getItem("wordCount");
		if(totalWords) {
			this.wordCount.innerText = totalWords;
		}

		this.textarea.addEventListener("keyup", function() {
			Notepad.totalWords(_this);
		});
	}

	setCharCount() {
		let _this = this;

		// set total chars on load
		let totalChar = localStorage.getItem("charCount");
		if(totalChar) {
			this.charCount.innerText = totalChar;
		}

		this.textarea.addEventListener("keyup", function() {
			Notepad.totalChar(_this);
		})
	}
}