exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017/local-db';
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'mongodb://localhost:27017/test-local-db';
exports.PORT = process.env.PORT || 8080;
exports.TEST_PORT = process.env.TEST_PORT || 8888;