var readline = require('readline');
var App = require('./app/factory/objFactory');



User      = new App.Class.user();
Documents = new App.Class.documents();





console.warn('- CLASS - \n 1 - USER \n 2 - Documents');

var rl = readline.createInterface({input: process.stdin,output: process.stdout});
rl.question("O que deseja testar?", function(answer) {
  switch(answer){
  	case '1' :
  		User.create();
  		break;
	case '2' :
		break;
  }
  rl.close();
});
