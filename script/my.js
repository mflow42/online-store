'use strict';

window.onload = function () {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://raw.githubusercontent.com/mflow42/online-store-api/master/responses/catalogData.json', true);
  xhr.onload = function () {
    console.log(xhr);
  }
  xhr.send();
}