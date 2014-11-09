var jquery = require('jquery');

function dependency() {
	return { text: "This is a dependency.", dependency: jquery };
}

module.exports = dependency;