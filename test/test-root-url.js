const chai = require('chai');
const chaiHttp = require('chai-http')

const { runServer, closeServer } = require('../server/server');
const {TEST_PORT, TEST_DATABASE_URL} = require('../server/config');

const app = require('../server/app');

const expect = chai.expect;
chai.use(chaiHttp);

describe('Root URL', function() {

    // starts the server before running tests
    before(function() {
        return runServer(TEST_DATABASE_URL, TEST_PORT);
    });

    // closes the server after running tests
    after(function() {
        return closeServer();
    });

    // should receive 200 status and html when hitting root
    it('should return status 200 and html on GET', function() {
        return chai.request(app)
            .get('/')
            .then(function(res) {
                expect(res).to.have.status(200);
                expect(res).to.be.html;
            });
    });
});