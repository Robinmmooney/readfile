var fs = require('fs');

fs.readFile('departments.txt', 'utf8', function(err1, data1){
    fs.readFile('employees.txt', 'utf8', function(err2, data2){
    fs.readFile('salaries.txt', 'utf8', function(err3, data3){
  // fs.readFile('depemp.txt', 'utf8', function(err4, data4){
    if(err1|| err2 || err3 ){
         throw new Error;
    }
     let data = data1+data2+data3;
       var arraydat  = data1.split('\n' );
       var arraydat1  = data2.split('\n' );
       var arraydat2  = data3.split('\n' );
   //    var arraydat3  = data4.split('\n' );
  //   var result = data1.replace(/('')/g, '');
  //   var result = data2.replace(/('')/g, '');
  //   var result = data3.replace(/('')/g, '');    
//    var spawn = require('child_process').spawn;
//    var sortProcess =spawn('sort', ['departments.txt']);
//    var sortProcess =spawn('sort', ['salaries.txt']);
//    var sortProcess =spawn('sort', ['depemp.txt']);
//    sortProcess.stdout.setEncoding('utf8');
   // console.log(arraydat, '+', arraydat1 );
    
    for (var i = 0; i < arraydat.length; i++) {
     console.log("Department Number ", arraydat[i], "\n","Employee Number:", arraydat1[i], "\n","Employee Salary",  arraydat2[i], "\n");
             };
          });
      });
    });
//});