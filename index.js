$("#add").click(function () {
  addList();
});
$("#duty").keyup(function (e) {
  if (e.keyCode == 13) {
    addList();
  }
});

function addList() {
  var duty = $("#duty").val();
  $("#toDoList").show();
  $("#toDoList").append(
    `<li class="list-group-item list-group-item-action">${duty}</li>`
  );
  $("#comment").text(duty);
}

var time = 1500;
var timer;
var start;

$("#start").click(function () {
  timer = setInterval(function () {
    if (time === 0) {
      clearInterval(timer);
      $("#toDoList li:last").remove();
      if ($("#toDoList li").length >= 0) {
        alert("Tebrikler! Bütün Yapılacakları Tamamladınız.");
      }
      $("#comment").empty();
      time = 1500;
    }
    $("#timer").text(`${Math.floor(time / 60)}:${time % 60}`);
    time--;
  }, 1000);
});

$("#stop").click(function () {
  clearInterval(timer);
});
