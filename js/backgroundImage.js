export default class BackgroundImage {

	static set(element, fileUpload, key) {
		element.addEventListener("click", function() {
			fileUpload.click();
		})

		fileUpload.addEventListener("change", function() {
			const reader = new FileReader();
			reader.readAsDataURL(fileUpload.files[0]);
			reader.addEventListener("load", function() {
				element.style.backgroundImage = `url(${reader.result})`;
				localStorage.setItem(key, reader.result);
			})
		})
	}

	static load(element, key) {
		let image = localStorage.getItem(key);
		if(image) {
			element.style.backgroundImage = `url(${image})`;
		}
	}
}