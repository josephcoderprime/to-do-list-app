//1. Adding a new item to the list of items:

/* function newItem
   let li = document.createElement("li");
   let inputValue = document.getElementById("input").value;
   let text = document.createTextNode(inputValue);
   li.appendChild(text); */

function newItem() {
let li = $("<li></li>");
let inputValue = $("#input").val();
li.append(inputValue);

/* if (inputValue === '') {
    alert("You must write something!");
  } else {
    let list = document.querySelector('#list');
    list.appendChild(li);
  } */

if (inputValue === "") {
  alert("You must write something!");
} else {
  $("#list").append(li);
}

//=============================================================================


//2. Crossing out an item from the list of items:

/*
function crossOut() {
   li.classList.toggle("strike");
 }

 li.addEventListener("dblclick",crossOut);
 */
function crossOut() {
  li.toggleClass("strike");
}
li.on("dblclick", function crossOut() {
  li.toggleClass("strike");
});

//=============================================================================

//3(i). Adding the delete button "X":
/*
let crossOutButton = document.createElement("crossOutButton");
 crossOutButton.appendChild(document.createTextNode("X"));
 li.appendChild(crossOutButton);
*/
let crossOutButton = $("<crossOutButton></crossOutButton>");
crossOutButton.append(document.createTextNode('X'));
li.append(crossOutButton);

//deleting list item after clicking X
/*
function deleteListItem(){
 		li.classList.add("delete")
 	}
*/
$(crossOutButton).on('click', function(){
  $(this).parent().remove();
});
//==============================================================================
  // 4. Reordering the items:
$("#list").sortable();
}
