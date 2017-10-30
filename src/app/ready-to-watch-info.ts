export class ReadyToWatchInfo {
  mediaId;
  title;
  episodesReady;
  nextAiring;
  latestEpisode;

  constructor(mediaId, title, episodesReadyToWatch, nextAiring, latestEpisode) {
    this.mediaId = mediaId;
    this.title = title;
    this.episodesReady = episodesReadyToWatch;
    this.nextAiring = nextAiring;
    this.latestEpisode = latestEpisode;
  }
}
