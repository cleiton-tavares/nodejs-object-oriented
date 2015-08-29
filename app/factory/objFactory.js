var $user       = require('../class/user');
var $documents  = require('../class/documents');


exports.Class = new function(){
	
	this.user = function (data) {
		return $user;	
	};

	this.documents = function() {
		return $documents;
	};

	this.collections = function() {
		return true;
	};

};
