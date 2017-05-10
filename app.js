var app = a = {};
a.elements = e = {};
a.listeners = l = {};
a.handlers = h = {};
a.utilities = u = {};

e.topright, e.bottomleft, e.body = undefined;

document.addEventListener('DOMContentLoaded', function() {
  console.log('hello slider');

  e.topright = document.getElementById('topright');
  e.bottomleft = document.getElementById('bottomleft');
  e.body = document.getElementsByTagName('body')[0];

  document.addEventListener('keypress', l.onKeyPress);
});

l.onKeyPress = function(event) {
  console.log(event.key);
  if (event.key === '2') {
    e.topright.classList.remove('hidden');
  } else if (event.key === '3') {
    e.bottomleft.classList.remove('hidden');
  } else if (event.key === '5') {
    e.body.classList.add('whiteongrey');
  }
}
