fetch("zenbnb.json")
    .then(function (response) {

        if (!response.ok) {

            throw new Error("Attention : le fichier n'est pas chargé");
        }

        return response.json();
    })
    .then(function (data) {
        // === AFFICHAGE DES PRODUITS ===

        // On récupère l'endroit dans le HTML où on veut afficher les produits
        let logementContainer = document.getElementById("logement");

        // On parcourt chaque produit dans la liste
        for (let i = 0; i < data.listings.length; i++) {
            let logements = data.listings[i]; // un seul produit
            //si les notes du logements sont superieur a 4
            if (logements.rating > 4) {
                // On crée un bloc HTML pour ce produit
                let div = document.createElement("div"); // <div></div>
                // On prépare le contenu du produit avec son nom, sa description, etc.
                let html = "<h2>" + logements.title + "</h2>";
                html += "<p><strong>Ville :</strong> " + logements.city + "</p>";
                html += "<p><strong>Prix par nuit :</strong> " + logements.price_per_night + " €</p>";
                html += "<p><strong>Note :</strong> " + logements.rating + "</p>";
                html += "<img src='" + logements.image + "' />";
                // On met ce contenu dans le <div>
                div.innerHTML = html;

                // Et on l'ajoute dans la page
                logementContainer.appendChild(div);
            }


        }
    })
