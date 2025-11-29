'use strict';

function setCookie(name, value, seconds) {
  const date = new Date()
  date.setTime(date.getTime() + (seconds * 1000));
  document.cookie = `${name} = ${value};expires=${date.toUTCString()};path=/`
}

function getCookie(name) {
  const cookies = document.cookie.split(';');
  for (let myCookie of cookies) {
    let [key, val] = myCookie.trim().split('=');
    if (key === name) return val;
  }
  return null;
}
