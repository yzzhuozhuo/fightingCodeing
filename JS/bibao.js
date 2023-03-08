

var data = [];
for (var i = 0; i < 3; i++) {
    (function(j){
      setTimeout(data[j] = function () {
        console.log(j);
      }, 0)
    })(i)
}

data[0]();
data[1]();
data[2]()
