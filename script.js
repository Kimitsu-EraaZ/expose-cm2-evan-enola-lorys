/** Last Updated: 7/2020 **/

$(document).ready(function () {
  // content button toggle
  $(".content-class").hide();
  $(".button-class").click(function () {
    $(this).text($(this).text() === "Open Article +" ? "" : "Cacher ou Montrer la réponse +");
    $(".content-class").slideToggle(900);
  });
});

/*
Walkthrough with notes:

$( document ).ready(function() {
	// content button toggle
 	$(".content-class").hide(); // start hidden - will likely flash on initial load, so if your project does this above the fold, consider accounting for that
  $(".button-class").click( function(){
		// on clicking the element with this class:
	  $(this).text( $(this).text() === "Open Article +" ? "Close Article -" : "Open Article +" ); // first, change the text of the button, toggling between the two texts each time it's clicked
	  $(".content-class").slideToggle(900); // AND then, apply a slide toggle - this is a neat jQuery method that not only toggles the reveal on and off, but applies a slide animation with the duration applied in the parentheses.
  } );
});

remember to replace the instances of '$' with 'jQuery' for WordPress or other frameworks/CMS's/etc that incorporate jQuery in compatibility mode - or, add the $ into the function parentheses

Also, those class names aren't the worst, but they're pretty vague. Do Future You a solid, rename them to fit your project!
*/

