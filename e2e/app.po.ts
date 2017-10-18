import { browser, by, element } from 'protractor';

export class AnilistReadyToWatchPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('alrtw-root h1')).getText();
  }
}
