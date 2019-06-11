/**
 * @format
 */

import { AppRegistry } from 'react-native';
import TrackPlayer from 'react-native-track-player';
import App from './src';
import { name as appName } from './app.json';
import player from '~/services/player';

AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => player);
