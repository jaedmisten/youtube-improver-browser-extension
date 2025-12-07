console.log("%BEGIN Youtube Improver EXTENSION UPDATES", "color:blue;font-size: 15px;");
let logoEl = document.getElementById("logo");
logoEl.innerHTML = '<a href="https://www.youtube.com"><span style="font-size:20px;">YouTube</span></a>';

// Attempting to set search input to autofocus.
// Currently now working. 
// let searchBarEl = document.getElementsByName("search_query")[0];
// console.log(searchBarEl);
// console.dir(searchBarEl);
// searchBarEl.autofocus = true;