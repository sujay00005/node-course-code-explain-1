const path = require('path');


module.exports = path.dirname(require.main.filename)
 //previously 'require.main.filename' was 'process.mainModule.fileName'
 //process variable is available in every file and the '.main' refers to the main module that started our application
