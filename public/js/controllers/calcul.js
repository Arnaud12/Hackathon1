$(document).ready(function() {
    $("#theDistance").on('click', function() {

        function reqListener() {
            var reqReponse = JSON.parse(this.responseText);
            var distance = reqReponse.rows[0].elements[0].distance.value;
            distance = distance / 1000;
            document.getElementById('Resultat').innerHTML = "<br>Bonjour, il y a " + distance + "km entre " + arrivalCity + " et "+startCity+"";

        }

        // la variable city récupère la ville rentrée dans le fomulaire
        var arrivalCity = document.getElementById("arrivalCity").value;
        var startCity = document.getElementById("startingCity").value;


        // requête sur l'api weathermap avec la variable city et l'api key

        var req = new XMLHttpRequest();
        req.onload = reqListener;
        req.open('GET', 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=' + startCity + '&destinations=' + arrivalCity + '&language=fr-FR', false);
        req.send();



    });
});

}
