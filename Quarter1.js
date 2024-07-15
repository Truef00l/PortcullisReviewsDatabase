function openNav() {
  document.getElementById("mySidebar").style.width = "200px";
  document.getElementById("main").style.marginLeft = "200px";
  document.getElementById("maincontent").style.marginLeft = "200px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.getElementById("maincontent").style.marginLeft= "0";

}

/* Title/dropbar code */ 

function toggleDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function myDeleteFunction() {
  var table = document.getElementById("container");
  var rowCount = table.rows.length;
  if (rowCount > 1) { // Ensure there is at least one row besides the header
      table.deleteRow(rowCount - 1); // Delete the last row
  }
}


// popup when investors list is clicked //

function InsRow() {
  var tableBody = document.getElementById("container").getElementsByTagName('tbody')[0];
  var row = tableBody.insertRow(-1); // Insert row at the end
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5)
  cell1.innerHTML = "New Inv";
  cell2.innerHTML = "Undefined";
  cell3.innerHTML = "X/X/XXXX";
  cell4.innerHTML = "X/X/XXXX";
  cell5.innerHTML = "example@domain.com"
  cell6.innerHTML = 
  
  `
      <button class="edit-btn">Edit</button>
      <div class="outer">
          <div class="inner" style="justify-content:center">
              <form class="InvTab">
                  <br>
                  <input type="text" name="investorName" placeholder="Investor Name" style="display: inline; float: left; width: auto;">
                  <div class="Risklevel">
                      <label for="Risk">Risk</label>
                      <select name="riskLevel">
                          <option>Choose Risk Level</option>
                          <option value="High">High</option>
                          <option value="Medium">Medium</option>
                          <option value="Low">Low</option>
                      </select>
                      <br>
                  </div>
                  <br><br>
                  <div class="Contact_WhenDue_Lastreviewanddonebywho">
                      <br>
                      <label for="contactdetails" class="contactdetails"></label>
                      <input type="email" name="contactDetails" placeholder="Contact Details">
                      <br><br><br>
                      <label for="duedate" class="duedate"></label>
                      <input type="date" name="dueDate" placeholder="dd/mm/yyyy">
                      <br><br><br>
                      <label for="lastreviewdate" class="lastreviewdate">Date of Last Review</label>
                      <input type="date" name="lastReviewDate" placeholder="dd/mm/yyyy">
                      <label for="personcompletedlastreview" class="personcompletedlastreview"> Completed by: </label>
                      <input type="text" name="completedBy" placeholder="John Doe">
                      <br><br>
                  </div>
                  <br><br>
                  <button type="button" class="InvPopOp" style="font-size=20px;">🔙</button>
                  <input type="submit" value="Submit" class="submitpopup">
                  <br><br>
              </form>
              <button class="delete-btn">Delete</button>
          </div>
      </div>
  `;
  attachRowEventListeners(row);
}

function attachRowEventListeners(row) {
  var editBtn = row.querySelector('.edit-btn');
  var closeBtn = row.querySelector('.InvPopOp');
  var form = row.querySelector('.InvTab');

  editBtn.addEventListener('click', function() {
      var popup = this.nextElementSibling;
      popup.style.display = popup.style.display === "none" ? "flex" : "none";
  });

  closeBtn.addEventListener('click', function() {
      var popup = this.closest('.outer');
      popup.style.display = "none";
  });

  form.addEventListener('submit', function(e) {
      e.preventDefault();
      var popup = this.closest('.outer');
      updateRow(this, row);
      popup.style.display = "none";
  });
}

function updateRow(form, row) {
  var formData = new FormData(form);
  row.cells[0].innerText = formData.get('investorName');
  row.cells[1].innerText = formData.get('riskLevel');
  row.cells[2].innerHTML = formData.get('lastReviewDate') + '<br>' + formData.get('completedBy');
  row.cells[3].innerText = formData.get('dueDate');
  row.cells[4].innerText = formData.get('contactDetails')
}


function myDeleteFunction() {
  var table = document.getElementById("container");
  var rowCount = table.rows.length;
  if (rowCount > 1) { // Ensure there is at least one row besides the header
      table.deleteRow(rowCount - 1); // Delete the last row
  }
}