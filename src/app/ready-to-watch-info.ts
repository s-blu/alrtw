export {ReadyToWatchInfo, AnimeStatus}


class ReadyToWatchInfo {
  mediaId;
  title;
  episodesReady;
  nextAiring;
  latestEpisode;
  airingStatus;

  constructor(mediaId, title, episodesReadyToWatch, nextAiring, latestEpisode, status) {
    this.mediaId = mediaId;
    this.title = title;
    this.episodesReady = episodesReadyToWatch;
    this.nextAiring = nextAiring;
    this.latestEpisode = latestEpisode;
    this.airingStatus = status;
  }
}

const AnimeStatus = {
  FINISHED: "FINISHED",
  CANCELLED: "CANCELLED",
  NOT_YET_RELEASING: "NOT_YET_RELEASING",
  RELEASING: "RELEASING"
};
