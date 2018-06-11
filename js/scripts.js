
// function toDo(name, doBy) {
//   this.name: name;
//   this.doBy: doBY;
// }


$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    var inputItem = $("input#toDoList").val();
    var inputDate = $("input#doByDate").val();

    $("p.test").text(inputItem);
    $("p.test1").text(inputDate);
  });
});
