
function ToDoItem(name, doBy) {
  this.name = name;
  this.doBy = doBy;
}

ToDoItem.prototype.all = function() {
  return "Do this: " + this.name + " By: " + this.doBy;
}

$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    var inputItem = $("input#toDoList").val();
    var inputDate = $("input#doByDate").val();

    var toDo = new ToDoItem(inputItem, inputDate);

    //$("p.test").text("HELLO");
    $("p.test1").text(toDo.all());
  });
});
