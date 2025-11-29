'use strict';

function setCookie(name, value, seconds) {
  const date = new Date();
  date.setTime(date.getTime() + (seconds * 1000));
  document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
}

function getCookie(name) {
  const cookies = document.cookie.split(';');
  for (let myCookie of cookies) {
    let [key, val] = myCookie.trim().split('=');
    if (key === name) return val;
  }
  return null;
}

function getBrowserName() {
  const ua = navigator.userAgent;
  if (ua.indexOf("Chrome") > -1) return "Chrome";
  if (ua.indexOf("Firefox") > -1) return "Firefox";
  if (ua.indexOf("Safari") > -1 && ua.indexOf("Chrome") === -1) return "Safari";
  if (ua.indexOf("Edge") > -1) return "Edge";
  return "Unknown";
}

function getOSName() {
  const platform = navigator.platform.toLowerCase();
  if (platform.indexOf("win") > -1) return "Windows";
  if (platform.indexOf("mac") > -1) return "MacOS";
  if (platform.indexOf("linux") > -1) return "Linux";
  if (/android/i.test(navigator.userAgent)) return "Android";
  if (/iphone|ipad|ipod/i.test(navigator.userAgent)) return "iOS";
  return "Unknown";
}

function getScreenSize() {
  return `${screen.width}x${screen.height}`;
}

window.addEventListener("load", () => {
  const cookieDialog = document.getElementById("cookieDialogue");
  const settingsDialog = document.getElementById("settingsDialogue");

  const acceptAllBtn = document.getElementById("acceptAll");
  const openSettingsBtn = document.getElementById("openSettings");
  const saveBtn = document.getElementById("save");

  const browserToggle = document.getElementById("browserToggle");
  const osToggle = document.getElementById("osToggle");
  const screenToggle = document.getElementById("screenToggle");

  setTimeout(() => {
    if (!getCookie("visited")) {
      cookieDialog.showModal();
    }
  }, 1000);

  acceptAllBtn.addEventListener("click", () => {
    setCookie("visited", "true", 20);
    setCookie("browser", getBrowserName(), 20);
    setCookie("os", getOSName(), 20);
    setCookie("screen", getScreenSize(), 20);
    cookieDialog.close();
  });

  openSettingsBtn.addEventListener("click", () => {
    cookieDialog.close();
    settingsDialog.showModal();
  });

  saveBtn.addEventListener("click", () => {
    setCookie("visited", "true", 20);
    if (browserToggle.checked) {
      setCookie("browser", getBrowserName(), 20);
    }
    if (osToggle.checked) {
      setCookie("os", getOSName(), 20);
    }
    if (screenToggle.checked) {
      setCookie("screen", getScreenSize(), 20);
    }
    settingsDialog.close();
  });
});

console.log("Browser:", getCookie("browser"));
console.log("OS:", getCookie("os"));
console.log("Screen:", getCookie("screen"));