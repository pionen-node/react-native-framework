
# react-native-pionen-framework

## Getting started

`$ npm install react-native-framework --save`

### Mostly automatic installation

`$ react-native link react-native-framework`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-framework` and add `RNPionenFramework.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNPionenFramework.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNPionenFrameworkPackage;` to the imports at the top of the file
  - Add `new RNPionenFrameworkPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-pionen-framework'
  	project(':react-native-pionen-framework').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-pionen-framework/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-pionen-framework')
  	```


## Usage
```javascript
import RNPionenFramework from 'react-native-pionen-framework';

// TODO: What to do with the module?
RNPionenFramework;
```
  