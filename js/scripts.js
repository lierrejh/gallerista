"use strict";

  $(document).mouseup(function (e) {
    var currentCountry = $("#current-country");

    // if the target of the click isn't the container nor a descendant of the container
    if (!currentCountry.is(e.target) && currentCountry.has(e.target).length === 0) {
      $(currentCountry).removeClass('active');
    }

    var currentDate = $("#current-date");

    // if the target of the click isn't the container nor a descendant of the container
    if (!currentDate.is(e.target) && currentDate.has(e.target).length === 0) {
      $(currentDate).removeClass('active');
    }
  });

  function ulFilter() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("current-country");
    filter = input.value.toUpperCase();
    ul = document.getElementById("countrySelector");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
});

document.addEventListener('DOMContentLoaded', function (event) {
  var activeLang = document.querySelector('nav.langs li.wpml-ls-current-language span').innerText;
  var langButton = document.querySelector('nav.langs button.langSelect');
  var langContainer = document.querySelector('nav.langs .wpml-ls');

  langButton.innerText = activeLang;


  langButton.addEventListener('click', function () {


    if (langButton.classList.contains("active")) {
      langButton.classList.remove('active');
      langContainer.classList.remove('active');
      langButton.setAttribute('aria-expanded', 'true');

    } else {
      langButton.classList.add('active');
      langContainer.classList.add('active');
      langButton.setAttribute('aria-expanded', 'true');

    }
  });
});

