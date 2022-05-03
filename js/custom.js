//click ontop
var fixed = document.querySelector('.fixed');
var mybutton = document.getElementById("back-to-top");
window.onscroll = function() {
  scrollFunction()
};

// Bind your button click, scroll direction and effect speed
document.getElementById("back-to-top").onclick = function() {
  topFunction(); 
}
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    fixed.style.boxShadow = "0 0 3px #2c1818";
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
    fixed.style.boxShadow = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;  
  document.documentElement.scrollTop = 0;
}


$(document).ready(function(){
  $('.tut-step').click(function(){
      index = $(this).index();
      $('.tut-step').removeClass('active');
      $(this).addClass('active');
      console.log(index);
      $('.img-step img').removeClass('active');
      document.querySelectorAll('.img-step img')[index].className = 'active';
  })

});
  