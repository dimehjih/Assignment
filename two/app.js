var fs = require("fs")

// 1) Create directory/folder named: “Students”
fs.mkdir("./Students", function(err) {
  if (err) {
    console.log(err)
  } else {
    console.log("New directory successfully created.")
  }
})
// 2) In the Students directory, create a file named user.js
fs.appendFile('user.js', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });

//   3) Update the Students directory to “Names” 
  fs.appendFile('user.js', ' Names.', function (err) {
    if (err) throw err;
    console.log('Updated!');
  });
//   4) Add your name as content to the file user.js
  fs.writeFile('user.js', 'Ibiyeye Oladimeji', function (err) {
    if (err) throw err;
    console.log('Replaced!');
  });
// 5) Update the file and add your age, sex, nationality, phone number and any other information about yourself
fs.writeFile('user.js', 'Ibiyeye Oladimeji', 'Age: 25 years', 'Nationality: Nigerian', 'Phone_number:08165402158', function (err) {
    if (err) throw err;
    console.log('Replaced!');
});
// 6) Update the file user.js to {your_name}.js eg daniel_adesoji.js
fs.writeFile('ibiyeye_oladimeji.js', 'Ibiyeye Oladimeji', 'Age: 25 years', 'Nationality: Nigerian', 'Phone_number:08165402158', function (err) {
    if (err) throw err;
    console.log('Replaced!');
});
// 7) Read the contents from {your_name}.js. User fs.open or fs.readFile
var http = require('http');
http.createServer(function (req, res) {
  fs.readFile('user.js', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);
// 8) Delete the file {your_name}.js
fs.unlink('ibiyeye_oladimeji.js', function (err) {
    if (err) throw err;
    console.log('File deleted!');
  });

// 9) Delete the directory “Names”
fs.unlink('Names', function (err) {
    if (err) throw err;
    console.log('File deleted!');
  });