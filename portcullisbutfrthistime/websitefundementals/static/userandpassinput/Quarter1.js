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



function toggleDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

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



let tableData = [];

// Save local storage
function saveTableDataToLocalStorage() {
    localStorage.setItem('tableData', JSON.stringify(tableData));
}

// Load local storage
function loadTableDataFromLocalStorage() {
    const storedData = localStorage.getItem('tableData');
    if (storedData) {
        tableData = JSON.parse(storedData);
        tableData.forEach(rowData => {
            addRow(rowData);
        });
    }
}

// Add a row
function addRow(rowData = {}) {
    var tableBody = document.getElementById("container").getElementsByTagName('tbody')[0];
    var row = tableBody.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    cell1.innerHTML = rowData.investorName || "New Inv";
    cell2.innerHTML = rowData.riskLevel || "Undefined";
    cell3.innerHTML = rowData.lastReviewDate ? rowData.lastReviewDate + '<br>' + (rowData.completedBy || "") : "MM/YYYY";
    cell4.innerHTML = rowData.dueDate || "MM/YYYY";
    cell4.className = 'duedate';
    cell5.innerHTML = rowData.contactDetails || "example@domain.com";
    cell6.innerHTML = `
        <button class="edit-btn">Edit</button>
        <div class="outer" style="display: none;">
            <div class="inner" style="justify-content:center">
                <form class="InvTab">
                    <br>
                    <input type="text" name="investorName" placeholder="Investor Name" value="${rowData.investorName || ""}" style="display: inline; float: left; width: auto;">
                    <div class="Risklevel">
                        <label for="Risk">Risk</label>
                        <select name="riskLevel">
                            <option>Choose Risk Level</option>
                            <option value="High" ${rowData.riskLevel === "High" ? "selected" : ""}>High</option>
                            <option value="Medium" ${rowData.riskLevel === "Medium" ? "selected" : ""}>Medium</option>
                            <option value="Low" ${rowData.riskLevel === "Low" ? "selected" : ""}>Low</option>
                        </select>
                        <br>
                    </div>
                    <br><br>
                    <div class="Contact_WhenDue_Lastreviewanddonebywho">
                        <br>
                        <label for="contactdetails" class="contactdetails"></label>
                        <input type="email" name="contactDetails" placeholder="Contact Details" value="${rowData.contactDetails || ""}">
                        <br><br><br>
                        <label for="duedate" class="duedate"></label>
                        <input type="month" name="dueDate" value="${rowData.dueDate || ""}">
                        <br><br><br>
                        <label for="lastreviewdate" class="lastreviewdate">Date of Last Review</label>
                        <input type="month" name="lastReviewDate" value="${rowData.lastReviewDate || ""}">
                        <label for="personcompletedlastreview" class="personcompletedlastreview"> Completed by: </label>
                        <input type="text" name="completedBy" placeholder="John Doe" value="${rowData.completedBy || ""}">
                        <br><br>
                    </div>
                    <br><br>
                    <button type="button" class="InvPopOp" style="font-size=20px;">🔙</button>
                    <input type="submit" value="Submit" class="submitpopup">
                    <br><br>
                </form>
                <button type="button" class="delete-btn">Delete</button>
            </div>
        </div>
    `;
    attachRowEventListeners(row);
    getDuedateValues(); // Update the duedateofreview array after adding a new row
}

function getDuedateValues() {
    const duedateElements = document.querySelectorAll('.duedate');
    const duedateofreview = Array.from(duedateElements).map(element => element.innerText);
    console.log(duedateofreview);
    return duedateofreview;
}

function InsRow() {
    addRow();
    tableData.push({
        investorName: "New Inv",
        riskLevel: "Undefined",
        lastReviewDate: "X/X/XXXX",
        dueDate: "X/X/XXXX",
        contactDetails: "example@domain.com",
        completedBy: ""
    });
    saveTableDataToLocalStorage();
}

function attachRowEventListeners(row) {
    var editBtn = row.querySelector('.edit-btn');
    var closeBtn = row.querySelector('.InvPopOp');
    var form = row.querySelector('.InvTab');
    var deleteBtn = row.querySelector('.delete-btn');

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

    deleteBtn.addEventListener('click', function() {
        deleteRow(row);
    });
}

function updateRow(form, row) {
    var formData = new FormData(form);
    row.cells[0].innerText = formData.get('investorName');
    row.cells[1].innerText = formData.get('riskLevel');
    row.cells[2].innerHTML = formData.get('lastReviewDate') + '<br>' + formData.get('completedBy');
    row.cells[3].innerText = formData.get('dueDate');
    row.cells[3].className = 'duedate';
    row.cells[4].innerText = formData.get('contactDetails');

    var rowIndex = row.rowIndex - 1;
    tableData[rowIndex] = {
        investorName: formData.get('investorName'),
        riskLevel: formData.get('riskLevel'),
        lastReviewDate: formData.get('lastReviewDate'),
        dueDate: formData.get('dueDate'),
        contactDetails: formData.get('contactDetails'),
        completedBy: formData.get('completedBy')
    };
    saveTableDataToLocalStorage();
    getDuedateValues(); // Update the duedateofreview array after updating a row
}

function deleteRow(row) {
    var rowIndex = row.rowIndex - 1;
    tableData.splice(rowIndex, 1);
    row.parentNode.removeChild(row);
    saveTableDataToLocalStorage();
    getDuedateValues(); // Update the duedateofreview array after deleting a row
}

function myDeleteFunction() {
    var table = document.getElementById("container");
    var rowCount = table.rows.length;
    if (rowCount > 1) {
        var row = table.rows[rowCount - 1];
        deleteRow(row);
    }
}

// Load data when the page loads
window.onload = function() {
    loadTableDataFromLocalStorage();
    getDuedateValues(); // Call this function to initialize the duedateofreview array
};

