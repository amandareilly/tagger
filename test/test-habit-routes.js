const chai = require("chai");
const chaiHttp = require("chai-http");

const { runServer, closeServer } = require("../server/server");
const { TEST_PORT, TEST_DATABASE_URL } = require("../server/config");

const app = require("../server/app");

const expect = chai.expect;
chai.use(chaiHttp);

describe('Habit Endpoints', function() {

    // starts the server before running tests
    before(function() {
        return runServer(TEST_DATABASE_URL, TEST_PORT);
    });

    // closes the server after running tests
    after(function() {
        return closeServer();
    });

    it('should return status 200 and json on get', function() {
        return chai.request(app)
            .get('/habits')
            .then(function(res) {
                expect(res).to.have.status(200);
                expect(res).to.be.json;
            });
    });

    it('should return status 201 and json on post', function() {
        const newHabit = {
            shortName: 'short name',
            longName: 'long name',
            description: 'description',
            completionsRequired: '5'
        };

        return chai.request(app)
            .post('/habits')
            .send(newHabit)
            .then((res) => {
                expect(res).to.have.status(201);
                expect(res).to.be.json;
                expect(res.body.shortName).to.equal(newHabit.shortName);
                expect(res.body.longName).to.equal(newHabit.longName);
                expect(res.body.description).to.equal(newHabit.description);
                expect(res.body.completionsRequired).to.equal(Number(newHabit.completionsRequired));
            });
    })
});