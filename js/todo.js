var TodoApp = function() {
    var myApp = null;
    var init = function() {
        ProviderDataController.getTodo(function(response){ convertData(response)})
    }
    var convertData = function(response) {
        var returnData = [];
        var data = response.data;
        for (let key in data) {
            var item = data[key]
            item.key = key;
            returnData.push(item);
        }   
        initApp(returnData);
    }
    var addNewTaskToList = function(item){
        myApp.listItem.push(item);
    };
    var initApp = function(data) {
        // local mixin
  
        myApp = new Vue({
            el: "#app",
            data: {
                newTaskName: '',
                listItem: data,
            },
            methods: {
                changeCompleted: function(i) {
                    var item = this.listItem[i];
                    ProviderDataController.updateTask(item);
                },
                submitTask: function() {
                    var myD = this;
                    var item = {
                        title: myD.newTaskName,
                        completed: false
                    }
                    this.newTaskName ='';
                    var k = ProviderDataController.putTask(item, addNewTaskToList)
                    
                }
            }
        });
    }
    return {
        init: init,
    }
}();
TodoApp.init();