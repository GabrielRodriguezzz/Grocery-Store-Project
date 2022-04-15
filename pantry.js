window.onload = function () {
    if (sessionStorage.getItem("sumValueFlour") != null) {
      var quantity = document.getElementById("totalClicksFlour");
      if (quantity != null) {
        quantity.value = sessionStorage.getItem("sumValueFlour");
      }
    }
  
    if (sessionStorage.getItem("priceFlour") != null) {
      var quantityPrice = document.getElementById("totalPriceFlour");
      if (quantityPrice != null) {
        quantityPrice.value = sessionStorage.getItem("priceFlour");
      }
    }
  
    if (sessionStorage.getItem("sumValueCoffee") != null) {
      var quantity = document.getElementById("totalClicksCoffee");
      if (quantity != null) {
        quantity.value = sessionStorage.getItem("sumValueCoffee");
      }
    }
  
    if (sessionStorage.getItem("priceCoffee") != null) {
      var quantityPrice = document.getElementById("totalPriceCoffee");
      if (quantityPrice != null) {
        quantityPrice.value = sessionStorage.getItem("priceCoffee");
      }
    }
  
    if (sessionStorage.getItem("sumValueOatmeal") != null) {
      var quantity = document.getElementById("totalClicksOatmeal");
      if (quantity != null) {
        quantity.value = sessionStorage.getItem("sumValueOatmeal");
      }
    }
  
    if (sessionStorage.getItem("priceOatmeal") != null) {
      var quantityPrice = document.getElementById("totalPriceOatmeal");
      if (quantityPrice != null) {
        quantityPrice.value = sessionStorage.getItem("priceOatmeal");
      }
    }
  
    if (sessionStorage.getItem("sumValueOliveOil") != null) {
      var quantity = document.getElementById("totalClicksOliveOil");
      if (quantity != null) {
        quantity.value = sessionStorage.getItem("sumValueLOliveOil");
      }
    }
  
    if (sessionStorage.getItem("priceOliveOil") != null) {
      var quantityPrice = document.getElementById("totalPriceOliveOil");
      if (quantityPrice != null) {
        quantityPrice.value = sessionStorage.getItem("priceOliveOil");
      }
    }
  
    if (sessionStorage.getItem("sumValueRice") != null) {
      var quantity = document.getElementById("totalClicksRice");
      if (quantity != null) {
        quantity.value = sessionStorage.getItem("sumValueRice");
      }
    }
  
    if (sessionStorage.getItem("priceRice") != null) {
      var quantityPrice = document.getElementById("totalPriceRice");
      if (quantityPrice != null) {
        quantityPrice.value = sessionStorage.getItem("priceRice");
      }
    }
  
    if (sessionStorage.getItem("sumValueSugar") != null) {
      var quantity = document.getElementById("totalClicksSugar");
      if (quantity != null) {
        quantity.value = sessionStorage.getItem("sumValueSugar");
      }
    }
  
    if (sessionStorage.getItem("priceSugar") != null) {
      var quantityPrice = document.getElementById("totalPriceSugar");
      if (quantityPrice != null) {
        quantityPrice.value = sessionStorage.getItem("priceSugar");
      }
    }
  
    if (sessionStorage.getItem("sumValueTomatoPaste") != null) {
      var quantity = document.getElementById("totalClicksTomatoPaste");
      if (quantity != null) {
        quantity.value = sessionStorage.getItem("sumValueTomatoPaste");
      }
    }
  
    if (sessionStorage.getItem("priceTomatoPaste") != null) {
      var quantityPrice = document.getElementById("totalPriceTomatoPaste");
      if (quantityPrice != null) {
        quantityPrice.value = sessionStorage.getItem("priceTomatoPaste");
      }
    }
  
    if (sessionStorage.getItem("sumValuePasta") != null) {
      var quantity = document.getElementById("totalClicksPasta");
      if (quantity != null) {
        quantity.value = sessionStorage.getItem("sumValuePasta");
      }
    }
  
    if (sessionStorage.getItem("pricePasta") != null) {
      var quantityPrice = document.getElementById("totalPricePasta");
      if (quantityPrice != null) {
        quantityPrice.value = sessionStorage.getItem("pricePasta");
      }
    }
  };
  
  //Flour
  function totalClickFlour(click) {
    var totalClicks = document.getElementById("totalClicksFlour");
    totalClicks.value = parseInt(totalClicks.value) + click;
    var totalValue = totalClicks.value;
    if (totalValue < 1) {
      totalClicks.value = 1;
      totalValue = 1;
    }
    sessionStorage.setItem("sumValueFlour", totalValue);
  
    var price = document.getElementById("totalPriceFlour");
    var totalPrice = (8.99 * totalValue).toFixed(2) + "$";
  
    if (totalValue < 1) {
      totalPrice = (8.99).toFixed(2) + "$";
    }
  
    sessionStorage.setItem("priceFlour", totalPrice);
  
    price.value = totalPrice;
    console.log(totalValue);
  }
  
  var boolean = true;
  
  function readMoreFlour() {
    if (boolean) {
      document.getElementById("MoreDescription").innerHTML =
        "Information:" + "<br />" + " Whole wheat flour bag. (1.00 kg)";
      boolean = false;
    } else {
      document.getElementById("MoreDescription").innerHTML = "";
      boolean = true;
    }
  }
  
  //Coffee
  
  function totalClickCoffee(click) {
    var totalClicks = document.getElementById("totalClicksCoffee");
    totalClicks.value = parseInt(totalClicks.value) + click;
    var totalValue = totalClicks.value;
    if (totalValue < 1) {
      totalClicks.value = 1;
      totalValue = 1;
    }
    sessionStorage.setItem("sumValueCoffee", totalValue);
  
    var price = document.getElementById("totalPriceCoffee");
    var totalPrice = (15.99 * totalValue).toFixed(2) + "$";
    if (totalValue < 1) {
      totalPrice = (15.99).toFixed(2) + "$";
    }
  
    sessionStorage.setItem("priceCoffee", totalPrice);
  
    price.value = totalPrice;
  }
  
  var boolean = true;
  
  function readMoreCoffee() {
    if (boolean) {
      document.getElementById("MoreDescription").innerHTML =
        "Information:" + "<br />" + "Raw coffee beans packet. (900 g)";
      boolean = false;
    } else {
      document.getElementById("MoreDescription").innerHTML = "";
      boolean = true;
    }
  }
  
  //Oatmeal
  
  function totalClickOatmeal(click) {
    var totalClicks = document.getElementById("totalClicksOatmeal");
    totalClicks.value = parseInt(totalClicks.value) + click;
    var totalValue = totalClicks.value;
    if (totalValue < 1) {
      totalClicks.value = 1;
      totalValue = 1;
    }
    sessionStorage.setItem("sumValueOatmeal", totalValue);
  
    var price = document.getElementById("totalPriceOatmeal");
    var totalPrice = (3.49 * totalValue).toFixed(2) + "$";
    if (totalValue < 1) {
      totalPrice = (3.49).toFixed(2) + "$";
    }
  
    sessionStorage.setItem("priceOatmeal", totalPrice);
  
    price.value = totalPrice;
  }
  
  var boolean = true;
  
  function readMoreOatmeal() {
    if (boolean) {
      document.getElementById("MoreDescription").innerHTML =
        "Information:" + "<br />" + "Old fashioned rolled Oats. (264 g)";
      boolean = false;
    } else {
      document.getElementById("MoreDescription").innerHTML = "";
      boolean = true;
    }
  }
  
  //Olive Oil
  
  function totalClickOliveOil(click) {
    var totalClicks = document.getElementById("totalClicksOliveOil");
    totalClicks.value = parseInt(totalClicks.value) + click;
    var totalValue = totalClicks.value;
    if (totalValue < 1) {
      totalClicks.value = 1;
      totalValue = 1;
    }
    sessionStorage.setItem("sumValueOliveOil", totalValue);
  
    var price = document.getElementById("totalPriceOliveOil");
    var totalPrice = (3.99 * totalValue).toFixed(2) + "$";
    if (totalValue < 1) {
      totalPrice = (3.99).toFixed(2) + "$";
    }
  
    sessionStorage.setItem("priceOliveOil", totalPrice);
  
    price.value = totalPrice;
  }
  
  var boolean = true;
  
  function readMoreOliveOil() {
    if (boolean) {
      document.getElementById("MoreDescription").innerHTML =
        "Information: " + "<br />" + "Extra virgin olive oil. (500 ml)";
      boolean = false;
    } else {
      document.getElementById("MoreDescription").innerHTML = "";
      boolean = true;
    }
  }
  
  //Rice
  
  function totalClickRice(click) {
    var totalClicks = document.getElementById("totalClicksRice");
    totalClicks.value = parseInt(totalClicks.value) + click;
    var totalValue = totalClicks.value;
    if (totalValue < 1) {
      totalClicks.value = 1;
      totalValue = 1;
    }
    sessionStorage.setItem("sumValueRice", totalValue);
  
    var price = document.getElementById("totalPriceRice");
    var totalPrice = (9.99 * totalValue).toFixed(2) + "$";
    if (totalValue < 1) {
      totalPrice = (9.99).toFixed(2) + "$";
    }
  
    sessionStorage.setItem("priceRice", totalPrice);
  
    price.value = totalPrice;
  }
  
  var boolean = true;
  
  function readMoreRice() {
    if (boolean) {
      document.getElementById("MoreDescription").innerHTML =
        "Information: " + "<br />" + " Family size, brown Rice bag. (2.00 kg)";
      boolean = false;
    } else {
      document.getElementById("MoreDescription").innerHTML = "";
      boolean = true;
    }
  }
  
  //Sugar
  
  function totalClickSugar(click) {
    var totalClicks = document.getElementById("totalClicksSugar");
    totalClicks.value = parseInt(totalClicks.value) + click;
    var totalValue = totalClicks.value;
    if (totalValue < 1) {
      totalClicks.value = 1;
      totalValue = 1;
    }
    sessionStorage.setItem("sumValueSugar", totalValue);
  
    var price = document.getElementById("totalPriceSugar");
    var totalPrice = (2.49 * totalValue).toFixed(2) + "$";
    if (totalValue < 1) {
      totalPrice = (2.49).toFixed(2) + "$";
    }
  
    sessionStorage.setItem("priceSugar", totalPrice);
  
    price.value = totalPrice;
  }
  
  var boolean = true;
  
  function readMoreSugar() {
    if (boolean) {
      document.getElementById("MoreDescription").innerHTML =
        "Information: " + "<br />" + "Sugar cube bag. (500 g)";
      boolean = false;
    } else {
      document.getElementById("MoreDescription").innerHTML = "";
      boolean = true;
    }
  }
  
  //Tomato Paste
  
  function totalClickTomatoPaste(click) {
    var totalClicks = document.getElementById("totalClicksTomatoPaste");
    totalClicks.value = parseInt(totalClicks.value) + click;
    var totalValue = totalClicks.value;
    if (totalValue < 1) {
      totalClicks.value = 1;
      totalValue = 1;
    }
    sessionStorage.setItem("sumValueTomatoPaste", totalValue);
  
    var price = document.getElementById("totalPriceTomatoPaste");
    var totalPrice = (1.49 * totalValue).toFixed(2) + "$";
    if (totalValue < 1) {
      totalPrice = (1.49).toFixed(2) + "$";
    }
  
    sessionStorage.setItem("priceTomatoPaste", totalPrice);
  
    price.value = totalPrice;
  }
  
  var boolean = true;
  
  function readMoreTomatoPaste() {
    if (boolean) {
      document.getElementById("MoreDescription").innerHTML =
        "Information: " + "<br />" + "Tomato Paste can. (680 ml)";
      boolean = false;
    } else {
      document.getElementById("MoreDescription").innerHTML = "";
      boolean = true;
    }
  }
  
  //Pasta
  
  function totalClickPasta(click) {
    var totalClicks = document.getElementById("totalClicksPasta");
    totalClicks.value = parseInt(totalClicks.value) + click;
    var totalValue = totalClicks.value;
    if (totalValue < 1) {
      totalClicks.value = 1;
      totalValue = 1;
    }
    sessionStorage.setItem("sumValuePasta", totalValue);
  
    var price = document.getElementById("totalPricePasta");
    var totalPrice = (2.49 * totalValue).toFixed(2) + "$";
    if (totalValue < 1) {
      totalPrice = (2.49).toFixed(2) + "$";
    }
  
    sessionStorage.setItem("pricePasta", totalPrice);
  
    price.value = totalPrice;
  }
  
  var boolean = true;
  
  function readMorePasta() {
    if (boolean) {
      document.getElementById("MoreDescription").innerHTML =
        "Information:" + "<br />" + "Farfalle raw pasta. (410 g)";
      boolean = false;
    } else {
      document.getElementById("MoreDescription").innerHTML = "";
      boolean = true;
    }
  }
  