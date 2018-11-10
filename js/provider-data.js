var ProviderDataController = function() {
    /*var init = function(firebase) {
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
    var isLogged = function() {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
              // Your code here
              console.log(user)
            } else {
                console.log("NOT LOGGED")
            }
        });
    }
   */
    var getTodo = function(success) {   
        var urlGet = 'https://areautente-237ba.firebaseio.com/todos.json';
        axios.get(urlGet)
        .then(success);
    }
    var putTask = function(task, success) {
        var urlGet = 'https://areautente-237ba.firebaseio.com/todos.json';
        axios.post(urlGet, task)
        .then(function(response){
            task.key = response.data.name;
            success(task);
        })
        .catch(function (error) {
            console.log(error);
        })
    };
    var updateTask = function(task, success) {
        var urlGet = 'todos/' + task.key;
        var db = firebase.database();
        db.ref(urlGet).update({ completed: task.completed });
    }
    return {
        //init: init,
        //isLogged: isLogged,
        //getData: getData,
        getTodo:getTodo,
        putTask: putTask,
        updateTask: updateTask,
    }
    
}();