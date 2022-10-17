require("cypress-xpath");

describe("empty spec", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.config("baseUrl")}/form`);
  });

  it("passes", () => {
    const name = "testname";
    cy.xpath(`//*[@id="__next"]/div/div/form/input[1]`)
      .type("testname")
      .should("have.value", name);
  });

  it("fails", () => {
    const name = "testname";
    cy.xpath(`//*[@id="__next"]/div/div/form/input[1]`)
      .type("testnameasdf")
      .should("not.contain", name);
    cy.xpath(`//*[@id="__next"]/div/div/form/input[2]`)
      .type("bilguu")
      .should("have.value", "bilguu");

    cy.xpath(`//*[@id="__next"]/div/div/form/input[3]`)
      .type("Test1234")
      .should("have.value", "Test1234");

    // cy.xpath(`//*[@id="__next"]/div/div/form/input[2]`).should(
    //   "have.text",
    //   "Invalid email address"
    // );
    // cy.xpath(`//*[@id="__next"]/div/div/form/input[2]`)
    //   .type("bilguun889@gmail.com")
    //   .should("have.value", "bilguun889@gmail.com");
  });
});
