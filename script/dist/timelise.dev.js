"use strict";

var allLinks = document.querySelectorAll(".tabs a");
var allTabs = document.querySelectorAll(".tab-content");
var tabContentWrapper = document.querySelector(".tab-content-wrapper");

var shiftTabs = function shiftTabs(linkId) {
  allTabs.forEach(function (tab, i) {
    if (tab.id.includes(linkId)) {
      allTabs.forEach(function (tabItem) {
        tabItem.style = "transform: translateY(-".concat(i * 300, "px);");
      });
    }
  });
};

allLinks.forEach(function (elem) {
  elem.addEventListener('click', function () {
    var linkId = elem.id;
    var hrefLinkClick = elem.href;
    allLinks.forEach(function (link, i) {
      if (link.href == hrefLinkClick) {
        link.classList.add("active");
      } else {
        link.classList.remove('active');
      }
    });
    shiftTabs(linkId);
  });
}); //? handle proper selection for initial load

var currentHash = window.location.hash;
var activeLink = document.querySelector(".tabs a");

if (currentHash) {
  var visibleHash = document.getElementById("".concat(currentHash.replace('#', '')));

  if (visibleHash) {
    activeLink = visibleHash;
  }
}

activeLink.classList.toggle('active');
shiftTabs(activeLink.id);