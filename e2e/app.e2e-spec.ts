import { AnilistReadyToWatchPage } from './app.po';

describe('anilist-ready-to-watch App', () => {
  let page: AnilistReadyToWatchPage;

  beforeEach(() => {
    page = new AnilistReadyToWatchPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to alrtw!!');
  });
});
