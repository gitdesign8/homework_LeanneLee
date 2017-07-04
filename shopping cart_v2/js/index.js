$(function(){
    // Define Variables
    var products     = ['apples','oragnes','bananas','grapes'];
    var counts       = [0, 0, 0, 0];
    var prices       = [1, 1.25, .19, 2.25];
    var itemsleft    = [4, 3, 12, 8];
    var descriptions = ["Keep the doctor away!", "Perfect for Vitamin C", "Bananas are the Best!", "Frozen grapes are a yummy dessert"];

    // Handle Events
    // ADD items to the cart
    $('#products').click('add', function(){
        // Get the value of the button
        // We store the "index" in the button value when we inject the button into the DOM
        // (see below)
        var index = $(this).val();

        // Increment the count by 1
        counts[index]++;

        // Build / Rebuild the cart each time we add something
        buildCart();
    });

    
    // REMOVE items from the cart
    $('#cart').on('click','.btn', function(){
        // Get the value of the button
        // We store the "index" in the button value when we inject the button into the DOM
        // (see below)
        var index = $(this).val();

        // Set the count to zero
        counts[index] = 0;

        $(this).parent().remove();
    });

    // Define Functions
    function buildStore()
    {
        //Iterate products and inject each product into the DOM in the products
        $.each(products, function(index, value){

            //Build a string to inject
            var string = "";
            string += '<h3 class = "producttitle">';
            string += value;
            string += '</h3>';

            $('#products').append(string);
        });

        $.each(itemsleft, function(index, value){
            var costperproduct = "";
            costperproduct += '<h3 id="pricing"></h3>';
            costperproduct += value;
            costperproduct += '</h3>';

            $('#pricing').append(costperproduct); 

        });

        $.each(prices, function(index, value){
            var costperproduct = "";
            costperproduct += '<h4 id="quantityleft">';
            costperproduct += value;
            costperproduct += '</h4>';

            $('#quantityleft').append(costperproduct); 

        });



    }

    function buildCart()
    {
        $('#cart').html('');
        var total = 0;

        //Build the cart
        //Iterate products and inject each product into the DOM in the cart
        $.each(products, function(index, value){
            var count = counts[index];
            if(count > 0) {

                //show subtotal and add to total
                var subtotal = prices[index] * count;
                total += subtotal;

                var string = "";
                string += '<li class="list-group-item clearfix">';
                string += products[index] + " ";
                //string += '<button class="btn btn-danger btn-xs" value=' + index + '>Remove</button>';
                string += '<span class="label label-success pull-right">' + currencyFormat(subtotal, "$") + '</span>';
                string += '<span class="badge badge-pill badge-primary">' + count + '</span>';
                string += '</li>';

                $('#cart').append(string);
            }
        });

        //Inject the total into the DOM
        var string = "";
        string += '<li class="list-group-item active clearfix">';
        string += "TOTAL";
        string += '<span class="label label-success pull-right">' + currencyFormat(total, "$") + '</span>';
        string += '</li>';
        $('#cart').prepend(string);
    }

    // Invoke our main function to build the store
    buildStore();


    // Fun Stuff :)
    /*
    // Call Initial Functions
    $('#products').on('mouseenter','.list-group-item', function(){
        var index = $(this).find('button').val();
        $('#info').show();
        $('#info').text(descriptions[index]);
    });

    $('#products').on('mouseleave', '.list-group-item', function(){
        $('#info').hide();
    });
    */
});


// Here are some JavaScript functions
function currencyFormat(number, symbol)
{
    if(typeof(number)==="number")
    {
        return symbol + commaSeparateNumber(number.toFixed(2));
    }
}

function commaSeparateNumber(val){
    while (/(\d+)(\d{3})/.test(val.toString())){
      val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    }
    return val;
}