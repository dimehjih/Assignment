const path = require('path');
const process = require('process');
const os = require("os")

// 1) Print out the current working directory
const dirName = path.dirname('/Users/hp/Desktop/Assignment/one/package.json');
console.log(dirName);

// //2) Print out the separator of a given file path
const seperator = path.sep;
console.log(seperator);

// //3) Print out the extension name of a file path
const extName = path.extname('C:/Users/hp/Desktop/Assignment/one/package.json');
console.log(extName);

// //4) Print out the process id of the current running process
const nodeVersion = process.versions;
console.log(nodeVersion);

// //5)Print out the user information of the os
const user = os.userInfo()
console.log(user)

// //6) Print out the platform of an operating system
const platform = os.platform()
console.log(platform)

