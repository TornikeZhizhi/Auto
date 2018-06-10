function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}



// ScrollSpy For Nav

$(document).ready(function(){
  // Add scrollspy to <body>
  $('body').scrollspy({target: ".navbar", offset: 50});   

  // Add smooth scrolling on all links inside the navbar
  $("#myNavbar a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });
});




document.getElementById("services1").addEventListener("click",function(){

	document.getElementById("myNav").style.width = "0%"

});


document.getElementById("contact1").addEventListener("click",function(){

	document.getElementById("myNav").style.width = "0%"

});


document.getElementById("home1").addEventListener("click",function(){

	document.getElementById("myNav").style.width = "0%"

});


document.getElementById("Subm").addEventListener("click", function(event){
    event.preventDefault()
});




document.getElementById("Subm").addEventListener("click",function(){


if (document.getElementById("in_text").value.length === 0) {

	document.getElementById("text_warning").style.display = "block";

}


})

document.getElementById("Subm").addEventListener("click",function(){


if (document.getElementById("in_email").value.length === 0) {

	document.getElementById("email_warning").style.display = "block";


}


})


document.getElementById("Subm").addEventListener("click",function(){


if (document.getElementById("in_subject").value.length === 0) {

	document.getElementById("subject_warning").style.display = "block";

}


})

document.getElementById("Subm").addEventListener("click",function(){


if (document.getElementById("in_textarea").value.length === 0) {

	document.getElementById("textarea_warning").style.display = "block";

}


})


document.getElementById("Subm").addEventListener("click",function(){


if(!(document.getElementById("radio_male").checked) && !(document.getElementById("radio_female").checked)) {
 	
 		document.getElementById("in_radio").style.display = "block";

}

})

// Succes


document.getElementById("Subm").addEventListener("click",function(){


if (document.getElementById("in_textarea").value.length > 0 && 
	document.getElementById("in_subject").value.length > 0 &&
 document.getElementById("in_email").value.length > 0 && 
 document.getElementById("in_text").value.length > 0) {

	document.getElementById("succes").style.display = "block";

}


})



$(document).ready(function(){
    $("#in_text").blur(function(){
        $("#text_warning").css("display","none")
    });
});

$(document).ready(function(){
    $("#in_email").blur(function(){
        $("#email_warning").css("display","none")
    });
});

$(document).ready(function(){
    $("#in_subject").blur(function(){
        $("#subject_warning").css("display","none")
    });
});

$(document).ready(function(){
    $("#in_textarea").blur(function(){
        $("#textarea_warning").css("display","none")
    });
});



$(document).ready(function(){
    $("#radio_male").blur(function(){
        $("#in_radio").css("display","none")
    });
});
$(document).ready(function(){
    $("#radio_female").blur(function(){
        $("#in_radio").css("display","none")
    });
});