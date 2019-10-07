
const TrackPlayer = require('react-native-track-player');

module.exports = async () => {
  console.log('Service');
  TrackPlayer.addEventListener('remote-play', async () => {
    console.log('Play Button');
    await TrackPlayer.play();
  });

  TrackPlayer.addEventListener('remote-pause', async () => {
    console.log('Pause Button');
    await TrackPlayer.pause();
  });

  TrackPlayer.addEventListener('remote-previous', async () => {
    console.log('Previous Button');
    await TrackPlayer.skipToPrevious();
  });

  TrackPlayer.addEventListener('remote-next', async () => {
    console.log('Next Button');
    await TrackPlayer.skipToNext();
  });
};
