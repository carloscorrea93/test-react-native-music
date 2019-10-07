import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import TrackPlayer from 'react-native-track-player';



const App = ({tracks}) => {

  const mediaTracks = tracks.map((track, index) => ({
    id: index.toString(),
    url: track.audioUrl,
    key: index,
    artwork: track.albumArtUrl,
    title: track.title,
    artist: track.artist,
    album: track.artist,
    description: 'Description',
    genre: 'this is Genre KEY',
  }));

  TrackPlayer.add(mediaTracks).then(function() {
    console.log('Tracks added');
  });

  return (
      <>
        <View style={styles.body}>
          {tracks.map((track, index) =>
              <View style={styles.sectionContainer} key={track.title}>
                <Text style={styles.sectionTitle}>
                  <Image
                      style={styles.albumArtWork}
                      source={{uri: track.albumArtUrl}}
                  />
                  {track.title}
                </Text>
                <Text style={styles.sectionDescription}>
                  Artist: {track.artist}
                </Text>
                <Button
                    onPress={(e) => {
                      TrackPlayer.skip(index.toString()).then();
                    }}
                    title="Set Track"
                />
              </View>,
          )}
          <View style={styles.player}>
            <Button
                onPress={() => {
                  TrackPlayer.skipToPrevious().then();
                }}
                title="Previous"
            />
            <Button
                onPress={() => {
                  TrackPlayer.pause().then();
                }}
                title="Pause"
            />
            <Button
                onPress={() => {
                  TrackPlayer.play().then();
                }}
                title="Play"
            />
            <Button
                onPress={() => {
                  TrackPlayer.skipToNext().then();
                }}
                title="Next"
            />
          </View>
        </View>
      </>
  );
};
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
    borderColor: Colors.primary,
    borderWidth: 3,
  },
  player: {
    backgroundColor: Colors.black,
  },
  sectionContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'column',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  albumArtWork: {
    width: 50,
    height: 50,
  },
});
export default App;
