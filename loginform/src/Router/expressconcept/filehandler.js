/* for import fs package for express use this method */
var fs = require("fs");

// fs.readFile("input.txt", function (err, data) {
//     if (err) {
//         return console.error(err);


//     }
//     console.log("Async read1 :" + data.toString());
//     console.log("Async read2 :" + data);

// });

fs.writeFile("input.txt", "seenuvasan flutter developer", function (err, data) {
    if (err) {
        return console.error(err);


    }
    
});

// fs.readFile("input.txt", function (err, data) {
//     if (err) {
//         return console.error(err);


//     }
//     console.log("Async read1 :" + data.toString());
//     // console.log("Async read2 :" + data);

// });

// fs.appendFile("input.txt", "  seenuvasan flutter app  developer", function (err) {
//     if (err) {
//         return console.error(err);


//     }
    
// });

// fs.readFile("input.txt", function (err, data) {
//     if (err) {
//         return console.error(err);


//     }
//     console.log("Async read3 :" + data.toString());
//     // console.log("Async read2 :" + data);

// });


/* modes 
r = read existing file
r+ =read and write existing file
w =write even in new file
w+ = write and read even new file 
a = append
*/

/* open file continiously untill we finish job */

var buf = new Buffer.alloc(10240000);
console.log ("going to open existing file");
fs.open("input.txt","r",function(err, fileData ){
if (err){
    return console.error(err);
}
console.log("open sucess");
console.log("going to read");
fs.read(fileData ,buf,0,buf.length,0,function(err, bytes){
    if (err){
        return console.error(err);
    }
    console.log(bytes+"bytes read");
    if (bytes >0 ){
        console.log(buf.slice(0,bytes).toString());
        // console.log(buf.slice(0,bytes));
    } 
});

fs.close(fileData,function(err){
    if (err){
        return console.error(err);
    }
    console.log("file closed sucessfully");
})

});


/* delete a file  */

// fs.unlink("input.txt",function(err ,data){});