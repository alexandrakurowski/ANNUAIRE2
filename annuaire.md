
******************CSS********************

	td /* Toutes les cellules des tableaux... */

{

    border: 1px solid black; /* auront une bordure de 1px */

}
***********OU*****

	table
{
    border-collapse: collapse; /* Les bordures du tableau seront collées (plus joli) */
}
td
{
    border: 1px solid black;
}
******************
table
{
    border-collapse: collapse;
}
td, th /* Mettre une bordure sur les td ET les th */
{
    border: 1px solid black;
}
***************
Sachez que vous pouvez changer la position du titre avec la propriété CSScaption-sidequi peut prendre deux valeurs :

    top: le titre sera placé au-dessus du tableau (par défaut) ;

    bottom: le titre sera placé en dessous du tableau.

***********************tableau HTML***************


    l'en-tête (en haut) : il se définit avec les balises<thead></thead>;

    le corps (au centre) : il se définit avec les balises<tbody></tbody>;

    le pied du tableau (en bas) : il se définit avec les balises<tfoot></tfoot>.

Que mettre dans le pied de tableau ? Généralement, si c'est un long tableau, vous y recopiez les cellules d'en-tête. Cela permet de voir, même en bas du tableau, à quoi se rapporte chacune des colonnes. Schématiquement, un tableau en trois parties se découpe donc comme illustré à la figure suivante.
Un tableau découpé en plusieurs parties
Un tableau découpé en plusieurs parties

C'est un peu déroutant mais il est conseillé d'écrire les balises dans l'ordre suivant :

    <thead>

    <tfoot>

    <tbody>

Dans le code, on renseigne donc d'abord la partie du haut, ensuite la partie du bas, et enfin la partie principale (<tbody>). Le navigateur se chargera d'afficher chaque élément au bon endroit, ne vous inquiétez pas.

*****************Les bouttons*******************
Un bouton comme celui-là

se crée très facilement ! Il vous suffit dans votre éditeur de taper le code suivant :

<input type="button">

Ensuite vous pouvez lui affecter un nom :

code :
<input type="button" value="cliquez ici">

Vous pouvez lui affecter aussi une action (dans un formulaire) :

code :
<input type="reset" value="Effacer">

code :
<input type="submit" value="Envoyer"> 

******************barre de navigation******************

**html**
 <ul>
  <li><a href="default.html">Home</a></li>
  <li><a href="news.asp">News</a></li>
  <li><a href="contact.asp">Contact</a></li>
  <li><a href="about.asp">About</a></li>
</ul> 
*******css***http://www.w3im.com/fr/css/css_navbar.html
Créer une barre de navigation horizontale de base avec une couleur de fond sombre et changer la couleur des liens en arrière-plan lorsque l'utilisateur déplace la souris sur eux: 
 ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
}

li {
    float: left;
}

li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
    background-color: #111;
}

*************FORMULAIRE HTML**************https://developer.mozilla.org/fr/docs/Web/Guide/HTML/Formulaires/Mon_premier_formulaire_HTML


    Smashing Magazine a de très bons articles à propos de l'expérience utilisateur dans les formulaires, mais le plus intéressant est certainement leur « Guide complet pour des formulaires web facilement utilisables ».
    UXMatters est une ressource bien pensée avec de très bons conseils allant des meilleures pratiques de base jusqu'à des sujets plus complexes tels que les formulaires sur plusieurs pages.


***********https://developer.mozilla.org/fr/docs/Web/Guide/HTML/Formulaires/Les_blocs_de_formulaires_natifs
***************https://developer.mozilla.org/fr/docs/Web/Guide/HTML/Formulaires/Validation_donnees_formulaire
**********https://developer.mozilla.org/fr/docs/HTML/Formulaires/Comment_structurer_un_formulaire_HTML









