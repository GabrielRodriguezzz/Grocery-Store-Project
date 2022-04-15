window.onload = function(){
    if(sessionStorage.getItem('sumValueBacon') !=null){
        var quantity = document.getElementById("totalClicksBacon");
        if(quantity !=null){
            quantity.value = sessionStorage.getItem('sumValueBacon');
        }
    }

    if(sessionStorage.getItem('priceBacon') !=null){
        var quantityPrice = document.getElementById("totalPriceBacon");
        if(quantityPrice !=null){
            quantityPrice.value = sessionStorage.getItem('priceBacon');
        }
    }

    if(sessionStorage.getItem('sumValueChicken') !=null){
        var quantity = document.getElementById("totalClicksChicken");
        if(quantity !=null){
            quantity.value = sessionStorage.getItem('sumValueChicken');
        }
    }

    if(sessionStorage.getItem('priceChicken') !=null){
        var quantityPrice = document.getElementById("totalPriceChicken");
        if(quantityPrice !=null){
            quantityPrice.value = sessionStorage.getItem('priceChicken');
        }
    }

    if(sessionStorage.getItem('sumValueHam') !=null){
        var quantity = document.getElementById("totalClicksHam");
        if(quantity !=null){
            quantity.value = sessionStorage.getItem('sumValueHam');
        }
    }

    if(sessionStorage.getItem('priceHam') !=null){
        var quantityPrice = document.getElementById("totalPriceHam");
        if(quantityPrice !=null){
            quantityPrice.value = sessionStorage.getItem('priceHam');
        }
    }
    
    if(sessionStorage.getItem('sumValueLamb') !=null){
        var quantity = document.getElementById("totalClicksLamb");
        if(quantity !=null){
            quantity.value = sessionStorage.getItem('sumValueLamb');
        }
    }

    if(sessionStorage.getItem('priceLamb') !=null){
        var quantityPrice = document.getElementById("totalPriceLamb");
        if(quantityPrice !=null){
            quantityPrice.value = sessionStorage.getItem('priceLamb');
        }
    }

    if(sessionStorage.getItem('sumValuePork') !=null){
        var quantity = document.getElementById("totalClicksPork");
        if(quantity !=null){
            quantity.value = sessionStorage.getItem('sumValuePork');
        }
    }

    if(sessionStorage.getItem('pricePork') !=null){
        var quantityPrice = document.getElementById("totalPricePork");
        if(quantityPrice !=null){
            quantityPrice.value = sessionStorage.getItem('pricePork');
        }
    }

    if(sessionStorage.getItem('sumValueSausage') !=null){
        var quantity = document.getElementById("totalClicksSausage");
        if(quantity !=null){
            quantity.value = sessionStorage.getItem('sumValueSausage');
        }
    }

    if(sessionStorage.getItem('priceSausage') !=null){
        var quantityPrice = document.getElementById("totalPriceSausage");
        if(quantityPrice !=null){
            quantityPrice.value = sessionStorage.getItem('priceSausage');
        }
    }

    if(sessionStorage.getItem('sumValueShrimp') !=null){
        var quantity = document.getElementById("totalClicksShrimp");
        if(quantity !=null){
            quantity.value = sessionStorage.getItem('sumValueShrimp');
        }
    }

    if(sessionStorage.getItem('priceShrimp') !=null){
        var quantityPrice = document.getElementById("totalPriceShrimp");
        if(quantityPrice !=null){
            quantityPrice.value = sessionStorage.getItem('priceShrimp');
        }
    }

    if(sessionStorage.getItem('sumValueSteak') !=null){
        var quantity = document.getElementById("totalClicksSteak");
        if(quantity !=null){
            quantity.value = sessionStorage.getItem('sumValueSteak');
        }
    }

    if(sessionStorage.getItem('priceSteak') !=null){
        var quantityPrice = document.getElementById("totalPriceSteak");
        if(quantityPrice !=null){
            quantityPrice.value = sessionStorage.getItem('priceSteak');
        }
    }






}

//bacon
function totalClickBacon(click){
    var totalClicks = document.getElementById("totalClicksBacon");
    totalClicks.value = parseInt(totalClicks.value) + click;
    var totalValue = totalClicks.value;
    if(totalValue<1){
        totalClicks.value = 1;
        totalValue = 1;
    }
    sessionStorage.setItem('sumValueBacon',totalValue);

    var price = document.getElementById("totalPriceBacon");
    var totalPrice = (1.15*totalValue).toFixed(2) + '$';

    if(totalValue<1){
        totalPrice = (1.15).toFixed(2) + '$';
    }

    sessionStorage.setItem('priceBacon',totalPrice);
    
    price.value = totalPrice;
    console.log(totalValue);
}

var boolean = true;

function readMoreBacon(){
    if(boolean){
        document.getElementById("MoreDescription").innerHTML = ("Information:"+"<br />"+"Naturally smoked Canadien bacon. (100 g)");
        boolean = false;
    }
    else{
        document.getElementById("MoreDescription").innerHTML = "";
        boolean = true;
    }
    
}

//chicken

function totalClickChicken(click){
    var totalClicks = document.getElementById("totalClicksChicken");
    totalClicks.value = parseInt(totalClicks.value) + click;
    var totalValue = totalClicks.value;
    if(totalValue<1){
        totalClicks.value = 1;
        totalValue = 1;
    }
    sessionStorage.setItem('sumValueChicken',totalValue);

    var price = document.getElementById("totalPriceChicken");
    var totalPrice = (6.99*totalValue).toFixed(2) + '$';
    if(totalValue<1){
        totalPrice = (6.99).toFixed(2) + '$';
    }

    sessionStorage.setItem('priceChicken',totalPrice);
    
    price.value = totalPrice;
}

var boolean = true;

function readMoreChicken(){
    if(boolean){
        document.getElementById("MoreDescription").innerHTML = ("Information:"+"<br />"+"Family size fresh chicken legs. (6 legs)");
        boolean = false;
    }
    else{
        document.getElementById("MoreDescription").innerHTML = "";
        boolean = true;
    }
    
}

//ham

function totalClickHam(click){
    var totalClicks = document.getElementById("totalClicksHam");
    totalClicks.value = parseInt(totalClicks.value) + click;
    var totalValue = totalClicks.value;
    if(totalValue<1){
        totalClicks.value = 1;
        totalValue = 1;
    }
    sessionStorage.setItem('sumValueHam',totalValue);

    var price = document.getElementById("totalPriceHam");
    var totalPrice = (3.49*totalValue).toFixed(2) + '$';
    if(totalValue<1){
        totalPrice = (3.49).toFixed(2) + '$';
    }

    sessionStorage.setItem('priceHam',totalPrice);
    
    price.value = totalPrice;
}

var boolean = true;

function readMoreHam(){
    if(boolean){
        document.getElementById("MoreDescription").innerHTML = ("Information:"+"<br />"+"Old fashioned smoked ham. (100 g)");
        boolean = false;
    }
    else{
        document.getElementById("MoreDescription").innerHTML = "";
        boolean = true;
    }
    
}

//lamb


function totalClickLamb(click){
    var totalClicks = document.getElementById("totalClicksLamb");
    totalClicks.value = parseInt(totalClicks.value) + click;
    var totalValue = totalClicks.value;
    if(totalValue<1){
        totalClicks.value = 1;
        totalValue = 1;
    }
    sessionStorage.setItem('sumValueLamb',totalValue);

    var price = document.getElementById("totalPriceLamb");
    var totalPrice = (15.00*totalValue).toFixed(2) + '$';
    if(totalValue<1){
        totalPrice = (15.00).toFixed(2) + '$';
    }

    sessionStorage.setItem('priceLamb',totalPrice);
    
    price.value = totalPrice;
}

var boolean = true;

function readMoreLamb(){
    if(boolean){
        document.getElementById("MoreDescription").innerHTML = ("Information: "+"<br />"+"Frenched lamb rack. (400 g/rack)");
        boolean = false;
    }
    else{
        document.getElementById("MoreDescription").innerHTML = "";
        boolean = true;
    }
    
}

//pork


function totalClickPork(click){
    var totalClicks = document.getElementById("totalClicksPork");
    totalClicks.value = parseInt(totalClicks.value) + click;
    var totalValue = totalClicks.value;
    if(totalValue<1){
        totalClicks.value = 1;
        totalValue = 1;
    }
    sessionStorage.setItem('sumValuePork',totalValue);

    var price = document.getElementById("totalPricePork");
    var totalPrice = (4.99*totalValue).toFixed(2) + '$';
    if(totalValue<1){
        totalPrice = (4.99).toFixed(2) + '$';
    }

    sessionStorage.setItem('pricePork',totalPrice);
    
    price.value = totalPrice;
}

var boolean = true;

function readMorePork(){
    if(boolean){
        document.getElementById("MoreDescription").innerHTML = ("Information: "+"<br />"+"Boneless pork loin center chops. (650g)");
        boolean = false;
    }
    else{
        document.getElementById("MoreDescription").innerHTML = "";
        boolean = true;
    }
    
}

//sausage

function totalClickSausage(click){
    var totalClicks = document.getElementById("totalClicksSausage");
    totalClicks.value = parseInt(totalClicks.value) + click;
    var totalValue = totalClicks.value;
    if(totalValue<1){
        totalClicks.value = 1;
        totalValue = 1;
    }
    sessionStorage.setItem('sumValueSausage',totalValue);

    var price = document.getElementById("totalPriceSausage");
    var totalPrice = (1.49*totalValue).toFixed(2) + '$';
    if(totalValue<1){
        totalPrice = (1.49).toFixed(2) + '$';
    }

    sessionStorage.setItem('priceSausage',totalPrice);
    
    price.value = totalPrice;
}

var boolean = true;

function readMoreSausage(){
    if(boolean){
        document.getElementById("MoreDescription").innerHTML = ("Information: "+"<br />"+"Tosacane sausage. (125 g)");
        boolean = false;
    }
    else{
        document.getElementById("MoreDescription").innerHTML = "";
        boolean = true;
    }
    
}

//shrimp

function totalClickShrimp(click){
    var totalClicks = document.getElementById("totalClicksShrimp");
    totalClicks.value = parseInt(totalClicks.value) + click;
    var totalValue = totalClicks.value;
    if(totalValue<1){
        totalClicks.value = 1;
        totalValue = 1;
    }
    sessionStorage.setItem('sumValueShrimp',totalValue);

    var price = document.getElementById("totalPriceShrimp");
    var totalPrice = (6.49*totalValue).toFixed(2) + '$';
    if(totalValue<1){
        totalPrice = (6.49).toFixed(2) + '$';
    }

    sessionStorage.setItem('priceShrimp',totalPrice);
    
    price.value = totalPrice;
}

var boolean = true;

function readMoreShrimp(){
    if(boolean){
        document.getElementById("MoreDescription").innerHTML = ("Information: "+"<br />"+"Wild uncooked shrimps. (100 g)");
        boolean = false;
    }
    else{
        document.getElementById("MoreDescription").innerHTML = "";
        boolean = true;
    }
    
}

//steak

function totalClickSteak(click){
    var totalClicks = document.getElementById("totalClicksSteak");
    totalClicks.value = parseInt(totalClicks.value) + click;
    var totalValue = totalClicks.value;
    if(totalValue<1){
        totalClicks.value = 1;
        totalValue = 1;
    }
    sessionStorage.setItem('sumValueSteak',totalValue);

    var price = document.getElementById("totalPriceSteak");
    var totalPrice = (24.49*totalValue).toFixed(2) + '$';
    if(totalValue<1){
        totalPrice = (24.49).toFixed(2) + '$';
    }

    sessionStorage.setItem('priceSteak',totalPrice);
    
    price.value = totalPrice;
}

var boolean = true;

function readMoreSteak(){
    if(boolean){
        document.getElementById("MoreDescription").innerHTML = ("Information: "+"<br />"+"Wagyu beef. (400 g)");
        boolean = false;
    }
    else{
        document.getElementById("MoreDescription").innerHTML = "";
        boolean = true;
    }
    
}
