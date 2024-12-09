// Get the "See More" and "Back" buttons
const seeMoreBtn = document.querySelector('.see-more');
const backMoreBtn = document.querySelector('.back-more');

// Get the sections
const serviceSection1 = document.getElementById('our_services1');
const serviceSection2 = document.getElementById('service_section2');

// Show the second section and hide the first when "See More" is clicked
seeMoreBtn.addEventListener('click', function(event) {
    event.preventDefault();
    serviceSection1.style.display = 'block';  // Hide the first section
    serviceSection2.style.display = 'block'; // Show the second section
});

// Show the first section and hide the second when "Back" is clicked
backMoreBtn.addEventListener('click', function(event) {
    event.preventDefault();
    serviceSection2.style.display = 'none';  // Hide the second section
    serviceSection1.style.display = 'block'; // Show the first section
});


// -------------------------------------------------------------

let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");

icon.addEventListener("click", ()=>{
    ul.classList.toggle("showData");
    
    if(ul.className == "showData"){
        document.getElementById("bar").className= "material-symbols-outlined";
    }
    else{
        document.getElementById("bar").className= "material-symbols-outlined";
    }
})  


// --------------------------------

$(function() {
  
    // contact form animations
    $('#enquiry_frm').click(function() {
      $('#contactForm').fadeToggle();
    })
    $(document).mouseup(function (e) {
      var container = $("#contactForm");
  
      if (!container.is(e.target) // if the target of the click isn't the container...
          && container.has(e.target).length === 0) // ... nor a descendant of the container
      {
          container.fadeOut();
      }
    });
    
  });