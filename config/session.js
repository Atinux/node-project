// For Redis
var server = {
	host: 'localhost',
	port: 6379,
	ttl: 7 * 24 * 60 * 60, // 7 days
	db: 0, // integer
	// pass: 'password'
};

exports.secret = 'node-project-(9:)&*(&*TIH%)*&(*T0989yuih74z7Z3jV!gmp5p*@#^Gball';
exports.key = 'node-project-session';

if (_PRODUCTION_) {
	server.host = 'localhost';
	server.port = 13705;
	server.db = 0;
	server.pass = '';
}

exports.server = server;

// To see Redis in Web APP, use redis-commander (npm install -g redis-commander) -> http://localhost:8081/