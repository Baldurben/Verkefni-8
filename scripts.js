const ENTER_KEYCODE = 13;

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  const items = document.querySelector('.items');

  text.init(form, items);
});

const text = (() => {
  let items;


  
  
  function init(_form, _items) {
    items = _items;
    _form.addEventListener('submit', formHandler);
	var checkboxes = document.getElementsByClassName("item__checkbox");
	for(var i = 0; i < checkboxes.length; i++) {
		checkboxes[i].addEventListener('change', finish);
	}
	var texti = document.getElementsByClassName("item__text")
	for(var i = 0; i < texti.length; i++) {
		texti[i].addEventListener('click', edit);
	}
	var eyðatakkar = document.getElementsByClassName("item__button")
	for(var i = 0; i < eyðatakkar.length; i++) {
		eyðatakkar[i].addEventListener('click', deleteItem);
	}
	var bætavið = document.getElementsByClassName("form__button")
	

    // TODO láta hluti í _items virka
  }

  function formHandler(e) {
    e.preventDefault();
	//athuga hvort input sé tómt
	if(document.getElementsByClassName("form__input")[0].value.trim() == '' || document.getElementsByClassName("form__input")[0].value == null) return;
	
	//Búa til button
	var takki = document.createElement("Button")
	takki.innerHTML = 'Eyða';
	takki.className = "item__button";
	takki.addEventListener('click', deleteItem);
	
	// Búa til span
	var textinn = document.createElement("span")
    textinn.innerHTML = document.getElementsByClassName("form__input")[0].value;
	textinn.className = "item__text";
	textinn.addEventListener('click', edit);
	
	//Búa til input
	var checkkassi = document.createElement("input")
	checkkassi.setAttribute("type", "checkbox")
	checkkassi.className = "item__checkbox"
	checkkassi.addEventListener('change', finish);
	
	//Búa til lista
	var listi = document.createElement("li")
	listi.className = "item"
	
	//Festa allt saman síðan setja í html og hreinsa input
	listi.appendChild(checkkassi);
	listi.appendChild(textinn);
	listi.appendChild(takki);
	document.querySelector(".items").appendChild(listi);
	document.querySelectorAll(".form__input")[0].value = '';
	

    console.log('halló heimur');
  }

  // event handler fyrir það að klára færslu
  function finish(e) {
		if(e.target.checked == true) e.target.parentNode.className += " item--done"
		
		if(e.target.checked == false) e.target.parentNode.className = "item"
		
  }			
  
  // event handler fyrir það að breyta færslu
  function edit(e) {
	//Event listenerinn keyrði stanslaust þannig slökkva í smá stund
	e.target.removeEventListener('click', edit);
	var texti = e.target.innerHTML;
	e.target.innerHTML = "<input type='focus' id='tex' name='type' value='"+texti+"'>";
	e.target.addEventListener('keypress', function(e) {
	if(event.keyCode === ENTER_KEYCODE) {
		this.innerHTML = document.getElementById('tex').value;
		e.target.addEventListener('click', edit);
	}	
	}); 
  }

  // event handler til að eyða færslu
  function deleteItem(e) {
	  e.target.parentNode.parentNode.removeChild(e.target.parentNode);
  }

  return {
    init: init
  }
})();
