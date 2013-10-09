var fs = require('fs');

module.exports = function(envFile) {
	envFile = envFile || '.env';
	
	try	{
		var file = fs.readFileSync(envFile);
		if(file) {
			file = file.toString();
			var lines = file.split('\n');

			lines = lines.map(function(item) {
				return item.split('=');
			});

			lines.forEach(function(item) {
				process.env[item[0]] = item[1];
			});
		}
	} catch(err) {
		console.log('File', envFile, 'not found');
	}
}