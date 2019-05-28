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
         title: "Grocery List",
         purchased: "Purchased"
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


  describe("GET /groceries/new", () => {

    it("should render a new grocery form", (done) => {
      request.get(`${base}new`, (err, res, body) => {
        expect(err).toBeNull();
        expect(body).toContain("New Grocery");
        done();
      });
    });

  });

  describe("POST /groceries/create", () => {
      const options = {
        url: `${base}create`,
        form: {
          title: "apples",
          purchased: "Purchased"
        }
      };

      it("should create a new grocery and redirect", (done) => {
        request.post(options,
          (err, res, body) => {
            Grocery.findOne({where: {title: "apples"}})
            .then((grocery) => {
              expect(grocery.title).toBe("apples");
              expect(grocery.purchased).toBe("Purchased");
              done();
            })
            .catch((err) => {
              console.log(err);
              done();
            });
          }
        );
      });
    });

  describe("GET /groceries/:id", () => {

       it("should render a view with the selected grocery item", (done) => {
         request.get(`${base}${this.grocery.id}`, (err, res, body) => {
           expect(err).toBeNull();
           expect(body).toContain("Grocery List");
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
          expect(body).toContain("Grocery List");
          done();
        });
      });

    });
});
