document.ready(function () {
  ".collapse.in".prev(".panel-heading").addClass("active");
  "#accordion, #bs-collapse"
    .on("show.bs.collapse", function (a) {
      a.target.prev(".panel-heading").addClass("active");
    })
    .on("hide.bs.collapse", function (a) {
      a.target.prev(".panel-heading").removeClass("active");
    });
});

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("txt").innerHTML = h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}
function checkTime(i) {
  if (i < 12) {
    i = "0" + i;
  }
  return i;
}

// var form = document.querySelector(".form");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   var name = document.getElementById("fname").value;
//   console.log(name);

//   var email = document.getElementById("femail").value;
//   console.log(email);
// });
