 var FirebaseController = function() {
    var init = function(firebase) {
        var config = {
            apiKey: "AIzaSyC-aPiAXJ7OlW5LjHpF6Z_Reyndov-mH3M",
            authDomain: "areautente-237ba.firebaseapp.com",
            databaseURL: "https://areautente-237ba.firebaseio.com",
            projectId: "areautente-237ba",
            storageBucket: "areautente-237ba.appspot.com",
            messagingSenderId: "201244623369"        
          };
          firebase.initializeApp(config);
    }
    return {
        init: init,
    }
 }();
 FirebaseController.init(firebase);