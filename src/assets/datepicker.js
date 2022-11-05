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

