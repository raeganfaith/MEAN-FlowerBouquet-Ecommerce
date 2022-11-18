

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

//Function to change page title in admin
function changeTitleDashboard() {
  document.getElementById("nav-title").innerHTML = "Dashboard";
  document.getElementById("nav-subtitle").innerHTML = "Home/Dashboard";
}
function changeTitleOrders() {
  document.getElementById("nav-title").innerHTML = "Orders";
  document.getElementById("nav-subtitle").innerHTML = "Home/Order";
}
function changeTitleOrderHistory() {
  document.getElementById("nav-title").innerHTML = "Order History";
  document.getElementById("nav-subtitle").innerHTML = "Home/Order History";
}
function changeTitleInventory() {
  document.getElementById("nav-title").innerHTML = "Inventory";
  document.getElementById("nav-subtitle").innerHTML = "Home/Inventory";
}
function changeTitleFlower() {
  document.getElementById("nav-title").innerHTML = "Flower";
  document.getElementById("nav-subtitle").innerHTML = "Inventory/Flower";
}
function changeTitleBouquet() {
  document.getElementById("nav-title").innerHTML = "Bouquet";
  document.getElementById("nav-subtitle").innerHTML = "Inventory/Bouquet";
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

// pass dropdown value to textfield // status
function onchangeFn(selection) {
    var id= $(selection).attr('id');
    var num = id.match(/\d+/)[0];
    var strlabel1 = selection.options[selection.selectedIndex].text;
    $('#id_lines-'+num+'-label').val(strlabel1);
}

// MGA HINDI GUMANANG FUNCTIONS
// function pendingColor(){
//   document.getElementByClass("status-change").style.backgroundColor = "bg-warning";
// }
// function statusChange2(){
//   document.getElementByClass("status-change").style.backgroundColor = "bg-info";
// }
// function statusChange3(){
//   document.getElementByClass("status-change").style.backgroundColor = "bg-danger";
// }
// function statusChange4(){
//   document.getElementByClass("status-change").style.backgroundColor = "bg-success";
// }

// function badgeChange(){
//   let x = document.getElementById("processing");
//   if(x = Pending){
//     document.getElementByClass("status-change").style.backgroundColor = "bg-warning";
//   } else if(x = Processing){
//     document.getElementByClass("status-change").style.backgroundColor = "bg-info";
//   } else if(x = Reject){
//     document.getElementByClass("status-change").style.backgroundColor = "bg-danger";
//   } else {
//     document.getElementByClass("status-change").style.backgroundColor = "bg-success";
//   }
// }

$('#orderComplete td').each(function() {
  if (this.textContent.includes('Completed')) {
    $(this).parent().hide();
  }
});