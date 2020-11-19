// material class
// class Material {
// 	constructor(name) {
// 		this.name = name;
// 		this.quantity = [0];
// 	}
// 	updateQuantity: function(num) {
// 		this.quantity.push(parseInt(num));
// 	}
// }
class Material {
	constructor(name) {
		this.name = name;
		this.quantity = [0];
	}
	addQuantity(num) {
		this.quantity.push(num);
		console.log(`added ${num} ${this.name}s`);
	}
	getQuantity() {
		return this.quantity.reduce((a, b) => a + b, 0);
	}
}

class Product extends Material {
	constructor(name, materialArr) {
		super(name);
		this.materialArr = materialArr;
	}
	addQuantity(num) {
		this.quantity.push(num);
		console.log(`added ${num} ${this.name}s`);
		this.subtractMaterial();
		// this.materialArr.forEach(addQuantity(num));
	}
	subtractMaterial() {
		this.materialArr.forEach((name) => console.log(name));
	}
}

const material1 = new Material("lighter blank");
const material2 = new Material("lighter art");
const material3 = new Material("lighter laminate");
const material4 = new Material("lighter bag");

const product1 = new Product("lighter", [
	"lighter blank",
	"lighter art",
	"lighter laminate",
	"lighter bag",
]);

console.log(material1);

//  	updateQuantity: function(num) {
//  		this.quantity.push(parseInt(num));
//  	}
//  }

// order class
class Order {
	constructor(productArr) {
		this.products = productArr;
	}
}

// ui class: handles ui talks
class UI {
	static display() {
		const materials = [];
		const products = [];
		const orders = [];

		materials.forEach((material) => UI.addMaterialToList());
	}
}

// store class: handles storage

// event display all

// event to add a material

// event to update material quantity

// event to add a product

// event to update product quantity

// event to add an order
