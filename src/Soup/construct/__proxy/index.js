const fs = require('fs');


module.exports = {};


// compiling properties
let prox_dir = require('./_funkydir');
let prox = fs.readdirSync(prox_dir).filter( file => ((file.endsWith('.js') || file.endsWith('.ts')) ));  
prox.forEach( (file) => {
	require(`./${file}`);
});