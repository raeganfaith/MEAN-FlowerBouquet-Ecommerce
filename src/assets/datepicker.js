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

// change order status -- not working rin bwahahaha waitz
function showHide(elem) {
    if(elem.selectedIndex !== 0) {
         //hide the divs
         for(var i=0; i < divsO.length; i++) {
             divsO[i].style.display = 'none';
        }
        //unhide the selected div
        document.getElementById(elem.value).style.display = 'block';
    }
}
 

window.onload=function() {
    //get the divs to show/hide
    divsO = document.getElementById("hockey").getElementsByClassName('show-hide');
};
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

// PopUps for Arranged Flower Bouquet
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
