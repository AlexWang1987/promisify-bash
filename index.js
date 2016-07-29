var Promise = require('bluebird');
var exec = require('child_process').exec;

var bash = function (cmd, options) {
  return new Promise(function (resolve, reject) {
    var childProcess = exec(cmd, options, function (error, stdout, stderr) {
      if (error) {
        return reject(error || stderr || stdout);
      }
      resolve(stdout);
    });

    //stdout & stderr output.
    childProcess.stdout.pipe(process.stdout);
    childProcess.stderr.pipe(process.stderr);
  });
};

module.exports = bash;

