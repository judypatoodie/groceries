const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/groceries/";
const sequelize = require("../../src/db/models/index").sequelize;
 const Grocery = require("../../src/db/models").Grocery;

describe("routes : groceries", () => {
  beforeEach((done) => {
      this.grocery;
      sequelize.sync({force: true}).then((res) => {

       Grocery.create({
         title: "JS Frameworks",
         description: "There is a lot of them"
       })
        .then((grocery) => {
          this.grocery = grocery;
          done();
        })
        .catch((err) => {
          console.log(err);
          done();
        });

      });

    });

  describe("GET /groceries", () => {

    it("should return a status code 200 and all grocery items", (done) => {

      request.get(base, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        expect(err).toBeNull();
        expect(body).toContain("JS Frameworks");
        done();
        });
      });


  });

  describe("GET /groceries/new", () => {

    it("should render a new grocery form", (done) => {
      request.get(`${base}new`, (err, res, body) => {
        expect(err).toBeNull();
        expect(body).toContain("New Grocery");
        done();
      });
    });

  });

  describe("GET /groceries/:id", () => {

       it("should render a view with the selected grocery item", (done) => {
         request.get(`${base}${this.grocery.id}`, (err, res, body) => {
           expect(err).toBeNull();
           expect(body).toContain("JS Frameworks");
           done();
         });
       });

     });

  describe("POST /groceries/:id/destroy", () => {

   it("should delete the grocery item with the associated ID", (done) => {

     Grocery.all()
     .then((groceries) => {

       const groceryCountBeforeDelete = groceries.length;

       expect(groceryCountBeforeDelete).toBe(1);

       request.post(`${base}${this.grocery.id}/destroy`, (err, res, body) => {
         Grocery.all()
         .then((groceries) => {
           expect(err).toBeNull();
           expect(groceries.length).toBe(groceryCountBeforeDelete - 1);
           done();
         })

       });
     });

   });

 });

 describe("GET /groceries/:id/edit", () => {

      it("should render a view with an edit grocery item form", (done) => {
        request.get(`${base}${this.grocery.id}/edit`, (err, res, body) => {
          expect(err).toBeNull();
          expect(body).toContain("JS Frameworks");
          done();
        });
      });

    });
});
