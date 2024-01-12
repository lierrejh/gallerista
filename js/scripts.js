
// "use strict";
// jQuery(document).ready(function ($) {
//     function convertToSlug(Text) {
//         return Text.toLowerCase()
//             .replace(/ /g, "-")
//             .replace(/[^\w-]+/g, "");
//     }

//     window.arrayToTable = function (tableData) {
//         var table = $('<table class="beReal-table"></table>');
//         $(tableData).each(function (i, rowData) {
//             // console.log(rowData[0]);

//             if (i === 0) {
//                 var row = $('<tr class="header"></tr>');
//                 $(rowData).each(function (j, cellData) {
//                     var columnHeaderClass = convertToSlug(cellData);
//                     row.append($('<th class="' + columnHeaderClass + '">' + cellData + '</th>'));
//                 });
//             }
//             if (i > 1) {
//                 // console.log(rowData[0]);
//                 var rowCellClass = convertToSlug(rowData[0]);

//                 var row = $('<tr class="' + rowCellClass + '"></tr>');
//                 $(rowData).each(function (j, cellData) {
//                     var rowCellClassa = convertToSlug(cellData);
//                     // console.log(columnHeaderClass);
//                     row.append($('<td class="' + rowCellClassa + '">' + cellData + '</td>'));
//                 });
//             }

//             table.append(row);
//         });
//         return table;
//     }

//     // window.arrayToPie = function (tableData) {
//     //     var table = $('<table class="beReal-table"></table>');
//     //     $(tableData).each(function (i, rowData) {
//     //         // console.log(rowData[0]);

//     //         if (i === 0) {
//     //             var row = $('<tr class="header"></tr>');
//     //             $(rowData).each(function (j, cellData) {
//     //                 var columnHeaderClass = convertToSlug(cellData);
//     //                 row.append($('<th class="' + columnHeaderClass + '">' + cellData + '</th>'));
//     //             });
//     //         }
//     //         if (i > 1) {
//     //             // console.log(rowData[0]);
//     //             var rowCellClass = convertToSlug(rowData[0]);

//     //             var row = $('<tr class="' + rowCellClass + '"></tr>');
//     //             $(rowData).each(function (j, cellData) {
//     //                 var rowCellClassa = convertToSlug(cellData);
//     //                 // console.log(columnHeaderClass);
//     //                 row.append($('<td class="' + rowCellClassa + '">' + cellData + '</td>'));
//     //             });
//     //         }

//     //         table.append(row);
//     //     });
//     //     return table;
//     // }

//     const queryString = window.location.search;
//     const urlParams = new URLSearchParams(queryString);
//     const country = urlParams.get('country')
//     console.log(country);

//     if (country) {
//         $(document).ajaxComplete(function () {
//             $('.table-container .beReal-table tr.' + country).addClass('active');
//             $('.table-container').addClass('filtered');
//         });
//     } else {
//     }


// });

"use strict";
jQuery(document).ready(function ($) {
  $("input#current-country").on("focus", function (e) {
    // e.preventDefault();
    $(this).toggleClass('active');
  });
  $("#current-date").on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
  });
  $('input#current-country').on('input', function () {
    ulFilter();
  });

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

  // $("#ulFilter").focus(function () {
  //   $('#countrySelector').toggleClass('active');
  // });

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

