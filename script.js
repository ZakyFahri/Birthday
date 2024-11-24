// $(function(){

//     if (!$('.envelope').hasClass('open')){
//       $('.envelope').click(function(){
//         $(this).removeClass('new').addClass('open');
//       });
//     }
//   });
  

$(function(){

    // Get the audio element
    var envelopeSound = document.getElementById('envelopeSound');

    if (!$('.envelope').hasClass('open')){
      $('.envelope').click(function(){
        // Play the sound
        envelopeSound.play();
        
        // Change the envelope class
        $(this).removeClass('new').addClass('open');
      });
    }
});