// 11-12-2020
"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function levusPagination(number) {

  // обгортка
  var wrap = document.querySelector('.levus-pagination'); 
  
  // елементи
  var el = wrap.querySelectorAll('.levus-item'); 
  
  // навігація
  var nav = wrap.querySelector('.levus-pagination-nav'); 
  
  // кількість сторінок
  var pages = Math.ceil(el.length / number); 
  
  // виводимо сторінки
  for (var i = 1; i <= pages; i++) {
    if (i === 1) {
      nav.innerHTML += "<span class=\"active\">".concat(i, "</span>");
    } else {
      nav.innerHTML += "<span>".concat(i, "</span>");
    }
  }

  var counter = 0;

  el.forEach(function (item, i) {

    // усі ховаємо
    item.classList.add('hide'); 
    
    // показуємо тільки перші "н" 
    if (i < number) {
      item.classList.remove('hide');
    }
  });

  nav.addEventListener('click', function (e) {
    if (e.target.tagName == 'SPAN') {

      // поточний 
      var current = e.target;
      var n = current.textContent; 
      
      // для порівняння нижче міняємо значення каунтера по кліку
      counter = n - 1;

      el.forEach(function (item, i) {

        // усі ховаємо
        item.classList.add('hide'); 
        
        // показуємо тільки обрані
        if (i < number * n && i >= number * counter) {
          item.classList.remove('hide');
        }
      });
      var child = current.parentNode.children;

      _toConsumableArray(child).forEach(function (span) {
        return span.className = '';
      }); 
      
      // підсвітка кнопки навігації
      current.className = 'active';
    }
  });
}

levusPagination(8);