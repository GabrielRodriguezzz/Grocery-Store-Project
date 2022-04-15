window.onload = function(){
    if(sessionStorage.getItem('sumValueBroccoli') !=null){
        var quantity = document.getElementById("totalClicksBroccoli");
        if(quantity !=null){
            quantity.value = sessionStorage.getItem('sumValueBroccoli');
        }
    }

    if(sessionStorage.getItem('priceBroccoli') !=null){
        var quantityPrice = document.getElementById("totalPriceBroccoli");
        if(quantityPrice !=null){
            quantityPrice.value = sessionStorage.getItem('priceBroccoli');
        }
    }

    if(sessionStorage.getItem('sumValueCorn') !=null){
        var quantity = document.getElementById("totalClicksCorn");
        if(quantity !=null){
            quantity.value = sessionStorage.getItem('sumValueCorn');
        }
    }

    if(sessionStorage.getItem('priceCorn') !=null){
        var quantityPrice = document.getElementById("totalPriceCorn");
        if(quantityPrice !=null){
            quantityPrice.value = sessionStorage.getItem('priceCorn');
        }
    }

    if(sessionStorage.getItem('sumValueBanana') !=null){
        var quantity = document.getElementById("totalClicksBanana");
        if(quantity !=null){
            quantity.value = sessionStorage.getItem('sumValueBanana');
        }
    }

    if(sessionStorage.getItem('priceBanana') !=null){
        var quantityPrice = document.getElementById("totalPriceBanana");
        if(quantityPrice !=null){
            quantityPrice.value = sessionStorage.getItem('priceBanana');
        }
    }
    
    if(sessionStorage.getItem('sumValueCucumber') !=null){
        var quantity = document.getElementById("totalClicksCucumber");
        if(quantity !=null){
            quantity.value = sessionStorage.getItem('sumValueCucumber');
        }
    }

    if(sessionStorage.getItem('priceCucumber') !=null){
        var quantityPrice = document.getElementById("totalPriceCucumber");
        if(quantityPrice !=null){
            quantityPrice.value = sessionStorage.getItem('priceCucumber');
        }
    }

    if(sessionStorage.getItem('sumValueGrapes') !=null){
        var quantity = document.getElementById("totalClicksGrapes");
        if(quantity !=null){
            quantity.value = sessionStorage.getItem('sumValueGrapes');
        }
    }

    if(sessionStorage.getItem('priceGrapes') !=null){
        var quantityPrice = document.getElementById("totalPriceGrapes");
        if(quantityPrice !=null){
            quantityPrice.value = sessionStorage.getItem('priceGrapes');
        }
    }

    if(sessionStorage.getItem('sumValueHoneycrispApple') !=null){
        var quantity = document.getElementById("totalClicksHoneycrispApple");
        if(quantity !=null){
            quantity.value = sessionStorage.getItem('sumValueHoneycrispApple');
        }
    }

    if(sessionStorage.getItem('priceHoneycrispApple') !=null){
        var quantityPrice = document.getElementById("totalPriceEHoneycrispApple");
        if(quantityPrice !=null){
            quantityPrice.value = sessionStorage.getItem('priceEHoneycrispApple');
        }
    }

    if(sessionStorage.getItem('sumValueKiwi') !=null){
        var quantity = document.getElementById("totalClicksKiwi");
        if(quantity !=null){
            quantity.value = sessionStorage.getItem('sumValueKiwi');
        }
    }

    if(sessionStorage.getItem('priceFruitKiwi') !=null){
        var quantityPrice = document.getElementById("totalPriceFruitKiwi");
        if(quantityPrice !=null){
            quantityPrice.value = sessionStorage.getItem('priceFruitKiwi');
        }
    }

    if(sessionStorage.getItem('sumValueSweetpotato') !=null){
        var quantity = document.getElementById("totalClicksSweetpotato");
        if(quantity !=null){
            quantity.value = sessionStorage.getItem('sumValueSweetpotato');
        }
    }

    if(sessionStorage.getItem('priceSweetpotato') !=null){
        var quantityPrice = document.getElementById("totalPriceSweetpotato");
        if(quantityPrice !=null){
            quantityPrice.value = sessionStorage.getItem('priceSweetpotato');
        }
    }

    if(sessionStorage.getItem('sumValueTomato') !=null){
        var quantity = document.getElementById("totalClicksTomato");
        if(quantity !=null){
            quantity.value = sessionStorage.getItem('sumValueTomato');
        }
    }

    if(sessionStorage.getItem('priceTomato') !=null){
        var quantityPrice = document.getElementById("totalPriceTomato");
        if(quantityPrice !=null){
            quantityPrice.value = sessionStorage.getItem('priceTomato');
        }
    }

    if(sessionStorage.getItem('sumValueWatermelon') !=null){
        var quantity = document.getElementById("totalClicksWatermelon");
        if(quantity !=null){
            quantity.value = sessionStorage.getItem('sumValueWatermelon');
        }
    }

    if(sessionStorage.getItem('priceWatermelon') !=null){
        var quantityPrice = document.getElementById("totalPriceWatermelon");
        if(quantityPrice !=null){
            quantityPrice.value = sessionStorage.getItem('priceWatermelon');
        }
    }
}




//broccoli
function totalClickBroccoli(click){
    var totalClicks = document.getElementById("totalClicksBroccoli");
    totalClicks.value = parseInt(totalClicks.value) + click;
    var totalValue = totalClicks.value;
    if(totalValue<1){
        totalClicks.value = 1;
        totalValue = 1;
    }
    sessionStorage.setItem('sumValueBroccoli',totalValue);

    var price = document.getElementById("totalPriceBroccoli");
    var totalPrice = (2.97*totalValue).toFixed(2) + '$';

    if(totalValue<1){
        totalPrice = (2.97).toFixed(2) + '$';
    }

    sessionStorage.setItem('priceBroccoli',totalPrice);
    
    price.value = totalPrice;
    console.log(totalValue);
}

var boolean = true;

function readMoreBroccoli(){
    if(boolean){
        document.getElementById("MoreDescription").innerHTML = ("Sold in singles (Product of Canada)");
        boolean = false;
    }
    else{
        document.getElementById("MoreDescription").innerHTML = "";
        boolean = true;
    }
    
}

//corn

function totalClickCorn(click){
    var totalClicks = document.getElementById("totalClicksCorn");
    totalClicks.value = parseInt(totalClicks.value) + click;
    var totalValue = totalClicks.value;
    if(totalValue<1){
        totalClicks.value = 1;
        totalValue = 1;
    }
    sessionStorage.setItem('sumValueCorn',totalValue);

    var price = document.getElementById("totalPriceCorn");
    var totalPrice = (1.49*totalValue).toFixed(2) + '$';
    if(totalValue<1){
        totalPrice = (1.49).toFixed(2) + '$';
    }

    sessionStorage.setItem('priceCorn',totalPrice);
    
    price.value = totalPrice;
}

var boolean = true;

function readMoreCorn(){
    if(boolean){
        document.getElementById("MoreDescription").innerHTML = ("Sold in singles (Product of Québec)");
        boolean = false;
    }
    else{
        document.getElementById("MoreDescription").innerHTML = "";
        boolean = true;
    }
    
}

//banana

function totalClickBanana(click){
    var totalClicks = document.getElementById("totalClicksBanana");
    totalClicks.value = parseInt(totalClicks.value) + click;
    var totalValue = totalClicks.value;
    if(totalValue<1){
        totalClicks.value = 1;
        totalValue = 1;
    }
    sessionStorage.setItem('sumValueBanana',totalValue);

    var price = document.getElementById("totalPriceBanana");
    var totalPrice = (0.35*totalValue).toFixed(2) + '$';
    if(totalValue<1){
        totalPrice = (0.35).toFixed(2) + '$';
    }

    sessionStorage.setItem('priceBanana',totalPrice);
    
    price.value = totalPrice;
}

var boolean = true;

function readMoreBanana(){
    if(boolean){
        document.getElementById("MoreDescription").innerHTML = ("Sold in singles (Product of Philipines)");
        boolean = false;
    }
    else{
        document.getElementById("MoreDescription").innerHTML = "";
        boolean = true;
    }
    
}

//cucumber

function totalClickCucumber(click){
    var totalClicks = document.getElementById("totalClicksCucumber");
    totalClicks.value = parseInt(totalClicks.value) + click;
    var totalValue = totalClicks.value;
    if(totalValue<1){
        totalClicks.value = 1;
        totalValue = 1;
    }
    sessionStorage.setItem('sumValueCucumber',totalValue);

    var price = document.getElementById("totalPriceCucumber");
    var totalPrice = (1.99*totalValue).toFixed(2) + '$';
    if(totalValue<1){
        totalPrice = (1.99).toFixed(2) + '$';
    }

    sessionStorage.setItem('priceCucumber',totalPrice);
    
    price.value = totalPrice;
}

var boolean = true;

function readMoreCucumber(){
    if(boolean){
        document.getElementById("MoreDescription").innerHTML = ("Sold in singles (Product of Canada)");
        boolean = false;
    }
    else{
        document.getElementById("MoreDescription").innerHTML = "";
        boolean = true;
    }
    
}

//grapes

function totalClickGrapes(click){
    var totalClicks = document.getElementById("totalClicksGrapes");
    totalClicks.value = parseInt(totalClicks.value) + click;
    var totalValue = totalClicks.value;
    if(totalValue<1){
        totalClicks.value = 1;
        totalValue = 1;
    }
    sessionStorage.setItem('sumValueGrapes',totalValue);

    var price = document.getElementById("totalPriceGrapes");
    var totalPrice = (3.45*totalValue).toFixed(2) + '$';
    if(totalValue<1){
        totalPrice = (3.45).toFixed(2) + '$';
    }

    sessionStorage.setItem('priceGrapes',totalPrice);
    
    price.value = totalPrice;
}

var boolean = true;

function readMoreGrapes(){
    if(boolean){
        document.getElementById("MoreDescription").innerHTML = ("Sold in bags (Product of Chile)");
        boolean = false;
    }
    else{
        document.getElementById("MoreDescription").innerHTML = "";
        boolean = true;
    }
    
}

//honeycrispApple

function totalClickHoneycrispApple(click){
    var totalClicks = document.getElementById("totalClicksHoneycrispApple");
    totalClicks.value = parseInt(totalClicks.value) + click;
    var totalValue = totalClicks.value;
    if(totalValue<1){
        totalClicks.value = 1;
        totalValue = 1;
    }
    sessionStorage.setItem('sumValueHoneycrispApple',totalValue);

    var price = document.getElementById("totalPriceHoneycrispApple");
    var totalPrice = (1.75*totalValue).toFixed(2) + '$';
    if(totalValue<1){
        totalPrice = (1.75).toFixed(2) + '$';
    }

    sessionStorage.setItem('priceHoneycrispApple',totalPrice);
    
    price.value = totalPrice;
}

var boolean = true;

function readMoreHoneycrispApple(){
    if(boolean){
        document.getElementById("MoreDescription").innerHTML = ("Sold in singles (Product of Québec)");
        boolean = false;
    }
    else{
        document.getElementById("MoreDescription").innerHTML = "";
        boolean = true;
    }
    
}

//kiwi

function totalClickKiwi(click){
    var totalClicks = document.getElementById("totalClicksKiwi");
    totalClicks.value = parseInt(totalClicks.value) + click;
    var totalValue = totalClicks.value;
    if(totalValue<1){
        totalClicks.value = 1;
        totalValue = 1;
    }
    sessionStorage.setItem('sumValueKiwi',totalValue);

    var price = document.getElementById("totalPriceKiwi");
    var totalPrice = (0.95*totalValue).toFixed(2) + '$';
    if(totalValue<1){
        totalPrice = (0.95).toFixed(2) + '$';
    }

    sessionStorage.setItem('priceFruitKiwi',totalPrice);
    
    price.value = totalPrice;
}

var boolean = true;

function readMoreFruitKiwi(){
    if(boolean){
        document.getElementById("MoreDescription").innerHTML = ("Sold in singles (Product of New Zealand");
        boolean = false;
    }
    else{
        document.getElementById("MoreDescription").innerHTML = "";
        boolean = true;
    }
    
}

//sweetpotato

function totalClickSweetpotato(click){
    var totalClicks = document.getElementById("totalClicksSweetpotato");
    totalClicks.value = parseInt(totalClicks.value) + click;
    var totalValue = totalClicks.value;
    if(totalValue<1){
        totalClicks.value = 1;
        totalValue = 1;
    }
    sessionStorage.setItem('sumValueSweetpotato',totalValue);

    var price = document.getElementById("totalPriceSweetpotato");
    var totalPrice = (2.05*totalValue).toFixed(2) + '$';
    if(totalValue<1){
        totalPrice = (2.05).toFixed(2) + '$';
    }

    sessionStorage.setItem('priceSweetpotato',totalPrice);
    
    price.value = totalPrice;
}

var boolean = true;

function readMoreSweetpotato(){
    if(boolean){
        document.getElementById("MoreDescription").innerHTML = ("Sold in singles (Product of United States)");
        boolean = false;
    }
    else{
        document.getElementById("MoreDescription").innerHTML = "";
        boolean = true;
    }
    
}

//tomato
function totalClickTomato(click){
    var totalClicks = document.getElementById("totalClicksTomato");
    totalClicks.value = parseInt(totalClicks.value) + click;
    var totalValue = totalClicks.value;
    if(totalValue<1){
        totalClicks.value = 1;
        totalValue = 1;
    }
    sessionStorage.setItem('sumValueTomato',totalValue);

    var price = document.getElementById("totalPriceTomato");
    var totalPrice = (2.15*totalValue).toFixed(2) + '$';
    if(totalValue<1){
        totalPrice = (2.15).toFixed(2) + '$';
    }

    sessionStorage.setItem('priceTomato',totalPrice);
    
    price.value = totalPrice;
}

var boolean = true;

function readMoreTomato(){
    if(boolean){
        document.getElementById("MoreDescription").innerHTML = ("Sold in singles (Product of Canada)");
        boolean = false;
    }
    else{
        document.getElementById("MoreDescription").innerHTML = "";
        boolean = true;
    }
    
}

//watermelon

function totalClickWatermelon(click){
    var totalClicks = document.getElementById("totalClicksWatermelon");
    totalClicks.value = parseInt(totalClicks.value) + click;
    var totalValue = totalClicks.value;
    if(totalValue<1){
        totalClicks.value = 1;
        totalValue = 1;
    }
    sessionStorage.setItem('sumValueWatermelon',totalValue);

    var price = document.getElementById("totalPriceWatermelon");
    var totalPrice = (7.99*totalValue).toFixed(2) + '$';
    if(totalValue<1){
        totalPrice = (7.99).toFixed(2) + '$';
    }

    sessionStorage.setItem('priceWatermelon',totalPrice);
    
    price.value = totalPrice;
}

var boolean = true;

function readMoreWatermelon(){
    if(boolean){
        document.getElementById("MoreDescription").innerHTML = ("Sold in singles (Product of Québec)");
        boolean = false;
    }
    else{
        document.getElementById("MoreDescription").innerHTML = "";
        boolean = true;
    }
    
}