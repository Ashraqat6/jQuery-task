$(function(){
let addButton= $("#btnAdd");
let taskDiv=$(".taskBox");
addButton.click(function(){
    let taskValue=$("#taskInput").val();
//ADD BUTTON
    let newDiv=$("<div></div>");
    let bigDiv=$("<div></div>");
    newDiv.text(taskValue);
    newDiv.addClass("task");
    bigDiv.append(newDiv);
//DONE BUTTON
    let doneButton=$("<button></button>");
    doneButton.text("Done");
    doneButton.addClass("done");
    bigDiv.append(doneButton);
    doneButton.click(function(){
        $(this).parent().addClass("TaskDone");
    })
//DELETE BUTTON
    let deleteButton=$("<button></button>");
    deleteButton.text("Delete");
    deleteButton.addClass("delete")
    bigDiv.append(deleteButton);
    deleteButton.click(function(){
        $(this).parent().remove();
    })
taskDiv.append(bigDiv);
});
})