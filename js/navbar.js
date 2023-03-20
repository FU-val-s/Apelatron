
//const document = undefined;
var togglemenu = true;


$.getElementsByClassName("ifmenu").contentWindow.document.getElementsByClassName("side-menu").onclick = function () {
  triggerIfMenu();
}


function triggerIfMenu() {
  let x = $.getElementsByClassName("ifmenu").contentWindow.document.getElementsByClassName("side-menu");
  x.on('click', function () {
    console.log("entraaaa");
    $('iframe').animate({
      height: togglemenu ? 200 : 50
    }, 250);
    togglemenu = !togglemenu;
  })
}

// function navDrop() {
//   var x = document.getElementById("menuDrop");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }