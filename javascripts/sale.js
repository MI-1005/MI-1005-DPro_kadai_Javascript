
// 商品のIDをキーとして商品情報を格納
const products = [
  { id: 1, name: "オリジナルブレンド200g", price: 500 },
  { id: 2, name: "オリジナルブレンド500g", price: 900 },
  { id: 3, name: "スペシャルブレンド200g", price: 700 },
  { id: 4, name: "スペシャルブレンド500g", price: 1200 }
];

const priceElement = document.getElementById("product");
const numberElement = document.getElementById("number");

let purchases = []; //配列


function add() {
  const productId = parseInt(priceElement.value); // 商品のIDを取得
  const product = products.find(item => item.id === productId); // 商品情報を取得
  const number = parseInt(numberElement.value); // 数量を取得

  let purchase = {
    product: product,
    number: parseInt(number),
  };


    const newPurchaseIndex = purchases.findIndex((item) => item.product.id === productId);
    if (newPurchaseIndex === -1) {
      purchases.push(purchase);
    } else {
      purchases[newPurchaseIndex].number += purchase.number;
    }

  window.alert(`${display()}\n小計${subtotal()}円`);
  priceElement.value = "";
  numberElement.value = "";
}

function subtotal() {
  return purchases.reduce((prev, purchase) => {
    return prev + purchase.product.price * purchase.number;
  }, 0)
}

 function display() {
  return purchases.map(purchase => {
    return `${purchase.product.name} ${purchase.product.price}円:${purchase.number}点\n`;
  }).join("")
};

function calc() {
  const sum = subtotal();
  const postage = calcPostageFromPurchase(sum);
  window.alert(`小計は${sum}円、送料は${postage}円です。合計は${sum + postage}円です`);
  purchases = [];
  priceElement.value= "";
  numberElement.value = "";
}

function calcPostageFromPurchase(sum) {
  if (sum == 0 || sum >= 3000) {
    return 0;
  } else if (sum < 2000){
   return 500;
  } else {
   return 250;
  }
}

window.alert(`${display()}\n小計${subtotal()}円`);
purchases = [];
priceElement.value= "";
numberElement.value = "";