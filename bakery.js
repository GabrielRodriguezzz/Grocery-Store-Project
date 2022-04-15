
window.onload = function(){
    if(sessionStorage.getItem('sumValueBagel') !=null){
        var quantity = document.getElementById("totalClicksBagel");
        if(quantity !=null){
            quantity.value = sessionStorage.getItem('sumValueBagel');
        }
    }

    if(sessionStorage.getItem('priceBagel') !=null){
        var quantityPrice = document.getElementById("totalPriceBagel");
        if(quantityPrice !=null){
            quantityPrice.value = sessionStorage.getItem('priceBagel');
        }
    }

    if(sessionStorage.getItem('sumValueBaguette') !=null){
        var quantity = document.getElementById("totalClicksBaguette");
        if(quantity !=null){
            quantity.value = sessionStorage.getItem('sumValueBaguette');
        }
    }

    if(sessionStorage.getItem('priceBaguette') !=null){
        var quantityPrice = document.getElementById("totalPriceBaguette");
        if(quantityPrice !=null){
            quantityPrice.value = sessionStorage.getItem('priceBaguette');
        }
    }

    if(sessionStorage.getItem('sumValueBread') !=null){
        var quantity = document.getElementById("totalClicksBread");
        if(quantity !=null){
            quantity.value = sessionStorage.getItem('sumValueBread');
        }
    }

    if(sessionStorage.getItem('priceBread') !=null){
        var quantityPrice = document.getElementById("totalPriceBread");
        if(quantityPrice !=null){
            quantityPrice.value = sessionStorage.getItem('priceBread');
        }
    }
    
    if(sessionStorage.getItem('sumValueCinnabun') !=null){
        var quantity = document.getElementById("totalClicksCinnabun");
        if(quantity !=null){
            quantity.value = sessionStorage.getItem('sumValueCinnabun');
        }
    }

    if(sessionStorage.getItem('priceCinnabun') !=null){
        var quantityPrice = document.getElementById("totalPriceCinnabun");
        if(quantityPrice !=null){
            quantityPrice.value = sessionStorage.getItem('priceCinnabun');
        }
    }

    if(sessionStorage.getItem('sumValueCroissant') !=null){
        var quantity = document.getElementById("totalClicksCroissant");
        if(quantity !=null){
            quantity.value = sessionStorage.getItem('sumValueCroissant');
        }
    }

    if(sessionStorage.getItem('priceCroissant') !=null){
        var quantityPrice = document.getElementById("totalPriceCroissant");
        if(quantityPrice !=null){
            quantityPrice.value = sessionStorage.getItem('priceCroissant');
        }
    }

    if(sessionStorage.getItem('sumValueEclair') !=null){
        var quantity = document.getElementById("totalClicksEclair");
        if(quantity !=null){
            quantity.value = sessionStorage.getItem('sumValueEclair');
        }
    }

    if(sessionStorage.getItem('priceEclair') !=null){
        var quantityPrice = document.getElementById("totalPriceEclair");
        if(quantityPrice !=null){
            quantityPrice.value = sessionStorage.getItem('priceEclair');
        }
    }

    if(sessionStorage.getItem('sumValueFruitTart') !=null){
        var quantity = document.getElementById("totalClicksFruitTart");
        if(quantity !=null){
            quantity.value = sessionStorage.getItem('sumValueFruitTart');
        }
    }

    if(sessionStorage.getItem('priceFruitTart') !=null){
        var quantityPrice = document.getElementById("totalPriceFruitTart");
        if(quantityPrice !=null){
            quantityPrice.value = sessionStorage.getItem('priceFruitTart');
        }
    }

    if(sessionStorage.getItem('sumValuePainChoco') !=null){
        var quantity = document.getElementById("totalClicksPainChoco");
        if(quantity !=null){
            quantity.value = sessionStorage.getItem('sumValuePainChoco');
        }
    }

    if(sessionStorage.getItem('pricePainChoco') !=null){
        var quantityPrice = document.getElementById("totalPricePainChoco");
        if(quantityPrice !=null){
            quantityPrice.value = sessionStorage.getItem('pricePainChoco');
        }
    }






}

//bagel
function totalClickBagel(click){
    var totalClicks = document.getElementById("totalClicksBagel");
    totalClicks.value = parseInt(totalClicks.value) + click;
    var totalValue = totalClicks.value;
    if(totalValue<1){
        totalClicks.value = 1;
        totalValue = 1;
    }
    sessionStorage.setItem('sumValueBagel',totalValue);

    var price = document.getElementById("totalPriceBagel");
    var totalPrice = (1.15*totalValue).toFixed(2) + '$';

    if(totalValue<1){
        totalPrice = (1.15).toFixed(2) + '$';
    }

    sessionStorage.setItem('priceBagel',totalPrice);
    
    price.value = totalPrice;
    console.log(totalValue);
}

var boolean = true;

function readMoreBagel(){
    if(boolean){
        document.getElementById("MoreDescription").innerHTML = ("Ingredients:"+"<br />"+"Flour,Sugar,Salt,Egg,Olive Oil,Honey,Water");
        boolean = false;
    }
    else{
        document.getElementById("MoreDescription").innerHTML = "";
        boolean = true;
    }
    
}

//baguette

function totalClickBaguette(click){
    var totalClicks = document.getElementById("totalClicksBaguette");
    totalClicks.value = parseInt(totalClicks.value) + click;
    var totalValue = totalClicks.value;
    if(totalValue<1){
        totalClicks.value = 1;
        totalValue = 1;
    }
    sessionStorage.setItem('sumValueBaguette',totalValue);

    var price = document.getElementById("totalPriceBaguette");
    var totalPrice = (2.25*totalValue).toFixed(2) + '$';
    if(totalValue<1){
        totalPrice = (2.25).toFixed(2) + '$';
    }

    sessionStorage.setItem('priceBaguette',totalPrice);
    
    price.value = totalPrice;
}

var boolean = true;

function readMoreBaguette(){
    if(boolean){
        document.getElementById("MoreDescription").innerHTML = ("Ingredients:"+"<br />"+"Flour,Water,Salt,Yeast");
        boolean = false;
    }
    else{
        document.getElementById("MoreDescription").innerHTML = "";
        boolean = true;
    }
    
}

//bread

function totalClickBread(click){
    var totalClicks = document.getElementById("totalClicksBread");
    totalClicks.value = parseInt(totalClicks.value) + click;
    var totalValue = totalClicks.value;
    if(totalValue<1){
        totalClicks.value = 1;
        totalValue = 1;
    }
    sessionStorage.setItem('sumValueBread',totalValue);

    var price = document.getElementById("totalPriceBread");
    var totalPrice = (2.25*totalValue).toFixed(2) + '$';
    if(totalValue<1){
        totalPrice = (2.25).toFixed(2) + '$';
    }

    sessionStorage.setItem('priceBread',totalPrice);
    
    price.value = totalPrice;
}

var boolean = true;

function readMoreBread(){
    if(boolean){
        document.getElementById("MoreDescription").innerHTML = ("Ingredients:"+"<br />"+"Flour,Water,Sugar,Yeast,Olive Oil");
        boolean = false;
    }
    else{
        document.getElementById("MoreDescription").innerHTML = "";
        boolean = true;
    }
    
}

//cinnabun


function totalClickCinnabun(click){
    var totalClicks = document.getElementById("totalClicksCinnabun");
    totalClicks.value = parseInt(totalClicks.value) + click;
    var totalValue = totalClicks.value;
    if(totalValue<1){
        totalClicks.value = 1;
        totalValue = 1;
    }
    sessionStorage.setItem('sumValueCinnabun',totalValue);

    var price = document.getElementById("totalPriceCinnabun");
    var totalPrice = (3.75*totalValue).toFixed(2) + '$';
    if(totalValue<1){
        totalPrice = (3.75).toFixed(2) + '$';
    }

    sessionStorage.setItem('priceCinnabun',totalPrice);
    
    price.value = totalPrice;
}

var boolean = true;

function readMoreCinnabun(){
    if(boolean){
        document.getElementById("MoreDescription").innerHTML = ("Ingredients:"+"<br />"+"Flour,Sugar,Baking Powder,Salt,Butter,Milk,Egg,Cinnamon,BrownSugar,Cream Cheese,Vanilla Extract,Confectioner Sugar");
        boolean = false;
    }
    else{
        document.getElementById("MoreDescription").innerHTML = "";
        boolean = true;
    }
    
}

//croissant


function totalClickCroissant(click){
    var totalClicks = document.getElementById("totalClicksCroissant");
    totalClicks.value = parseInt(totalClicks.value) + click;
    var totalValue = totalClicks.value;
    if(totalValue<1){
        totalClicks.value = 1;
        totalValue = 1;
    }
    sessionStorage.setItem('sumValueCroissant',totalValue);

    var price = document.getElementById("totalPriceCroissant");
    var totalPrice = (1.25*totalValue).toFixed(2) + '$';
    if(totalValue<1){
        totalPrice = (1.25).toFixed(2) + '$';
    }

    sessionStorage.setItem('priceCroissant',totalPrice);
    
    price.value = totalPrice;
}

var boolean = true;

function readMoreCroissant(){
    if(boolean){
        document.getElementById("MoreDescription").innerHTML = ("Ingredients:"+"<br />"+"Flour,Water,Milk,Sugar,Butter,Yeast,Salt,Egg");
        boolean = false;
    }
    else{
        document.getElementById("MoreDescription").innerHTML = "";
        boolean = true;
    }
    
}

//eclair

function totalClickEclair(click){
    var totalClicks = document.getElementById("totalClicksEclair");
    totalClicks.value = parseInt(totalClicks.value) + click;
    var totalValue = totalClicks.value;
    if(totalValue<1){
        totalClicks.value = 1;
        totalValue = 1;
    }
    sessionStorage.setItem('sumValueEclair',totalValue);

    var price = document.getElementById("totalPriceEclair");
    var totalPrice = (1.25*totalValue).toFixed(2) + '$';
    if(totalValue<1){
        totalPrice = (1.25).toFixed(2) + '$';
    }

    sessionStorage.setItem('priceEclair',totalPrice);
    
    price.value = totalPrice;
}

var boolean = true;

function readMoreEclair(){
    if(boolean){
        document.getElementById("MoreDescription").innerHTML = ("Ingredients:"+"<br />"+"Flour,Water,Butter,Milk,Sugar,Salt,Egg,Vanilla Bean,Cornstarch,Chocolate");
        boolean = false;
    }
    else{
        document.getElementById("MoreDescription").innerHTML = "";
        boolean = true;
    }
    
}

//fruittart

function totalClickFruitTart(click){
    var totalClicks = document.getElementById("totalClicksFruitTart");
    totalClicks.value = parseInt(totalClicks.value) + click;
    var totalValue = totalClicks.value;
    if(totalValue<1){
        totalClicks.value = 1;
        totalValue = 1;
    }
    sessionStorage.setItem('sumValueFruitTart',totalValue);

    var price = document.getElementById("totalPriceFruitTart");
    var totalPrice = (24.99*totalValue).toFixed(2) + '$';
    if(totalValue<1){
        totalPrice = (24.99).toFixed(2) + '$';
    }

    sessionStorage.setItem('priceFruitTart',totalPrice);
    
    price.value = totalPrice;
}

var boolean = true;

function readMoreFruitTart(){
    if(boolean){
        document.getElementById("MoreDescription").innerHTML = ("Ingredients:"+"<br />"+"Assorted Fruits,Butter,Sugar,Salt,Flour,Egg,Milk,Cornstarch,Vanilla extract");
        boolean = false;
    }
    else{
        document.getElementById("MoreDescription").innerHTML = "";
        boolean = true;
    }
    
}

//painchoco

function totalClickPainChoco(click){
    var totalClicks = document.getElementById("totalClicksPainChoco");
    totalClicks.value = parseInt(totalClicks.value) + click;
    var totalValue = totalClicks.value;
    if(totalValue<1){
        totalClicks.value = 1;
        totalValue = 1;
    }
    sessionStorage.setItem('sumValuePainChoco',totalValue);

    var price = document.getElementById("totalPricePainChoco");
    var totalPrice = (2.25*totalValue).toFixed(2) + '$';
    if(totalValue<1){
        totalPrice = (2.25).toFixed(2) + '$';
    }

    sessionStorage.setItem('pricePainChoco',totalPrice);
    
    price.value = totalPrice;
}

var boolean = true;

function readMorePainChoco(){
    if(boolean){
        document.getElementById("MoreDescription").innerHTML = ("Ingredients:"+"<br />"+"Chocolate,Flour,Water,Milk,Sugar,Butter,Yeast,Salt,Egg");
        boolean = false;
    }
    else{
        document.getElementById("MoreDescription").innerHTML = "";
        boolean = true;
    }
    
}
