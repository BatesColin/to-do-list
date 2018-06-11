
function ToDoItem(name, doBy) {
  this.name = name;
  this.doBy = doBy;
}

ToDoItem.prototype.all = function() {
  return "Do this: " + this.name + " By: " + this.doBy;
}

function resetFields() {
    $("input#toDoList").val("");
    $("input#doByDate").val("");

}


$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

  var toDo;
    $(".taskInfo").each(function() {
      var inputItem = $(this).find("input#toDoList").val();
      var inputDate = $(this).find("input#doByDate").val();

      toDo = new ToDoItem(inputItem, inputDate);
      //arr.push(toDo);
    });



  //  $("p.test").text();
    $("ul#lists").append("<li><span class='list'>" + toDo.name + "</span></li>");


$(".list").last().click(function() {

  $(".output").show();
  $(".do-output").text(toDo.name);
  $(".date-output").text(toDo.doBy);

 $("ul#addresses").text("");
//   newContact.addresses.forEach(function(address) {
//     $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
  });
resetFields()
});
  });
