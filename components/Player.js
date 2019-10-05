import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Video from 'react-native-video';

const App = ({tracks}) => {
  const [track, setTrack] = useState(tracks[0]);
  const [paused, setPaused] = useState(true);
  console.log(track);
  return (
      <>
        <View style={styles.body}>
        {tracks.map(track =>
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
                  setPaused(false);
                  setTrack(track);
                }}
                title="Set Track"
            />
          </View>
        )}
          <View styles={styles.player}>
          <Video
              source={{uri: track.audioUrl}}
              onError={e => console.error(e)}
              controls={true}
              playInBackground={true}
              playWhenInactive={true}
              paused={paused}
              ignoreSilentSwitch='ignore'
              />
          </View>
          <View style={styles.player}>
            <Button
              onPress={(e) => {
                console.log(e);
                setPaused(false);
              }}
              title="Play"
            />
            <Button
                onPress={(e) => {
                  setPaused(true);
                }}
                title="Pause"
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
    flexDirection:'column',
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
  }
});
export default App;
