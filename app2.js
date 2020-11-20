

// what am i doing


// create eventList
	// fill it with events
		// add material
		// add quantity => 
			// sel from all objs
	// display it on the page

// dashboard || scoreboard


// maybe later
	// switch dashboard from log to totals
	// ? modal

let materialArr = []

function newMaterials() {
	newName = prompt("new material name?:","")
	let Material = {
		name: newName,
		quantity: 0
	}
	materialArr.push(Material)
	console.log(materialArr)
}


// eventsArr = [
// 	'newMaterial', 'addMaterialQuantity',
// 	'newProduct', 'newProductQuantity',
// 	'newOrder'
// ]

// let eventButton = (name) => {
// 	let btnElement = document.createElement("button")
// 	btnElement.innerHTML = name
// 	document.querySelector('#eventList').appendChild(btnElement)
// }

// const eventList = eventsArr.map( (e) => eventButton(e) )



// so i need to create three sections in index.html

// made the button
// const eBtn = (name) => `<button>${name}</button>`

// const UICreateEventList = (e) => {
// 	return e.forEach(document.queryselector('#eventList')
// 	.appendChild(e))
// }

// UICreateEventList(eventList);

// what to do
	// write p hi to div



console.log()

// lets plug it into the dom


	// pseudo code
// new event list
	// from eventsArr.map
	// for each
	// make a button
	// with arr

// const eventlivst = (a= #eventlist, b= eventarr) => {
// 	const list = document.queryselector("#eventlist")
// 	list.appendchild(ebtn(addmaterial))
// }

// ^ this is map right?



	// addMaterialToList(material) {
	// 	const list = document.querySelector("#material-list");

	// 	const row = document.createElement("tr");

	// 	row.innerHTML = `
	// 		<td>${material.title}</td>
	// 		<td>${material.quantity}</td>
	// 		<td><a href="#" class="btn delete">X</a></td>
	// 	`;

	// 	list.appendChild(row);
	// }






/*
 *
<label for="title">
	<input type="text" id="title" class="" />
</label>
<label for="quantity">
	<input type="number" id="quantity" value="0" class="" />
</label>
<input type="submit" value="Add Material" />


<thead>
	<tr>
		<th>Title</th>
		<th>Quantity</th>
		<th></th>
	</tr>
</thead>
<tbody id="material-list"></tbody>
 *
*/





// store class: handles storage

// event display all

// event to add a material

// event to update material quantity

// event to add a product

// event to update product quantity

// event to add an order




// ui class: handles ui talks
