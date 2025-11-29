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

function getOSName() {
  const platform = navigator.platform.toLocaleLowerCase();
  if (platform.indexOf("win") > -1 ) {
    return "Windows"
  }
  if (platform.indexOf("max") > -1 ) {
    return "MacOS"
  }
  if (platform.indexOf("Linux") > -1 ) {
    return "Linux"
  }
}

function getScreenSize() {
  return `${screen.width}x${screen.height}`
}

window.onload =  function() {
  setTimeout(() => {
    if(!getCookie("visited")) {
      document.getElementById("cookieDialog").showModal();
    }
  }, 1000);
}

