// // Bouquet JS
// if (document.readyState == 'loading') {
//   document.addEventListener('DOMContentLoaded', ready)
// } else {
//   ready()
// }

// const { idText } = require("typescript");

// function ready() {
//   var removeCartItemButtons = document.getElementsByClassName('btn-remove')
//   for (var i = 0; i < removeCartItemButtons.length; i++) {
//       var button = removeCartItemButtons[i]
//       button.addEventListener('click', removeCartItem)
//   }

//   var quantityInputs = document.getElementsByClassName('cart-quantity-input')
//   for (var i = 0; i < quantityInputs.length; i++) {
//       var input = quantityInputs[i]
//       input.addEventListener('change', quantityChanged)
//   }

//   var addToCartButtons = document.getElementsByClassName('shop-item-button')
//   for (var i = 0; i < addToCartButtons.length; i++) {
//       var button = addToCartButtons[i]
//       button.addEventListener('click', addToCartClicked)
//   }

//   document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)

// }


// function purchaseClicked() {
//   alert('Thank you for your purchase you may now enter your credentioals to complete your order')
//   var cartItems = document.getElementsByClassName('cart-items')[0]
//   while (cartItems.hasChildNodes()) {
//       cartItems.removeChild(cartItems.firstChild)
//   }
//   updateCartTotal()

// }

// function removeCartItem(event) {
//   var buttonClicked = event.target
//   buttonClicked.parentElement.parentElement.remove()
//   updateCartTotal()
// }

// function quantityChanged(event) {
//   var input = event.target
//   if (isNaN(input.value) || input.value <= 0) {
//       input.value = 1
//   }
//   updateCartTotal()
// }

// function addToCartClicked(event) {
//   var button = event.target
//   var shopItem = button.parentElement.parentElement
//   var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
//   var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
//   var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
//   addItemToCart(title, price, imageSrc)
//   updateCartTotal()
//   // console.log(JSON.stringify(title, price, imageSrc))
//   // console.log("%j", jsonObj);
// }

// function addItemToCart(title, price, imageSrc) {
//   var cartRow = document.createElement('div')
//   cartRow.classList.add('cart-row')
//   var cartItems = document.getElementsByClassName('cart-items')[0]
//   var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
//   for (var i = 0; i < cartItemNames.length; i++) {
//       if (cartItemNames[i].innerText == title) {
//           alert('This item is already added to the cart')
//           return
//       }
//   }
//   var cartRowContents = `
//     <div class="bouquet-item cart-items">
//      <a class="see-more" onclick="PopUpBouquet1()">
//          <img src="${imageSrc}" alt="" class="img-fluid order-img">
//          <div class="d-flex justify-content-between align-items-center mt-3">
//              <h5 class="name fw-bold cart-item-title">${title}</h5>
//              <h6 class = "cart-price">${price}</h6>
//          </div>
//          <p>What do we say when you want to treat your...</p>
//      </a>
//      <div class="d-flex cart-quantity">
//        <input type="number" min="0" step="1" class="form-control no-effect w-25" id="amountInput" value="1" disabled>
//        <button class="btn btn-outline-primary w-75 ms-3 btn-remove">remove</button>
//      </div>
//     </div>`
//   cartRow.innerHTML = cartRowContents
//   cartItems.append(cartRow)
//   cartRow.getElementsByClassName('btn-remove')[0].addEventListener('click', removeCartItem)
//   cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)

//   var Bouquet, BouquetJSON, text, obj;
//       Bouquet = {
//           imageSrc : imageSrc, //Gawin niyo nalang ID to
//           name : title,
//           price : price
//       };
//       BouquetJSON = JSON.stringify(Bouquet);
//       localStorage.setItem(imageSrc, BouquetJSON);
//       const retreive = localStorage.getItem(imageSrc);
//      // obj = JSON.parse(text);
//      // document.getElementById("demo").innerHTML = obj.name;
// }

// function updateCartTotal() {
//   var cartItemContainer = document.getElementsByClassName('cart-items')[0]
//   var cartRows = cartItemContainer.getElementsByClassName('cart-row')
//   var total = 0
//   for (var i = 0; i < cartRows.length; i++) {
//       var cartRow = cartRows[i]
//       var priceElement = cartRow.getElementsByClassName('cart-price')[0]
//       var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
//       var price = parseFloat(priceElement.innerText.replace('$', ''))
//       var quantity = quantityElement.value
//       total = total + (price * quantity)
//   }
//   total = Math.round(total * 100) / 100
//   document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
// }

// let http = new XMLHttpRequest();
// http.open('get', 'bouquet.json', true);

// http.onload = function () {
//   if (this.readyState == 4 && this.status == 200) {
//     let data = JSON.parse(http.responseText);
//     let output = '';
//     for (let item of bouquet-items){
//       output += `
//           <div class="bouquet-item">
//             <a class="see-more" onclick="PopUpBouquet2()">
//               <img src="${item.image}" alt="" class="img-fluid order-img shop-item-image">
//               <div class="d-flex justify-content-between align-items-center mt-3">
//                 <h5 class="name fw-bold shop-item-title">${item.bouquetName}</h5>
//                 <h6 class="shop-item-price">${item.price}</h6>
//               </div>
//               <p>${item.description}</p>
//             </a>
//             <div class="d-flex">
//               <input type="number" min="0" step="1" class="form-control no-effect w-25 cart-quantity-input" id="amountInput" value="0">
//               <button class="btn btn-outline-primary w-75 ms-3 shop-item-button">add to bag</button>
//             </div>
//           </div>
//       `;
//     }
//     document.querySelector(".bouquet-items").innerHTML = output;
//   }
// }

// custom-flower JavaScript
function ChangeSmall() {
  document.getElementById("change").innerHTML = "10";
}

function ChangeMedium() {
  document.getElementById("change").innerHTML = "20";
}

function ChangeLarge() {
  document.getElementById("change").innerHTML = "30";
}

// PopUps JavaScript
// PopUps for Custom Flower

function PopUpFlower1(){
  document.getElementById("popup-flower-1").classList.toggle("active");
  window.scrollTo(0,0);
}
function PopUpFlower2(){
  document.getElementById("popup-flower-2").classList.toggle("active");
  window.scrollTo(0,0);
}
function PopUpFlower3(){
  document.getElementById("popup-flower-3").classList.toggle("active");
  window.scrollTo(0,0);
}
function PopUpFlower4(){
  document.getElementById("popup-flower-4").classList.toggle("active");
  window.scrollTo(0,0);
}
function PopUpFlower5(){
  document.getElementById("popup-flower-5").classList.toggle("active");
  window.scrollTo(0,0);
}
function PopUpFlower6(){
  document.getElementById("popup-flower-6").classList.toggle("active");
  window.scrollTo(0,0);
}
function PopUpFlower7(){
  document.getElementById("popup-flower-7").classList.toggle("active");
  window.scrollTo(0,0);
}
function PopUpFlower8(){
  document.getElementById("popup-flower-8").classList.toggle("active");
  window.scrollTo(0,0);
}

// PopUps for Arranged Flower Bouquet --- HINDI PA NAGANAAA
function DynamicPopUpBouquet() {
  // const myObj = JSON.getAttribute("bouquet.json");
  // x = myObj["bouquetName"];
  //var content = JSON.getAttribute("bouquet.json"); //read the response
  //content = JSON.parse(content);
  //myJSON = 'bouquet.json';
  // const myObj = JSON.parse(myJSON);
  // x = myObj["bouquetName"];

  // let value = Object.bouquetName;

  if({bouquetName : 'Pinky Pinks'} ) {
    document.getElementById("popup-bouquet-1").classList.toggle("active");
    window.scrollTo(0,0);
  } else if({bouquetName : 'Summer Treat'}) {
    document.getElementById("popup-bouquet-2").classList.toggle("active");
    window.scrollTo(0,0);
  } else if({bouquetName : 'Spring-y'}){
    document.getElementById("popup-bouquet-3").classList.toggle("active");
    window.scrollTo(0,0);
  } else if({bouquetName : 'Sunny Surprise'}){
    document.getElementById("popup-bouquet-4").classList.toggle("active");
    window.scrollTo(0,0);
  }
}

function PopUpBouquet1(){
  document.getElementById("popup-bouquet-1").classList.toggle("active");
  window.scrollTo(0,0);
}
function PopUpBouquet2(){
  document.getElementById("popup-bouquet-2").classList.toggle("active");
  window.scrollTo(0,0);
}
function PopUpBouquet3(){
  document.getElementById("popup-bouquet-3").classList.toggle("active");
  window.scrollTo(0,0);
}
function PopUpBouquet4(){
  document.getElementById("popup-bouquet-4").classList.toggle("active");
  window.scrollTo(0,0);
}
function PopUpBouquet5(){
  document.getElementById("popup-bouquet-5").classList.toggle("active");
  window.scrollTo(0,0);
}
function PopUpBouquet6(){
  document.getElementById("popup-bouquet-6").classList.toggle("active");
  window.scrollTo(0,0);
}
function PopUpBouquet7(){
  document.getElementById("popup-bouquet-7").classList.toggle("active");
  window.scrollTo(0,0);
}
function PopUpBouquet8(){
  document.getElementById("popup-bouquet-8").classList.toggle("active");
  window.scrollTo(0,0);
}
// PopUps for Custom Sleeves
function PopUpSleeve1(){
  document.getElementById("popup-sleeve-1").classList.toggle("active");
  window.scrollTo(0,0);
}
function PopUpSleeve2(){
  document.getElementById("popup-sleeve-2").classList.toggle("active");
  window.scrollTo(0,0);
}
function PopUpSleeve3(){
  document.getElementById("popup-sleeve-3").classList.toggle("active");
  window.scrollTo(0,0);
}
function PopUpSleeve4(){
  document.getElementById("popup-sleeve-4").classList.toggle("active");
  window.scrollTo(0,0);
}

// PopUps for Custom Tie
function PopUpTie1(){
  document.getElementById("popup-tie-1").classList.toggle("active");
  window.scrollTo(0,0);
}
function PopUpTie2(){
  document.getElementById("popup-tie-2").classList.toggle("active");
  window.scrollTo(0,0);
}
function PopUpTie3(){
  document.getElementById("popup-tie-3").classList.toggle("active");
  window.scrollTo(0,0);
}
function PopUpTie4(){
  document.getElementById("popup-tie-4").classList.toggle("active");
  window.scrollTo(0,0);
}

function ScrollTop(){
  window.scrollTo(0,0);
}

// ADMIN

// upload picture
function showPreview(event){
	if(event.target.files.length > 0){
	var src = URL.createObjectURL(event.target.files[0]);
	var preview = document.getElementById("upload-preview");
	preview.src = src;
	preview.style.display = "block";
}
}

// table filter
(function(document) {
	'use strict';

	var LightTableFilter = (function(Arr) {

		var _input;
	var _select;

		function _onInputEvent(e) {
			_input = e.target;
			var tables = document.getElementsByClassName(_input.getAttribute('data-table'));
			Arr.forEach.call(tables, function(table) {
				Arr.forEach.call(table.tBodies, function(tbody) {
					Arr.forEach.call(tbody.rows, _filter);
				});
			});
		}

		function _onSelectEvent(e) {
			_select = e.target;
			var tables = document.getElementsByClassName(_select.getAttribute('data-table'));
			Arr.forEach.call(tables, function(table) {
				Arr.forEach.call(table.tBodies, function(tbody) {
					Arr.forEach.call(tbody.rows, _filterSelect);
				});
			});
		}

		function _filter(row) {

			var text = row.textContent.toLowerCase(), val = _input.value.toLowerCase();
			row.style.display = text.indexOf(val) === -1 ? 'none' : 'table-row';

		}

		function _filterSelect(row) {

			var text_select = row.textContent.toLowerCase(), val_select = _select.options[_select.selectedIndex].value.toLowerCase();
			row.style.display = text_select.indexOf(val_select) === -1 ? 'none' : 'table-row';

		}

		return {
			init: function() {
				var inputs = document.getElementsByClassName('light-table-filter');
				var selects = document.getElementsByClassName('select-table-filter');
				Arr.forEach.call(inputs, function(input) {
					input.oninput = _onInputEvent;
				});
				Arr.forEach.call(selects, function(select) {
		select.onchange  = _onSelectEvent;
				});
			}
		};
	})(Array.prototype);

	document.addEventListener('readystatechange', function() {
		if (document.readyState === 'complete') {
			LightTableFilter.init();
		}
	});

})(document);

// inventory filter search
function liveSearch() {
// Locate the card elements
let card = document.querySelectorAll('.card')
// Locate the search input
let search_query = document.getElementById("searchbox").value;
// Loop through the cards
for (var i = 0; i < card.length; i++) {
	// If the text is within the card...
	if(card[i].innerText.toLowerCase()
	// ...and the text matches the search query...
	.includes(search_query.toLowerCase())) {
		// ...remove the `.is-hidden` class.
		card[i].classList.remove("is-hidden");
	} else {
	// Otherwise, add the class.
	card[i].classList.add("is-hidden");
	}
}
}


// online - offline toggle
function myFunction() {
var element = document.getElementById("status");
element.classList.toggle("bg-danger");
}

function toggleText() {
var x = document.querySelector(".textDiv");
if (x.innerHTML === "Online") {
	x.innerHTML = "Offline";
} else {
	x.innerHTML = "Online";
}
}

// change page title -- not working pa lolz
var page = document.getElementById("nav-title");

page.innerHTML = location.pathname.substring
(location.pathname.lastIndexOf("/") + 1);

// var down = document.getElementById('geeks');

//         function GFG_Fun() {
//             down.innerHTML = location.pathname.substring
//             (location.pathname.lastIndexOf("/") + 1);
//         }


