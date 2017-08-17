document.querySelector('.Himnae').addEventListener('click', function(e){
	alert('what\'s up Tim?');
	// => \ before a' allows you to insert an apostrophe or you can use a double-quote
});


function buildProduct(product) {
	var element = document.createElement('div');
	element.className = 'product ' + product.className;
	// => class="product compassion"

	element.innerHTML = (
		'<div class="productcards" id="'+ product.className +'">' +
		'	<h4 class="productname">' + product.name + '</h4>' + 
		'	<h5 class="price">' + product.price + ' veraques</h5>'+ 
		'	<img class="productimage" src="images/' + product.image +'"/>' + 
		'	<div class="quantity"></div>' +
		'	<button class="btn add">Add</button>' +
		'</div>'
	);
	console.log("did it work");
  
	element.querySelector('.add').addEventListener('click', function(event) {
		// var quantity = element.querySelector('.quantity-input').value;
		if (quantity.value == '') {
			alert("Please select a quantity");
			return;
		}
		var qty = Number(quantity.value);
		addToCart(product, qty);
		renderCart();
	});

	var quantity = buildSelect(product.quantity);
	element.querySelector('.quantity').appendChild(quantity);

	return element;

}

function removeCart(lineItem){
	var index = lineItems.indexOf(lineItem);
	lineItems.splice(index, 1);

}

function buildSelect(quantity) {
	var select = document.createElement('select');
	// => <select></select>
	var placeholder = document.createElement('option');
	placeholder.value = '';
	placeholder.label = 'Qty';
	select.appendChild(placeholder);

	for (var i = 1; i <= quantity; i++) {
		var option = document.createElement('option');
		option.value = i;
		option.label = i;
		select.appendChild(option);
	}

	return select;
}

function addToCart(product, quantity) {
	lineItems.push({
	product: product, 
	quantity: quantity
	});
}

//function removeToCart(product, quantity) {
//	lineItems.remove({
//		product: product,
//		quantity; quantity
//	});
//}

function renderCart() {
	var productcards = document.querySelector('#cartContents');
	productcards.innerHTML= '';
	for (var i = 0; i < lineItems.length; i++){
	productcards.appendChild(buildLineItem(lineItems[i]));
	}
}

function buildLineItem(lineItem) {
	var element = document.createElement('tr');
	element.innerHTML = (
	'<td>' + lineItem.product.name + '</td>' +
	'<td>' + lineItem.product.price + '</td>' +
	'<td>' + lineItem.quantity + '</td>' + 
	'<td>' + (lineItem.quantity * Number(lineItem.product.price)).toFixed(2) + '</td>' +
	'<td>' + '	<button class="btn remove">Remove</button>' + '</td>'
	);

	element.querySelector('.remove').addEventListener('click', function(event) {
	removeCart(lineItem);
	renderCart();
	});


	return element;
}

//function buildSelect(quantity) {
	//var inventory = quantity[index];
	//inventory.innerHTML = (
	//'<button class="btn" value="' + products.quantity + '">Add</button>'
	//productcards.appendChild(inventory);

	//);


//}

var lineItems = [];

var products = [
	{
		name: 'Compassion', 
		className: 'compassion', 
		price: '5',
		image: 'compassion.svg',
		quantity: 11,
	},

	{
		name: 'Courage', 
		className: 'courage', 
		price: '2',
		image: 'courage.svg',
		quantity: 20,
	}, 

	{
		name: 'Empathy', 
		className: 'empathy', 
		price: '9',
		image: 'empathy.svg',
		quantity: 18,
	}, 

	{
		name: 'Generosity', 
		className: 'generosity', 
		price: '6',
		image: 'generosity.svg',
		quantity: 6,
	}, 

	{
		name: 'Intuition', 
		className: 'intuition', 
		price: '3',
		image: 'intuition.svg',
		quantity: 15,
	},

	{
		name: 'Loyalty', 
		className: 'loyalty', 
		price: '5',
		image: 'loyalty.svg',
		quantity: 10,
	}, 

	{
		name: 'Time', 
		className: 'time', 
		price: '8',
		image: 'time.svg',
		quantity: 5,
	}, 

	{
		name: 'Kindness', 
		className: 'kindness', 
		price: '9',
		image: 'kindness.svg',
		quantity: 12,
	},

	{
		name: 'Integrity', 
		className: 'integrity', 
		price: '3',
		image: 'integrity.svg',
		quantity: 11,
	}, 

	{
		name: 'Hope', 
		className: 'hope', 
		price: '3',
		image: 'hope.svg',
		quantity: 5,
	}, 

	{
		name: 'Humility', 
		className: 'humility', 
		price: '13',
		image: 'humility.svg',
		quantity: 10,
	}, 

	{
		name: 'Gratitude', 
		className: 'gratitude', 
		price: '7',
		image: 'gratitude.svg',
		quantity: 13,
	}, 

	{
		name: 'Patience', 
		className: 'patience', 
		price: '7',
		image: 'patience.svg',
		quantity: 13,
	}, 

	{
		name: 'Honesty', 
		className: 'honesty', 
		price: '7',
		image: 'honesty.svg',
		quantity: 13,
	}, 

	{
		name: 'Respect', 
		className: 'respect', 
		price: '7',
		image: 'respect.svg',
		quantity: 13,
	},
];

for (var i = 0; i < products.length; i++) {
	document.querySelector('#products').appendChild(buildProduct(products[i]));
}