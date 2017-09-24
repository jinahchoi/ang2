var Test = function(){
    var num1 = 1;
    var num2 = 2;

    this.plus = function(){
        return num1 + num2;
    }
    this.alertStr = function(param1, param2){
        var str = param1 + param2;
        //alert(plus());
        alert(param2); //손형정 //
    }
}

var Test2 = function(){
    this.alertStr = function(){
        alert('test2');
    }
}

var obj = {};