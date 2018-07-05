console.log ("hello");

var tableau = {Nom :"", Prénom :""};// remplissage de l'objet tableau

var val = JSON.stringify(tableau);

localStorage.setItem('annuaire', val);
console.log(JSON);

$("#envoyer").click(function(){
	  var tab2 = {Nom : $("#name").val(), Prénom : $("#prenom").val()};
	$("#input").empty();// attention ne fonctionne pas
	console.log(tab2);

});





/*JSON.stringify(books); // CODE AJAX OCEANE
console.log(JSON);

$.ajax({
    url:'cheminJSON',
  data: {
    task: 'get',
  }

}).done(function() {

    alert( "success" );

}).fail(function() {

    alert( "error" );

}).always(function() {

    alert( "complete" );

});*/
