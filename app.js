// material class: represents a new material
const Material = () => {
	const quantity = [0]
	return {
		// addQuantity: (x) => quantity.push(x)
		quantity: () => console.log('the new quantity is: ', quantity)
	}
	// addQuantity() = (x) => quantity.push(x)
	// getQuantity() = quantity.reduce((a, b) => a + b, 0)
}

const lighter_art = Material()
lighter_art.quantity()

// lighter_art.getQuantity()

// ui class: handle ui task

// class UI {
// 	static displayMaterials() {
// 		const materials = Store.getMaterials();

// 		materials.forEach((material) => UI.addMaterialToList(material));
// 	}

// 	static addMaterialToList(material) {
// 		const list = document.querySelector("#material-list");

// 		const row = document.createElement("tr");

// 		row.innerHTML = `
// 			<td>${material.title}</td>
// 			<td>${material.quantity}</td>
// 			<td><a href="#" class="btn delete">X</a></td>
// 		`;

// 		list.appendChild(row);
// 	}

// 	static deleteMaterial(el) {
// 		if (el.classList.contains("delete")) {
// 			el.parentElement.parentElement.remove();
// 		}
// 	}

// 	static showAlert(message, className) {
// 		const div = document.createElement("div");
// 		div.className = `alert alert-${className}`;
// 		div.appendChild(document.createTextNode(message));
// 		const container = document.querySelector(".container");
// 		const form = document.querySelector("#material-form");
// 		container.insertBefore(div, form);

// 		// vanish in 2 seconds
// 		setTimeout(() => document.querySelector(".alert").remove(), 2000);
// 	}

// 	static clearFields() {
// 		document.querySelector("#title").value = "";
// 		document.querySelector("#quantity").value = 0;
// 	}
// }

// // store class: handles storage
// class Store {
// 	static getMaterials() {
// 		let materials;
// 		if (localStorage.getItem("materials") === null) {
// 			materials = [];
// 		} else {
// 			materials = JSON.parse(localStorage.getItem("materials"));
// 		}

// 		return materials;
// 	}

// 	static addMaterial(material) {
// 		const materials = Store.getMaterials();

// 		materials.push(material);

// 		localStorage.setItem("materials", JSON.stringify(materials));
// 	}

// 	static removeMaterial(title) {
// 		const materials = Store.getMaterials();

// 		materials.forEach((material, index) => {
// 			if (material.title === title) {
// 				materials.splice(index, 1);
// 			}
// 		});

// 		localStorage.setItem("materials", JSON.stringify(materials));
// 	}
// }

// // event: display material
// document.addEventListener("DOMContentLoaded", UI.displayMaterials);

// // event: add material
// document.querySelector("#material-form").addEventListener("submit", (e) => {
// 	// prevent actual submit
// 	e.preventDefault();

// 	// get form values
// 	const title = document.querySelector("#title").value;
// 	const quantity = document.querySelector("#quantity").value;

// 	// validate
// 	if (title === "" || quantity === "") {
// 		UI.showAlert("Please fill in all fields", "danger");
// 	} else {
// 		// instantiate material
// 		const material = new Materal(title, quantity);

// 		// add material to UI
// 		UI.addMaterialToList(material);

// 		// add material to store
// 		Store.addMaterial(material);

// 		// show success message
// 		UI.showAlert("Material Added", "success");

// 		// clear fields
// 		UI.clearFields();
// 	}
// });

// // event: remove material
// document.querySelector("#material-list").addEventListener("click", (e) => {
// 	// remove material from UI
// 	UI.deleteMaterial(e.target);

// 	// remove material from Store
// 	Store.removeMaterial(
// 		e.target.parentElement.previousElementSibling.previousElementSibling
// 			.textContent
// 	);

// 	// show success message
// 	UI.showAlert("Material Removed", "success");
// });
