const fs = require('fs');
const path = require('path');
let ncp = require('ncp').ncp;

module.exports = (args) => {
    let cmd = args._[0];
    let dir = `${path.resolve(__dirname, '../files')}`;        
    // fs.copyFile(`${dir}/.gitignore`, `./.gitignore`, (err) => {
    //     if(err) throw err;
    //     console.log("Done");
    // });
    let options = {
        filter : function(name){
            console.log(name);
            return name === "package.json";
        }
    }
    ncp(dir, './', options, (err) => {
        if(err){
            console.error(err);
        }
        console.log("Done!");
    });
}