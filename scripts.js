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
	document.getElementById("box").addEventListener('change', finish(e));

    // TODO láta hluti í _items virka
  }

  function formHandler(e) {
    e.preventDefault();

    console.log('halló heimur');
  }

  // event handler fyrir það að klára færslu
  function finish(e) {
	var check = document.getElementsById("box").checked;
	if(check == true) {
		alert();
	}
  }

  // event handler fyrir það að breyta færslu
  function edit(e) {
  }

  // event handler fyrir það að klára að breyta færslu
  function commit(e) {
  }

  // fall sem sér um að bæta við nýju item
  function add(value) {
	var li = document.createElement('li');
	var chkbox = document.createElement('input');
	var span = document.createElement('span');
	chkbox.type = 'checkbox';
	span.appendChild(document.createTextNode(text));
	li.appendChild(chkbox);
	li.appendChild(span);
	return li;
  }

  // event handler til að eyða færslu
  function deleteItem(e) {
  }

  // hjálparfall til að útbúa element
  function el(type, className, clickHandler) {
  }

  return {
    init: init
  }
})();
