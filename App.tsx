import RootScreen from './src/screens/RootScreen';
import StorybookUIRoot from './storybook';

const SHOW_STORYBOOK = false;

const UI = SHOW_STORYBOOK && __DEV__ ? StorybookUIRoot : RootScreen;

export default UI;