export default class Notepad {

	constructor(textarea, emojiButton, upload, saveButton, settingsButton, wordCount, charCount) {
		this.textarea = textarea;
		this.emojiButton = emojiButton;
		this.upload = upload;
		this.saveButton = saveButton;
		this.settingsButton = settingsButton;
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

	emoji(emojiSelector) {

		let _this = this;

		// toggle emoji selector
		this.emojiButton.addEventListener("click", function() {
			emojiSelector.classList.toggle("hide");

			if(emojiSelector.classList.contains("hide")) {
				this.style.fill = "#3A3845";
			}
			else {
				this.style.fill = "#0079FF";
			}
		})

		emojiSelector.addEventListener("click", function(e) {
			let target = e.target;
			if(target.nodeName == "SPAN") {
				let cursorPos = _this.textarea.selectionStart;
				let str = _this.textarea.value;
				_this.textarea.value = str.slice(0, cursorPos) + target.innerText + str.slice(cursorPos);

				// update the cursor position
				_this.textarea.selectionStart = cursorPos;

				// update the word count and char count
				Notepad.totalWords(_this);
				Notepad.totalChar(_this);

				// update the saveButton color
				_this.saveButton.style.fill = "#0079FF";
			}
		})
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

	toggleSettings(settingsPanel, xmark) {

		let _this = this;

		// hide settings panel
		xmark.addEventListener("click", function() {
			settingsPanel.classList.add("hide");
			_this.settingsButton.style.fill = "#3A3845";
		})

		// toggle settings panel
		this.settingsButton.addEventListener("click", function() {
			settingsPanel.classList.toggle("hide");

			if(settingsPanel.classList.contains("hide")) {
				this.style.fill = "#3A3845";
			}
			else {
				this.style.fill = "#0079FF";
			}
		})
	}

	setFont(fontButton) {

		// set font family on load
		let fontFamily = localStorage.getItem("fontFamily");
		if(fontFamily) {
			this.textarea.style.fontFamily = fontFamily;
			fontButton.value = fontFamily;
		}

		let _this = this;
		fontButton.addEventListener("change", function() {
			_this.textarea.style.fontFamily = this.value;
			localStorage.setItem("fontFamily", this.value);
		});
	}

	setFontSize(sizeButton) {

		// set font size on load
		let fontSize = localStorage.getItem("fontSize");
		if(fontSize) {
			this.textarea.style.fontSize = fontSize + "px";
			sizeButton.value = fontSize;
		}

		let _this = this;
		sizeButton.addEventListener("change", function() {
			_this.textarea.style.fontSize = this.value + "px";
			localStorage.setItem("fontSize", this.value);
		})
	}

	setAlignment(alignButton) {

		// set text alignment on load
		let textAlign = localStorage.getItem("textAlign");
		if(textAlign) {
			this.textarea.style.textAlign = textAlign;
			alignButton.value = textAlign;
		}

		let _this = this;
		alignButton.addEventListener("change", function() {
			_this.textarea.style.textAlign = this.value;
			localStorage.setItem("textAlign", this.value);
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