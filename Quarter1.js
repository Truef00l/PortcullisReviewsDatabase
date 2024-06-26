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

// Table of investors

function InsRow() {
  var table = document.getElementById("container");
  var row = table.insertRow(2);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  cell1.innerHTML = "InvNew";
  cell2.innerHTML = "A/B/C/D";
  cell3.innerHTML = "Sigma";
  cell4.innerHTML = "X-X-XX";
  cell5.innerHTML = 
  
  `<button onclick="InvPop()">Edit</button>
    <div class="outer" style="clear: both;display: none;" id="InvPop">
      <div class="inner">Some Text!
        <button type="button" onclick="InvPopOp()"> X </button>
      </div>
    </div>
`
}

function myDeleteFunction() {
  document.getElementById("container").deleteRow(2);
}

// trying some shit

$(window).on("load resize ", function() {
  var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
  $('.tbl-header').css({'padding-right':scrollWidth});
}).resize();

// popup when investors list is clicked //

function InsRow() {
  var table = document.getElementById("container");
  var row = table.insertRow(2);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  cell1.innerHTML = "New Inv";
  cell2.innerHTML = "Undefined";
  cell3.innerHTML = "X/X/XXXX";
  cell4.innerHTML = "X/X/XXXX";
  cell5.innerHTML = `
    <button class="edit-btn">Edit</button>
    <div class="outer" style="clear: both;display: none;">
      <div class="inner">
        <form class="InvTab">
          <input type="text" placeholder="Investor Name" style="display: inline; float: left; width: auto;">
          <div class="Risklevel">
            <label for="Risk">Risk</label>
            <select>
              <option>Choose Risk Level</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
          <br><br><br>
          <input type="submit" value="Submit" style="display: inline; float: left; width: auto;">
        </form>
        <button type="button" class="InvPopOp">X</button>
      </div>
    </div>
  `;
  
  // Attach event listeners to the new row
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
    // Handle form submission here
    var popup = this.closest('.outer');
    popup.style.display = "none";
  });
}
  
