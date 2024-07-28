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
  
  
  // popup when investors list is clicked //
  
  function InsRow() {
    var table = document.getElementById("container");
    var row = table.insertRow(1);
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
      <button class="edit-btn" onclick="editBtn()">Edit</button>
      <div class="outer" style="clear: both;display: none;">
        <div class="inner">
          <form class="InvTab">
          <br>
            <input type="text" placeholder="Investor Name" style="display: inline; float: left; width: auto;">
            <div class="Risklevel">
              <label for="Risk">Risk</label>
              <select>
                <option>Choose Risk Level</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
              <br>
            </div>
            <br><br>
            <div class="Contact_WhenDue_Lastreviewanddonebywho">
              <!-- Contact + When Due + Last review and done by who -->
                <br>
                <label for="contactdetails" class="contactdetails"></label>
                <input type="email" placeholder="Contact Details">
                <br><br><br>
                <label for="duedate" class="duedate"></label>
                <input type="date" placeholder="dd/mm/yyyy">
                <br><br><br>
                  <label for="lastreviewdate" class="lastreviewdate">Date of Last Review</label>
                  <input type="date" placeholder="dd/mm/yyyy">
                  <label for="personcompletedlastreview" class="personcompletedlastreview"> Completed by: </label>
                  <input type="text" placeholder="John Doe">
                  <br><br>
            </div>
            <br><br>
            <button type="button" class="InvPopOp" onclick="closeBtn()" style="font-size=20px;">🔙</button>
            <input type="submit" value="Submit" class="submitpopup">
            
  
  
            <br><br>
          </form>
          <button class="delete-btn">Delete</button>
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


  document.addEventListener("DOMContentLoaded", () => {
    const setCredentialsForm = document.getElementById("set-credentials-form");
    const setCredentialsButton = document.getElementById("set-credentials-form-submit");
    const setUsernameMsg = document.getElementById("set-username-msg");
    const setPasswordMsg = document.getElementById("set-password-msg");
    const setEmailMsg = document.getElementById("set-email-msg");


    if (setCredentialsButton) {
        setCredentialsButton.addEventListener("click", (e) => {
            e.preventDefault();
            console.log("Set Credentials button clicked");
            const newUsername = setCredentialsForm["new-username"].value;
            const newPassword = setCredentialsForm["new-password"].value;
            const newEmail = setCredentialsForm["new-email"].value;

            let valid = true;

            if (newUsername) {
                localStorage.setItem("username", newUsername);
                setUsernameMsg.textContent = "Username has been set successfully.";
                setUsernameMsg.style.color = "green";
            } else {
                setUsernameMsg.textContent = "Please enter a valid username.";
                setUsernameMsg.style.color = "red";
                valid = false;
            }

            if (newPassword) {
                localStorage.setItem("password", newPassword);
                setPasswordMsg.textContent = "Password has been set successfully.";
                setPasswordMsg.style.color = "green";
            } else {
                setPasswordMsg.textContent = "Please enter a valid password.";
                setPasswordMsg.style.color = "red";
                valid = false;
            }

            function validateEmail(newEmail) {
              var re = /\S+@\S+\.\S+/;
              return re.test(newEmail);
            }

            if(validateEmail(newEmail)){
              localStorage.setItem("email", newEmail);
              setEmailMsg.textContent = "Email has been set successfully.";
              setEmailMsg.style.color = "green";
            } else{
              setEmailMsg.textContent = "Please enter a valid email.";
              setEmailMsg.style.color = "red";
              valid = false;
            }
        });
    } else {
        console.error("setCredentialsButton is null");
    }
});
