console.log("%cBEGIN Youtube Improver EXTENSION UPDATES", "color:blue;font-size: 15px;");

// Change youtube homepage link that sometimes has animation to be regular href link.
let logoEl = document.getElementById("logo");
logoEl.innerHTML = '<a href="https://www.youtube.com"><span style="font-size:20px;">YouTube</span></a>';

// Set search input to have focus.
let searchBarEl = document.getElementsByName("search_query")[0];
searchBarEl.focus();