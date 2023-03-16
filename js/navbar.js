// function navDrop() {
//   var x = document.getElementById("menuDrop");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }

function triggerIfMenu() {
  var togglemenu = true;
  let x = document.getElementsByClassName("ifmenu").contentWindow.document.getElementsByClassName("side-menu");
  x.on('click', function () {
    console.log("entraaaa");
    $('iframe').animate({
      height: togglemenu ? 200 : 50
    }, 250);

    togglemenu = !togglemenu;


  })
}
var togglemenu = true;
document.getElementsByClassName("ifmenu").contentWindow.document.getElementsByClassName("side-menu").onclick = function () {
  console.log("entraaaa");
  document.getElementsByClassName("ifmenu").animate({
    height: togglemenu ? 200 : 50
  }, 250);

  togglemenu = !togglemenu;
}