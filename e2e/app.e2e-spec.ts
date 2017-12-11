import { CheckingOutPage } from './app.po';

describe('checking-out App', () => {
  let page: CheckingOutPage;

  beforeEach(() => {
    page = new CheckingOutPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
