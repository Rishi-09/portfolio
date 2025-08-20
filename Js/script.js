const about = do

window.addEventListener("wheel", function(e) {
      if (e.deltaY > 0) { // scrolling down
        window.location.href = "about.html";
      }
    });