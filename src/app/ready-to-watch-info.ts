export class ReadyToWatchInfo {
  mediaId;
  title;
  episodesReady;
  nextAiring;

  constructor(mediaId, title, episodesReadyToWatch, nextAiring) {
    this.mediaId = mediaId;
    this.title = title;
    this.episodesReady = episodesReadyToWatch;
    this.nextAiring = nextAiring;
  }
}
