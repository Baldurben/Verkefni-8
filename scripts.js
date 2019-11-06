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
	var takki = document.createElement("Button")
	takki.innerHTML = 'Eyða';
	takki.className = "item__button";
	takki.addEventListener('click', deleteItem);
	var textinn = document.createElement("span")
    textinn.innerHTML = document.getElementsByClassName("form__input")[0].value;
	textinn.className = "item__text";
	textinn.addEventListener('click', edit);
	var checkkassi = document.createElement("input")
	checkkassi.setAttribute("type", "checkbox")
	checkkassi.className = "item__checkbox"
	checkkassi.addEventListener('change', finish);
	var listi = document.createElement("li")
	listi.className = "item"
	listi.appendChild(checkkassi);
	listi.appendChild(textinn);
	listi.appendChild(takki);
	console.log(listi);
	if(textinn.innerHTML.trim() == '' || textinn.innerHTML == null) return;
	else document.querySelector(".items").appendChild(listi);
	document.getElementsByClassName("form__input")[0].value = '';
	

    console.log('halló heimur');
  }

  // event handler fyrir það að klára færslu
  function finish(e) {
		if(this.checked == true) {	
			Parent = this.parentNode;	
			Parent.className += " item--done"
		}
		if(this.checked == false) {
			Parent = this.parentNode;
			Parent.className = "item"
		}
  }			
  // event handler fyrir það að breyta færslu
  function edit(e) {
	/*
	þetta = this;
	þetta.contentEditable = true;
	document.execCommand("defaultParagraphSeparator", false);
	þetta.style.border='3px dotted black';
	onmouseout = function() {
		þetta.style.border='none';
	}
	*/
	this.removeEventListener('click', edit);
	var texti = this.innerHTML;
	this.innerHTML = "<input type='focus' id='tex' name='type' value='"+texti+"'>";
	this.addEventListener('keypress', function(e) {
	if(event.keyCode === 13) {
		this.innerHTML = document.getElementById('tex').value;
		this.addEventListener('click', edit);
	}	
	}); 
	
  }

  // event handler fyrir það að klára að breyta færslu
  function commit(e) {
  }

  // fall sem sér um að bæta við nýju item
  function add(value) {
	  alert();
	/*
	*/
  }

  // event handler til að eyða færslu
  function deleteItem(e) {
	  this.parentNode.parentNode.removeChild(this.parentNode);
  }

  // hjálparfall til að útbúa element
  function el(type, className, clickHandler) {
  }

  return {
    init: init
  }
})();
