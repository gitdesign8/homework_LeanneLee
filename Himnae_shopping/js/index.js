$(function(){

    // Build your arrays
    var products    = ['Patience', 'Respect', 'Intuition', 'Empathy','Generosity', 'Loyalty', 'Time', 'Kindness', 'Courage', 'Compassion', 'Integrity', 'Hope', 'Humility', 'Gratitude', 'Honesty'];
    var images = ['patience.svg', 'respect.svg', 'intuition.svg', 'empathy.svg','generosity.svg','loyalty.svg', 'time.svg', 'kindness.svg', 'courage.svg', 'compassion.svg', 'integrity.svg', 'hope.svg', 'humility.svg', 'gratitude.svg', 'honesty.svg'];
    var pricing = ['4', '7', '8', '4', '10','4', '7', '8', '4', '10','4', '7', '8', '4', '10'];
    var quantities = ['4', '2', '8','10', '3','4', '2', '8','10', '3','4', '2', '8','10', '3'];
    var cart = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


    // Add products to the store
    $.each(products, function(index, value){
        var inventory = "";
        var image = images[index] || 'default.svg';

        inventory += '<div class="productcards" id="' + products[index] + 'Product">';
        inventory +=	'<h4 class="productname">' + products[index] + '</h4>';
        inventory += 	'<h5 class ="price">' + pricing[index] + ' veraques</h5>';
        inventory += 	'<img class="productimage" src="images/' + image + '"/>';
        inventory +=    '<div class="quantity">Qty';
       // inventory += 		'<select id="'+ value +'Select" class="dropdown">';

    //I'm having some problems getting the quantity to link up to the quantity array above
        //inventory +=              '<option value=1>1</option>';
        //inventory +=              '<option value=2>2</option>';
       // inventory +=              '<option value=3>3</option>';
       // inventory +=         '</select>';
        inventory += buildSelect(index);
        inventory += 	'</div>';
        inventory +=    '<button class="btn" value=' + index +   '>Add</button>';
        // Fire this code so it launches into the DOM
        $('#products').append(inventory);
        console.log("did it work");
    });

        // Now I need to figure out how to add the products with the click
        //function and have it show up in the cart.

    $('#products').on('click', '.btn', function(button){
        var index = $(this).val();
        var select_id = "#" + products[index] + "Select";
        var product_id = "#" + products[index] + "Product";
        var quantity = parseInt($(select_id).val());
        console.log(quantity);
        cart[index] += quantity;
        quantities[index] -= quantity;
        buildCart();
        
        $(select_id).remove();
        $(product_id).append(buildSelect(index));
        console.log(cart);
    });

    $('#viewCart').on('click', function(){
        //Clear the cart
        $('#cartContents').html('');

        //Build the cart
        for(var i = 0; i < products.length; i++)
        {
            var count = cart[i];
            if(count > 0) {
                var string = "";

                string += '<li class="list-group-item clearfix">';
                string += products[i];
                string += '<span>' + count + '</span>';
                string += '</li>';

                $('#cartContents').append(string);
            }
        }
    });

function buildSelect(index){

    var product = products[index];
    var quantity = quantities[index];
    var string = '';

    string +='<select id="' + product + 'Select">';
    var max = quantity || 0;
    for(var count = 1; count <= max; count++)
    {
        string += '<option value=' + count + '>' + count + '</option>';
    }
    string +='</select>';

    return string;
}

function buildCart(){

    $('#cartContents').html('');

    $.each(products, function(index, value){
        var count = cart[index];
        if(count > 0)
        {
            var string = "";
            string += '<p class="carttext">' + products[index] + '</p>';
            string += '<p class="cartprice">' + pricing[index] + '</p>';
            string += '<p class="cartqty">' + quantities[index] + '</p>';
            $('#cart').append(string);
            /*
            string +='<select id="' + product + 'Select">';
            var max = quantity || 0;
            for(var count = 1; count <= max; count++)
            {
                string += '<option value=' + count + '>' + count + '</option>';
            }
            string +='</select>';
            */
        }
    });
}



});