# projet clara

1) Dans l'index.html, je charge la librairie leaflet, qui permet d'avoir une carte interactive, d'y placer des curseurs etc..
2) dans map.js, je crée une carte sur la constante map, je spécifie l'endroit ou la vue sera positionnée par défaut, puis la carte que j'utilise, et j'y ajoute une echelle en bas a droite.
3) Je charge dans mon html papaparse, qui me permet de transformer un csv en objet javascript.
    1) pour les monuments :
        1) dans la fonction *papa.parse(monuments)*, je transforme donc mon csv 'monuments', en un objet js.
        Je récupère chaque clé de cet objet, et je boucle sur chacun des monuments, en envoyant à la fonction *putMonumentFlag* le nom du monument, sa latitude et sa longitude
        2) J'effectue une vérification. Comme les données sont parfois fausses ou incomplètes, si la latitude ou la longitude sont manquantes, il ne se passe rien.
        Sinon, je crée un element ```<li></li>``` avec un id unique (un timestamp), j'insère dans ce ```<li></li>``` le nom du monument et une propriété ```onclick``` qui lancera la fonction permettant de calculer la distance entre les coordonnées du monument en question et celles remplies par l'utilisateur.
        Je crée ensuite un marqueur avec comme coordonnées celles du monument, et je lui affecte l'icone rouge ainsi qu'un popup contenant mon element ```<li></li>``` onclick.
        J'ajoute ce marqueur a une 'liste' de marqueurs.
        3) Ensuite, si l'utilisateur zoom sur la carte, une condition se lance. Si le 'niveau de zoom' est plus grand que 8, j'affiche sur la carte ma 'liste de marqueurs' monument, sinon je la cache (pour un souci de visibilité).
    2)  Pour les musées :
        1) Même fonctionnement, sauf que cette fois, j'ai besoin de classer mes musées par region, j'ai donc crée un objet région, contenant toutes les régions avec leurs nom, latitude, longitude, et une propriété ```marqueurs``` qui contiendra tout les musées présents dans cette région. Je transforme mon csv en objet js, je boucle sur chacun des musées, et j'envoie à la fonction ```putMuseeFlag``` le nom du musée, sa latitude et longitude, ainsi que sa région.
        2) Vérification que latitude et longitude sont définis, si c'est le cas :
            1) dans un premier temps, j'ajoute mon musée a sa région avec la fonction ```addMuseeToRegion``` qui ajoute un tableau contenant le nom, la latitude et la longitude du musée dans la propriété ```marqueurs``` de la région en question.
            2) je crée mon element ```<li></li>```, mon marqueur et ma 'liste de marqueurs' de la même façon que pour les monuments
            3) avec la fonction ``iterateRegions`` je boucle sur mon objet regions, et j'envoie la latitude, la longitude, ainsi que tout les musées présents dans cette région a ma fonction ``putRegionFlag``, je crée de la même facon mon marqueur pour cette région, et j'affiche sur sa popup tous les musées de cette region, puis j'ajoute ce marqueur a ma 'liste de régions'
        3) par défaut, comme la carte n'est pas zoomée, j'affiche seulement un marqueur par région, puis comme pour les monuments, si le zoom > 8, je cache les régions et affiche les musées.
    3) pour récupérer les coordonnées gps de l'utilisateur, j'utilise places.js, une librairie que permet d'autocompleter une adresse dans un input grace a une base de donnée, dès que l'utilisateur valide son adresse, j'affecte a une variable ``userCoords`` la latitude et la longitude de son adresse, et je me sert de ces valeurs pour calculer la distance séparant l'utilisateur du lieu séléctionné.
    
CHANGEMENTS RAJOUTES POUR LES LIENS : dans putMuseeFlag

-> je récupère les 3 premières lettres du site du musée, si elles sont égales a 'htm' ou 'www', je le met dans une balise ``<a></a>``, sinon, si c'est un texte genre "voir site de la ville", je le met simplement dans une balise p