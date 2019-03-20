var skillsdata;

skillsdata = {
  "Skills": {
    "goûts": {
      "les entrée ": {
        "salade": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 25],
        "soupe": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 60, 60, 50, 40, 25],
        "avocat": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 60, 70, 50, 25],
        "velouté": [0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 50, 50, 50, 70, 25]
      },
      "plats": {
        "pizza": [0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 40, 40, 50, 50, 25],
        "couscous": [0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 40, 50, 25],
        "nouveauté": [0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 50, 60, 70, 80, 25]
      },
      "desserts": {
        "Yaourt": [0, 0, 20, 40, 50, 50, 50, 50, 60, 80, 90, 95, 95, 95, 20],
        "Matcha Cake": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 20],
        "Tartelette au caramel": [0, 0, 0, 0, 0, 40, 50, 40, 40, 30, 30, 20, 20, 10, 20],
        "Fondant au chocolat": [0, 0, 0, 0, 0, 10, 50, 50, 40, 40, 30, 20, 10, 10, 20],
        "Shake de fruits": [0, 0, 10, 30, 40, 50, 50, 40, 30, 20, 10, 5, 5, 5, 20]
      },
      "boissons": {
        "Badoit": [0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50, 45, 45, 40],
        "Thé vert": [0, 0, 0, 0, 0, 0, 0, 10, 40, 70, 60, 50, 40, 40, 40]
      }
    },


    "toucher": {
      "chaud": {
        "douce": [0, 0, 10, 30, 60, 60, 40, 20, 20, 20, 20, 20, 20, 20, 20],
        "dure": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 40]
        
      },
      "froid": {
        "douce": [0, 0, 10, 30, 50, 50, 60, 80, 90, 60, 50, 30, 30, 30, 40],
        "dure": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30],
        }
    },


    "ouïe": {
      "musique": {
        "rock": [0, 0, 10, 30, 60, 60, 40, 20, 20, 20, 20, 20, 20, 20, 20],
        "raï": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 40],
        "salsa": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 40],
        "techno": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 40],
        "jazz": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 40]  
      }
    },


    "vue": {
      "Spectacle vivant": {
        "musique": [0, 0, 10, 30, 50, 50, 60, 60, 60, 80, 80, 60, 50, 50, 60],
        "danse": [0, 0, 0, 0, 20, 20, 30, 30, 40, 30, 20, 20, 20, 20, 20],
        "théâtre": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 50],
        "Comédie": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20]
      },
      "Musées": {
        "histoire": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30]
      },
      "paysage": {
        "naturel": [0, 0, 0, 0, 0, 0, 0, 0, 10, 40, 40, 30, 25, 20, 20],
        "artificiel": [0, 0, 0, 0, 0, 0, 0, 20, 25, 30, 50, 50, 45, 40, 40]
      },
      "Film": {
        "action": [0, 0, 0, 0, 0, 10, 20, 40, 40, 40, 60, 90, 90, 90, 50],
        "Drame": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30],
        "Comédie": [0, 0, 0, 0, 0, 0, 20, 40, 40, 40, 40, 40, 50, 50, 50],
        "fantastique": [40, 50, 40, 30, 20, 10, 5, 5, 5, 5, 5, 5, 5, 5, 50],
        "d'horreur": [0, 10, 20, 50, 60, 80, 90, 80, 70, 60, 60, 60, 60, 50, 50]
      }
    },


    "odorat": {
      "parfumé": {
        "boisé": [0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 25, 20, 20, 25],
        "résineux": [0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 25, 20, 20, 25]
      },
      "sucré": {
        "écœurant": [0, 0, 0, 0, 0, 0, 0, 0, 10, 20, 30, 40, 45, 50, 55],
        "mentholé": [0, 0, 0, 0, 0, 0, 0, 0, 10, 20, 30, 30, 30, 35, 40]
      },
      "chimique": {
        "menthe poivrée": [0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 40, 50, 60, 70, 30],
        "citron": {
          "autre": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30]
        },
        "Wiki": [0, 0, 0, 0, 0, 0, 0, 0, 10, 40, 50, 40, 40, 40, 30]
      },
      "pop-corn": {
        "IaaS": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 15]
      },
      "fruité": {
        "citron": [0, 0, 0, 0, 0, 0, 0, 0, 5, 10, 5, 5, 15, 5, 25]
      }
    }
  }
};