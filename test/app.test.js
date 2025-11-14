const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const server = require('../app');

chai.use(chaiHttp);

describe('Simple Web App Tests', () => {
  it('GET / should return the HTML homepage', (done) => {
    chai.request(server).get('/').end((err, res) => {
      expect(res).to.have.status(200);
      // Look for something that is definitely on your page:
      expect(res.text).to.include('Welcome to a simple Node.js App!');
      done();
    });
  });

  // Cleanly close the server if it’s running
  after(() => {
    if (server && server.close) try { server.close(); } catch (_) {}
  });
});
