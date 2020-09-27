let chai = require("chai");
let chaiHttp = require("chai-http");
chai.use(chaiHttp);

let host = "http://localhost:3000";

describe("Movies", () => {

  it("Should return 200 for existing movie!", async () => {
    const res = await chai.request(host).get("/movies/2");
    chai.expect(res).to.have.status(200);
    chai.expect(res.body.adult).to.have.be.false;
  });

  it("Should return 404 for not existing movie!", async () => {
    const res = await chai.request(host).get("/movies/1");
    chai.expect(res).to.have.status(404);
  });

  it("Should return 400 for bad request paramenter!", async () => {
    const res = await chai.request(host).get("/movies/r");
    chai.expect(res).to.have.status(400);
  });

  it("Should belongs to collection of movies!", async () => {
    const STAR_TREK_NEMESIS_CODE = 201;
    const res = await chai.request(host).get("/movies/"+ STAR_TREK_NEMESIS_CODE);
    chai.expect(res).to.have.status(200);
    chai.expect(res.body).to.have.property('belongs_to_collection');
  });

});

