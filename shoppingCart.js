//Total Items

var TotalNumberItems = 3;

//Subtotal Global Variable
var SubtotalAmount = 0.0;

//GST
var GST = 0.0;

//QST
var QST = 0.0;

//Total

var GrandTotalAmount = 0.0;

//Item 1
var TotalNumberItems1 = 1;
var totalSum1 = 0.0;
var priceItem1 = 8.99;
var subtotalItem1;
var GST1 = 0.0;
var QST1 = 0.0;
var GrandTotal1 = 0.0;

//var quantity1 = QuantityItem_1_inCart.innerText;

function totalclicksitem1(click) {
  //Total Item Quantity
  const quantity1 = document.getElementById("QuantityItem_1_inCart");
  const totalSum = parseFloat(quantity1.innerText) + click;
  console.log(totalSum + click);
  QuantityItem_1_inCart.innerText = totalSum;
  totalSum1 = totalSum;
  //Item Subtotal
  subtotalItem1 = totalSum * priceItem1;
  if (totalSum < 0) {
    QuantityItem_1_inCart.innerText = 0;
    totalItem_1_Subtotal.innerText = 0.0;
  } else {
    totalItem_1_Subtotal.innerText = subtotalItem1.toFixed(2);
    if (click == -1) {
      TotalNumberItems -= 1;
      SubtotalAmount -= priceItem1;
      if (SubtotalAmount < 0) {
        SubtotalAmount = 0.0;
      }
    } else {
      SubtotalAmount += priceItem1;
    }

    //Total Number of Items
    TotalNumberItems1 = (totalSum1 * 1).toFixed(0);
    totalNumberOfItems.innerText =
      TotalNumberItems1 * 1 + TotalNumberItems2 * 1 + TotalNumberItems3 * 1;

    //Subtotal
    subtotalid.innerText = SubtotalAmount.toFixed(2);

    //GST
    GST1 = (SubtotalAmount * 0.05).toFixed(2);
    GSTid.innerText = GST1;

    //QST
    QST1 = (SubtotalAmount * 0.09975).toFixed(2);
    QSTid.innerText = QST1;

    //GrandTotal
    GrandTotal1 = (SubtotalAmount * 1 + GST1 * 1 + QST1 * 1).toFixed(2);
    GrandTotalid.innerText = GrandTotal1;
  }
}
TotalNumberItems =
  TotalNumberItems1 * 1 + TotalNumberItems2 * 1 + TotalNumberItems3 * 1;
SubtotalAmount = priceItem1;
GST = GST1;
QST = QST1;
GrandTotalAmount = GrandTotal1;

console.log(subtotalItem1);

//Item 2

var TotalNumberItems2 = 1;
var totalSum2 = 0.0;
var priceItem2 = 15.99;
var subtotalItem2;
var GST2 = 0.0;
var QST2 = 0.0;
var GrandTotal2 = 0.0;

function totalclicksitem2(click) {
  //Total Item Quantity
  const quantity2 = document.getElementById("QuantityItem_2_inCart");
  const totalSum = parseFloat(quantity2.innerText) + click;
  console.log(totalSum + click);

  //Item Subtotal
  QuantityItem_2_inCart.innerText = totalSum;

  var totalSum2 = totalSum;

  subtotalItem2 = totalSum * priceItem2;

  if (totalSum < 0) {
    QuantityItem_2_inCart.innerText = 0;
  } else {
    totalItem_2_Subtotal.innerText = subtotalItem2.toFixed(2);

    if (click == -1) {
      TotalNumberItems -= 1;
      SubtotalAmount -= priceItem2;
      if (SubtotalAmount < 0) {
        SubtotalAmount = 0.0;
      }
    } else {
      SubtotalAmount += priceItem2;
    }

    //Total Number of Items

    TotalNumberItems2 = (totalSum2 * 1).toFixed(0);
    totalNumberOfItems.innerText =
      TotalNumberItems1 * 1 + TotalNumberItems2 * 1 + TotalNumberItems3 * 1;

    //Subtotal
    subtotalid.innerText = SubtotalAmount.toFixed(2);

    //GST
    GST2 = (SubtotalAmount * 0.05).toFixed(2);
    GSTid.innerText = GST2;

    //QST
    QST2 = (SubtotalAmount * 0.09975).toFixed(2);
    QSTid.innerText = QST2;

    //GrandTotal
    GrandTotal2 = (SubtotalAmount * 1 + GST2 * 1 + QST2 * 1).toFixed(2);
    GrandTotalid.innerText = GrandTotal2;
  }
}

TotalNumberItems = TotalNumberItems1*1 + TotalNumberItems2*1 + TotalNumberItems3*1;
SubtotalAmount = priceItem1 + priceItem2;
GST = GST1 + GST2;
QST = QST1 + QST2;
GrandTotalAmount = GrandTotal1 + GrandTotal2;

//Item 3

var TotalNumberItems3 = 1;
var priceItem3 = 9.99;
var totalSum3 = 0.0;
var subtotalItem3;
var GST3 = 0.0;
var QST3 = 0.0;
var GrandTotal3 = 0.0;

function totalclicksitem3(click) {
  const quantity3 = document.getElementById("QuantityItem_3_inCart");
  const totalSum = parseFloat(quantity3.innerText) + click;
  console.log(totalSum + click);

  //Item Subtotal

  QuantityItem_3_inCart.innerText = totalSum;
  subtotalItem3 = totalSum * priceItem3;
  QuantityItem_3_inCart.innerText = totalSum;
  totalSum3 = totalSum;

  if (totalSum < 0) {
    QuantityItem_3_inCart.innerText = 0;
  } else {
    totalItem_3_Subtotal.innerText = subtotalItem3.toFixed(2);

    if (click == -1) {
      SubtotalAmount -= priceItem3;
      if (SubtotalAmount < 0) {
        SubtotalAmount = 0.0;
      }
    } else {
      SubtotalAmount += priceItem3;
    }
    //Total Number of Items

    TotalNumberItems3 = (totalSum3 * 1).toFixed(0);
    totalNumberOfItems.innerText =
      TotalNumberItems1 * 1 + TotalNumberItems2 * 1 + TotalNumberItems3 * 1;

    //Subtotal
    subtotalid.innerText = SubtotalAmount.toFixed(2);
    //GST
    GST3 = (SubtotalAmount * 0.05).toFixed(2);
    GSTid.innerText = GST3;
    //QST
    QST3 = (SubtotalAmount * 0.09975).toFixed(2);
    QSTid.innerText = QST3;
    //GrandTotal
    GrandTotal3 = (SubtotalAmount * 1 + GST3 * 1 + QST3 * 1).toFixed(2);
    GrandTotalid.innerText = GrandTotal3;
  }
}

TotalNumberItems = TotalNumberItems1*1 + TotalNumberItems2*1 + TotalNumberItems3*1;
SubtotalAmount = priceItem1 + priceItem2 + priceItem3;
GST = GST1 + GST2 + GST3;
QST = QST1 + QST2 + QST3;
GrandTotalAmount = GrandTotal1 + GrandTotal2 + GrandTotal3;


