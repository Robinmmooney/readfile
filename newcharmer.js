var fs = require('fs');

//step 1 : create all single-d and multio-d arrays asempty arrays(initially)
    //push single string data/elements into arrasy as a single element 
    //push array data into an array to form multi-d arrays

//var business = "Dept Co.";
// single dimension arrays
var departmentID = []; 
var departments = [];

//multidimensional arrays (currently single-d, must change later)
var employeeID = [];
var salaries = [];
var employeeName = [];

//process the file 'departments.txt'
fs.readFile('departments.txt', 'utf8', function(err, data){
    if (err) throw err;

    
    //remove the uneeded first line 
    var deptDataClean = data.replace(/INSERT INTO `departments` VALUES /g, " ");
    
    //convert cleaned data into a temporary array
        var deptDataArray = deptDataClean.split('\n');
        deptDataArray.shift();
        
        for (var i = 0; i < deptDataArray.length; i++) {
         //   var deptID = 
          //  console.log(deptID);
            
         departmentID.push(deptDataArray[i].slice(2,6));
         departments.push(deptDataArray[i].slice(9,-3));
        }
        
        //create multi-d arrays using the length of the number of departments
        for (var i = 0; i < deptDataArray.length; i++) {
            employeeID.push([]);
            employeeName.push([]);
            salaries.push([]);
        }      


});
// process the file "depemp.txt"
//(10002,'d007','1996-08-03','9999-01-01'),
// multi-d array = employeeID
fs.readFile('depemp.txt', 'utf8', function(err, data){
    if (err) throw err;
    var employeeDataClean = data.replace(/INSERT INTO `depemp` VALUES /g, " ");
    
    var employeeDataArray = employeeDataClean.split('\n');
    for (var i = 0; i < employeeDataArray.length; i++) {
        if(employeeDataArray[i].slice(28,32) == '9999') {
           // console.log(employeeDataArray[i].slice(8,12));
           // console.log(departmentID.indexOf(employeeDataArray[i].slice(8,12)));
         //   console.log(employeeDataArray[i].slice(1,6));
            employeeID[departmentID.indexOf(employeeDataArray[i].slice(8,12))].push (employeeDataArray[i].slice(1,6));
        }
    }
    console.log(employeeID);
})