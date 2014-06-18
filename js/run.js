/*

  Developed by Greg Leuch <http://gleu.ch>.

  -----------------------------------------------------------------------------


*/



var removeGoogleDood = function() {
  var ids = ['dood', 'hplogo', 'gbq1'];
  for (var i=0; i < ids.length; i++) {
    try {
      var el = document.getElementById( ids[i] );
      el.parentElement.removeChild(el);
    } catch(e) {}
  }
}

document.addEventListener("DOMContentLoaded", function(e) {
  setInterval(function() { removeGoogleDood(); },1000);
  removeGoogleDood();
});

window.onload = function() { removeGoogleDood(); };