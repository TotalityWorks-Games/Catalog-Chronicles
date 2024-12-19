import { ImageFiltering, ImageSource, Sound } from 'excalibur';

// import clouds
import backgroundPath from '../../../Resources/Backgrounds/library_8.png?url';

// import clouds
import cloud1Path from '../../../Resources/Backgrounds/library_1.png?url';
import cloud2Path from '../../../Resources/Backgrounds/library_1.png?url';
import cloud3Path from '../../../Resources/Backgrounds/library_1.png?url';
import cloud4Path from '../../../Resources/Backgrounds/library_1.png?url';
import cloud5Path from '../../../Resources/Backgrounds/library_1.png?url';
import cloud6Path from '../../../Resources/Backgrounds/library_1.png?url';
import cloud7Path from '../../../Resources/Backgrounds/library_1.png?url';
import cloud8Path from '../../../Resources/Backgrounds/library_1.png?url';

// import music
import themeMP3 from '../../../Resources/Music/title/Cute Loops - Pixel Farming.mp3';
import themeOgg from '../../../Resources/Music/title/Cute Loops - Pixel Farming.ogg';
import themeWav from '../../../Resources/Music/title/Cute Loops - Pixel Farming.wav';

export const MainMenuResources = {
  BackgroundPng: new ImageSource(backgroundPath, false, ImageFiltering.Pixel),
  Cloud1Png: new ImageSource(cloud1Path, false, ImageFiltering.Pixel),
  Cloud2Png: new ImageSource(cloud2Path, false, ImageFiltering.Pixel),
  Cloud3Png: new ImageSource(cloud3Path, false, ImageFiltering.Pixel),
  Cloud4Png: new ImageSource(cloud4Path, false, ImageFiltering.Pixel),
  Cloud5Png: new ImageSource(cloud5Path, false, ImageFiltering.Pixel),
  Cloud6Png: new ImageSource(cloud6Path, false, ImageFiltering.Pixel),
  Cloud7Png: new ImageSource(cloud7Path, false, ImageFiltering.Pixel),
  Cloud8Png: new ImageSource(cloud8Path, false, ImageFiltering.Pixel),
  Music: new Sound(themeMP3, themeWav, themeOgg),
};
