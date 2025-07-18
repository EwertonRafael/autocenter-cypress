import { elements as el } from "./elements";
class Checklist {
  buscaChecklist(checklist) {
    cy.goto(el.btnName, el.titlePage);
    cy.get(el.buscaInput).type(checklist.idChecklist).click();
  }
}
export default new Checklist();
