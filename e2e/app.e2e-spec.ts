import { HonestngPage } from './app.po';

describe('honestng App', () => {
  let page: HonestngPage;

  beforeEach(() => {
    page = new HonestngPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
