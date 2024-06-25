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

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
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
  cell1.innerHTML = "InvNew";
  cell2.innerHTML = "A/B/C/D";
  cell3.innerHTML = "Sigma";
  cell4.innerHTML = "X-X-XX";
}

function myDeleteFunction() {
  document.getElementById("container").deleteRow(2);
}

// trying some shit

$(window).on("load resize ", function() {
  var scrollWidth = $('.container').width() - $('.container table').width();
  $('.container').css({'padding-right':scrollWidth});
}).resize();