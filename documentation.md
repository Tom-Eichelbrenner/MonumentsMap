# projet clara

1) Dans l'index.html, je charge la librairie leaflet, qui permet d'avoir une carte interactive, d'y placer des curseurs etc..
2) dans map.js, je cr�e une carte sur la constante map, je sp�cifie l'endroit ou la vue sera positionn�e par d�faut, puis la carte que j'utilise, et j'y ajoute une echelle en bas a droite.
3) Je charge dans mon html papaparse, qui me permet de transformer un csv en objet javascript.
    1) pour les monuments :
        1) dans la fonction *papa.parse(monuments)*, je transforme donc mon csv 'monuments', en un objet js.
        Je r�cup�re chaque cl� de cet objet, et je boucle sur chacun des monuments, en envoyant � la fonction *putMonumentFlag* le nom du monument, sa latitude et sa longitude
        2) J'effectue une v�rification. Comme les donn�es sont parfois fausses ou incompl�tes, si la latitude ou la longitude sont manquantes, il ne se passe rien.
        Sinon, je cr�e un element ```<li></li>``` avec un id unique (un timestamp), j'ins�re dans ce ```<li></li>``` le nom du monument et une propri�t� ```onclick``` qui lancera la fonction permettant de calculer la distance entre les coordonn�es du monument en question et celles remplies par l'utilisateur.
        Je cr�e ensuite un marqueur avec comme coordonn�es celles du monument, et je lui affecte l'icone rouge ainsi qu'un popup contenant mon element ```<li></li>``` onclick.
        J'ajoute ce marqueur a une 'liste' de marqueurs.
        3) Ensuite, si l'utilisateur zoom sur la carte, une condition se lance. Si le 'niveau de zoom' est plus grand que 8, j'affiche sur la carte ma 'liste de marqueurs' monument, sinon je la cache (pour un souci de visibilit�).
    2)  Pour les mus�es :
        1) M�me fonctionnement, sauf que cette fois, j'ai besoin de classer mes mus�es par region, j'ai donc cr�e un objet r�gion, contenant toutes les r�gions avec leurs nom, latitude, longitude, et une propri�t� ```marqueurs``` qui contiendra tout les mus�es pr�sents dans cette r�gion. Je transforme mon csv en objet js, je boucle sur chacun des mus�es, et j'envoie � la fonction ```putMuseeFlag``` le nom du mus�e, sa latitude et longitude, ainsi que sa r�gion.
        2) V�rification que latitude et longitude sont d�finis, si c'est le cas :
            1) dans un premier temps, j'ajoute mon mus�e a sa r�gion avec la fonction ```addMuseeToRegion``` qui ajoute un tableau contenant le nom, la latitude et la longitude du mus�e dans la propri�t� ```marqueurs``` de la r�gion en question.
            2) je cr�e mon element ```<li></li>```, mon marqueur et ma 'liste de marqueurs' de la m�me fa�on que pour les monuments
            3) avec la fonction ``iterateRegions`` je boucle sur mon objet regions, et j'envoie la latitude, la longitude, ainsi que tout les mus�es pr�sents dans cette r�gion a ma fonction ``putRegionFlag``, je cr�e de la m�me facon mon marqueur pour cette r�gion, et j'affiche sur sa popup tous les mus�es de cette region, puis j'ajoute ce marqueur a ma 'liste de r�gions'
        3) par d�faut, comme la carte n'est pas zoom�e, j'affiche seulement un marqueur par r�gion, puis comme pour les monuments, si le zoom > 8, je cache les r�gions et affiche les mus�es.
    3) pour r�cup�rer les coordonn�es gps de l'utilisateur, j'utilise places.js, une librairie que permet d'autocompleter une adresse dans un input grace a une base de donn�e, d�s que l'utilisateur valide son adresse, j'affecte a une variable ``userCoords`` la latitude et la longitude de son adresse, et je me sert de ces valeurs pour calculer la distance s�parant l'utilisateur du lieu s�l�ctionn�.
    
CHANGEMENTS RAJOUTES POUR LES LIENS : dans putMuseeFlag

-> je r�cup�re les 3 premi�res lettres du site du mus�e, si elles sont �gales a 'htm' ou 'www', je le met dans une balise ``<a></a>``, sinon, si c'est un texte genre "voir site de la ville", je le met simplement dans une balise p