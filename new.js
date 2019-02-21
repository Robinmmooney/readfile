var business = "Data Charmer";
var departmentID = ["D001", "D002", "D003", "D004", "D005", "D006", "D007", "D008", "D009"];
var departments = ["Management", "Finance", "Human Resources", "Production", "Development", "Quality Management", "Sales", "Research", "Customer Service"];
var employeeID = [[100, 101, 102, 104, 105, 106, 107, 108, 109], [200, 201, 202, 203, 204, 205, 206, 207, 208, 209], [300, 301, 302, 303, 304, 305, 306, 307, 308, 309], [400, 401, 402, 403, 404, 405, 406, 407, 408, 409], [500, 501, 502, 503, 504, 505, 506, 507, 508, 509], [600, 601, 602, 603, 604, 605, 606, 607, 608, 609], [700, 701, 702, 703, 704, 705, 706, 707, 708, 709], [800, 801, 802, 803, 804, 805, 806, 807, 808, 809], [900, 901, 902, 903, 904, 905, 906, 907, 908, 909]];
var salaries = [[85000, 85000, 95000, 105000, 150000, 85000, 95000, 105000, 150000], [65000, 65000, 75000, 75000, 85000, 95000,85000, 95000, 105000, 150000], [65000, 65000,75000, 85000, 85000, 95000, 105000, 150000, 150000], [55000, 65000, 75000, 85000, 95000, 105000, 150000, 150000, 150000], [65000, 65000, 75000, 75000, 85000, 95000, 85000, 95000, 105000, 150000], [65000, 65000, 75000, 75000, 85000, 95000, 85000, 95000, 105000, 150000], [65000, 65000, 75000, 75000, 85000, 95000, 85000, 95000, 105000, 150000], [65000, 65000, 75000, 75000, 85000, 95000, 85000, 95000, 105000, 150000], [65000, 65000, 75000, 75000, 85000, 95000, 85000, 95000, 105000, 150000]];
var employeeName = [["Sue", "Tom", "Jeff", "Greg", "Howie", "Yank", "Iggy", "Pappy", "Indigo"], ["Jerry", "Tony", "Peter", "Kerry","Pete", "Jakov", "Jacob", "Pete", "Kelly"], ["Sue", "Tom", "Jeff", "Greg", "Howie", "Yank", "Iggy", "Pappy", "Indigo"], ["Sue", "Tom", "Jeff", "Greg", "Howie", "Yank", "Iggy", "Pappy", "Indigo"], ["Sue", "Tom", "Jeff", "Greg", "Howie", "Yank", "Iggy", "Pappy", "Indigo"], ["Tommy", "Gene", "Pip", "Heiki", "Lonny", "Kim", "Les", "Minny", "Jenny"], ["Lee", "Mike", "James", "Nicky", "Tom", "Tony", "Greggy", "Manny", "Bob"], ["Sue", "Tom", "Jeff", "Greg", "Howie", "Yank", "Iggy", "Pappy", "Indigo"], ["Sue", "Tom", "Jeff", "Greg", "Howie", "Yank", "Iggy", "Pappy", "Indigo"]];

var gTotal = 0;
for (var i = 0; i < departments.length; i++) {
    console.log(`\nDepartment ${departmentID[i]} - ${departments[i]}:`);
    var total = 0;

    for (var j = 0; j < employeeID.length; j++) {
        console.log(`Employee: ${employeeID[i][j]} - ${employeeName[i][j]} - ${salaries[i][j]}`);
        total += salaries[i][j]; 
        gTotal += total + total;
    }
console.log("Department Total is:", total);
}
console.log("Grand Total is:", gTotal);