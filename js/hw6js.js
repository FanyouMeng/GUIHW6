//
// Name: Fanyou Meng
// Email: Fanyou_Meng@student.uml.edu
//
// 91.61 GUI Programming I
// Assignment 6:  Creating an Interactive Dynamic Table
// Description: This is the javascript file for Assignment 6.
// It tries to check the user's inputs and generate the final table.

function myFunction() {

  var input = document.getElementById("myForm").elements.namedItem("Hlower").value;

  var x = parseInt(input, 10);

  if (isNaN(x)) {
    alert("The horizontal lower bonding number must be a number.");
    return false;
  }
  if (x < 1)
  {
    alert("The horizontal lower bonding number must be greater than or equal to 1.");
    return false;
  }
  else if (x > 500)
  {
    alert("The horizontal lower bonding number must be lower than or equal to 500.");
    return false;
  }

  input = document.getElementById("myForm").elements.namedItem("Hlarger").value;
  var y = parseInt(input, 10);
  if (isNaN(y)) {
    alert("The horizontal larger bonding number must be a number.");
    return false;
  }
  if (y < 1)
  {
    alert("The horizontal larger bonding number must be greater than or equal to 1.");
    return false;
  }
  else if (y > 500)
  {
    alert("The horizontal larger bonding number must be lower than or equal to 500.");
    return false;
  }

  if (x > y)
  {
    alert("The horizontal lower bonding number must be lower than or equal to the horizontal larger bonding number.");
    return false;
  }

  var input = document.getElementById("myForm").elements.namedItem("Vlower").value;
  z = parseInt(input, 10);
  if (isNaN(z)) {
    alert("The vertical lower bonding number must be a number.");
    return false;
  }
  if (z < 1)
  {
    alert("The vertical lower bonding number must be greater than or equal to 1.");
    return false;
  }
  else if (z > 500)
  {
    alert("The vertical lower bonding number must be lower than or equal to 500.");
    return false;
  }

  input = document.getElementById("myForm").elements.namedItem("Vlarger").value;
  var w = parseInt(input, 10)
  if (isNaN(w)) {
    alert("The vertical larger bonding number must be a number.");
    return false;
  }
  if (w < 1)
  {
    alert("The vertical larger bonding number must be greater than or equal to 1.");
    return false;
  }
  else if (w > 500)
  {
    alert("The vertical larger bonding number must be lower than or equal to 500.");
    return false;
  }

  if (z > w)
  {
    alert("The vertical lower bonding number must be lower than or equal to the vertical larger bonding number.");
    return false;
  }

  //gengerate the table

  var horizontal = [];
  var i;
  var lower = x;

  for (i = 0; i < (y-x+1) ;i++) {
      horizontal[i] = lower+i;
  }
  var vertical = [];
  lower = z;
  for (i = 0; i < (w-z+1) ;i++) {
      vertical[i] = lower+i;
  }

  var textNode;
  var j;

  var oldForm = document.getElementById("demo");
  if (oldForm != null){
    oldForm.parentNode.removeChild(oldForm);
  }
document.getElementById("box").innerHTML = "<table class=\"table table-dark table-striped table-bordered\" id=\"demo\"></table>";
  //create thead
  textnode = vertical[i];
  var headElem = document.createElement('thead');
  var rowHeadElem = document.createElement('tr');
  var head = document.createElement('th');
  head.appendChild(document.createTextNode('#'));
  rowHeadElem.appendChild(head);

  for (j = 0; j < horizontal.length; j++)
  {
    textNode = horizontal[j];
    head = document.createElement('th');
    head.appendChild(document.createTextNode(textNode));
    rowHeadElem.appendChild(head);
  }
  headElem.appendChild(rowHeadElem);
  document.getElementById("demo").appendChild(headElem);


  // generate table nodes
  var tableBody = document.createElement('tbody');
  for (i = 0; i < vertical.length; i++)
  {
    // <th scope="row">2</th>
    textNode = vertical[i];
    head = document.createElement('th');
    head.appendChild(document.createTextNode(textNode));
    rowElem = document.createElement('tr');
    rowElem.appendChild(head);
    for (j = 0; j < horizontal.length; j++)
    {
      textNode = vertical[i]*horizontal[j];
      colElem = document.createElement('td');
      colElem.appendChild(document.createTextNode(textNode));
      rowElem.appendChild(colElem);
    }
    tableBody.appendChild(rowElem);
  }

  document.getElementById("demo").appendChild(tableBody);
}
