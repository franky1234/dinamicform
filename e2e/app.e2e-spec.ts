import { JsonFormPage } from './app.po';

describe('json-form App', () => {
  let page: JsonFormPage;

  beforeEach(() => {
    page = new JsonFormPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
