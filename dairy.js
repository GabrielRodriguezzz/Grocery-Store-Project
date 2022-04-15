window.onload = function(){
    if(sessionStorage.getItem('sumValueCheddar') !=null){
        var quantity = document.getElementById("totalClicksCheddar");
        if(quantity !=null){
            quantity.value = sessionStorage.getItem('sumValueCheddar');
        }
    }

    if(sessionStorage.getItem('priceCheddar') !=null){
        var quantityPrice = document.getElementById("totalPriceCheddar");
        if(quantityPrice !=null){
            quantityPrice.value = sessionStorage.getItem('priceCheddar');
        }
    }

    if(sessionStorage.getItem('sumValueEggs') !=null){
        var quantity = document.getElementById("totalClicksEggs");
        if(quantity !=null){
            quantity.value = sessionStorage.getItem('sumValueEggs');
        }
    }

    if(sessionStorage.getItem('priceEggs') !=null){
        var quantityPrice = document.getElementById("totalPriceEggs");
        if(quantityPrice !=null){
            quantityPrice.value = sessionStorage.getItem('priceEggs');
        }
    }

    if(sessionStorage.getItem('sumValueMilk') !=null){
        var quantity = document.getElementById("totalClicksMilk");
        if(quantity !=null){
            quantity.value = sessionStorage.getItem('sumValueMilk');
        }
    }

    if(sessionStorage.getItem('priceMilk') !=null){
        var quantityPrice = document.getElementById("totalPriceMilk");
        if(quantityPrice !=null){
            quantityPrice.value = sessionStorage.getItem('priceMilk');
        }
    }
    
    if(sessionStorage.getItem('sumValueParmesan') !=null){
        var quantity = document.getElementById("totalClicksParmesan");
        if(quantity !=null){
            quantity.value = sessionStorage.getItem('sumValueParmesan');
        }
    }

    if(sessionStorage.getItem('priceParmesan') !=null){
        var quantityPrice = document.getElementById("totalPriceParmesan");
        if(quantityPrice !=null){
            quantityPrice.value = sessionStorage.getItem('priceParmesan');
        }
    }

    if(sessionStorage.getItem('sumValueYogurt') !=null){
        var quantity = document.getElementById("totalClicksYogurt");
        if(quantity !=null){
            quantity.value = sessionStorage.getItem('sumValueYogurt');
        }
    }

    if(sessionStorage.getItem('priceYogurt') !=null){
        var quantityPrice = document.getElementById("totalPriceYogurt");
        if(quantityPrice !=null){
            quantityPrice.value = sessionStorage.getItem('priceYogurt');
        }
    }

    






}

//Cheddar
function totalClickCheddar(click){
    var totalClicks = document.getElementById("totalClicksCheddar");
    totalClicks.value = parseInt(totalClicks.value) + click;
    var totalValue = totalClicks.value;
    if(totalValue<1){
        totalClicks.value = 1;
        totalValue = 1;
    }
    sessionStorage.setItem('sumValueCheddar',totalValue);

    var price = document.getElementById("totalPriceCheddar");
    var totalPrice = (14.99*totalValue).toFixed(2) + '$';

    if(totalValue<1){
        totalPrice = (14.99).toFixed(2) + '$';
    }

    sessionStorage.setItem('priceCheddar',totalPrice);
    
    price.value = totalPrice;
    console.log(totalValue);
}

var boolean = true;

function readMoreCheddar(){
    if(boolean){
        document.getElementById("MoreDescription").innerHTML = ("Insert"+"<br />"+"Description");
        boolean = false;
    }
    else{
        document.getElementById("MoreDescription").innerHTML = "";
        boolean = true;
    }
    
}

//Eggs

function totalClickEggs(click){
    var totalClicks = document.getElementById("totalClicksEggs");
    totalClicks.value = parseInt(totalClicks.value) + click;
    var totalValue = totalClicks.value;
    if(totalValue<1){
        totalClicks.value = 1;
        totalValue = 1;
    }
    sessionStorage.setItem('sumValueEggs',totalValue);

    var price = document.getElementById("totalPriceEggs");
    var totalPrice = (3.99*totalValue).toFixed(2) + '$';
    if(totalValue<1){
        totalPrice = (3.99).toFixed(2) + '$';
    }

    sessionStorage.setItem('priceEggs',totalPrice);
    
    price.value = totalPrice;
}

var boolean = true;

function readMoreEggs(){
    if(boolean){
        document.getElementById("MoreDescription").innerHTML = ("Insert"+"<br />"+"Description");
        boolean = false;
    }
    else{
        document.getElementById("MoreDescription").innerHTML = "";
        boolean = true;
    }
    
}

//Milk

function totalClickMilk(click){
    var totalClicks = document.getElementById("totalClicksMilk");
    totalClicks.value = parseInt(totalClicks.value) + click;
    var totalValue = totalClicks.value;
    if(totalValue<1){
        totalClicks.value = 1;
        totalValue = 1;
    }
    sessionStorage.setItem('sumValueMilk',totalValue);

    var price = document.getElementById("totalPriceMilk");
    var totalPrice = (2.99*totalValue).toFixed(2) + '$';
    if(totalValue<1){
        totalPrice = (2.99).toFixed(2) + '$';
    }

    sessionStorage.setItem('priceMilk',totalPrice);
    
    price.value = totalPrice;
}

var boolean = true;

function readMoreMilk(){
    if(boolean){
        document.getElementById("MoreDescription").innerHTML = ("Insert"+"<br />"+"Description");
        boolean = false;
    }
    else{
        document.getElementById("MoreDescription").innerHTML = "";
        boolean = true;
    }
    
}

//Parmesan


function totalClickParmesan(click){
    var totalClicks = document.getElementById("totalClicksParmesan");
    totalClicks.value = parseInt(totalClicks.value) + click;
    var totalValue = totalClicks.value;
    if(totalValue<1){
        totalClicks.value = 1;
        totalValue = 1;
    }
    sessionStorage.setItem('sumValueParmesan',totalValue);

    var price = document.getElementById("totalPriceParmesan");
    var totalPrice = (12.99*totalValue).toFixed(2) + '$';
    if(totalValue<1){
        totalPrice = (12.99).toFixed(2) + '$';
    }

    sessionStorage.setItem('priceParmesan',totalPrice);
    
    price.value = totalPrice;
}

var boolean = true;

function readMoreParmesan(){
    if(boolean){
        document.getElementById("MoreDescription").innerHTML = ("Insert"+"<br />"+"Description");
        boolean = false;
    }
    else{
        document.getElementById("MoreDescription").innerHTML = "";
        boolean = true;
    }
    
}

//Yogurt


function totalClickYogurt(click){
    var totalClicks = document.getElementById("totalClicksYogurt");
    totalClicks.value = parseInt(totalClicks.value) + click;
    var totalValue = totalClicks.value;
    if(totalValue<1){
        totalClicks.value = 1;
        totalValue = 1;
    }
    sessionStorage.setItem('sumValueYogurt',totalValue);

    var price = document.getElementById("totalPriceYogurt");
    var totalPrice = (5.99*totalValue).toFixed(2) + '$';
    if(totalValue<1){
        totalPrice = (5.99).toFixed(2) + '$';
    }

    sessionStorage.setItem('priceYogurt',totalPrice);
    
    price.value = totalPrice;
}

var boolean = true;

function readMoreYogurt(){
    if(boolean){
        document.getElementById("MoreDescription").innerHTML = ("Insert"+"<br />"+"Description");
        boolean = false;
    }
    else{
        document.getElementById("MoreDescription").innerHTML = "";
        boolean = true;
    }
    
}
