    function openNav() {
      document.getElementById("mySidepanel").style.width = "10%";
      document.getElementById("main").style.marginLeft = "10%";
    }
    function closeNav() {
      document.getElementById("mySidepanel").style.width = "0";
      document.getElementById("main").style.marginLeft= "0";
    }

    document.addEventListener("DOMContentLoaded", function() {
      document.querySelector(".closebtn").addEventListener("click", closeNav);
  });
  document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".openbtn").addEventListener("click", openNav);
});

