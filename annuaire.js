console.log ("hello");

var form = $("#formulaire");
var bdd = $("#bdd");

//$(".form").hide();
//$("#bdd").hide();

$ ("#ajout").click(function(){

//$('#formulaire').show();
//$("#modifier").hide();
//$("#supprimer").hide();

})

var tab = []

$("#envoyer").click(function(){

	var tab2 = {

	Nom : $("#name").val(), 
	Prénom : $("#prenom").val(),
    Tél : $("tel").val(),
	email : $("mail").val(),
    Adresse : $("#rue").val(),
    Commune : $("#ville").val(),
    CodePostal : $("#cp").val(),
    Pays: $("#pays").val(),
    Type : $("#type").val(),

	}

tab.push(tab2);
console.log(tab);

JSON.stringify(tab);

localStorage.setItem("annuaire", "tab");

 $("input").val("");	

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
