const http = require ('http');

const {public, home, search, notFound} = require ('./routes');

http.createServer ((req, res) => {
	if (req.url.match (/\.(html|css|js|png)$/)) {
		public (req, res);
	} else if (req.url == '/') {
		home (req, res);
	} else if (req.url.startsWith ('/search')) {
		search (req, res);
	} else {
		notFound (req, res);
	}
}).listen (process.env.PORT || 3000, () => console.log ('Сервер работает'));