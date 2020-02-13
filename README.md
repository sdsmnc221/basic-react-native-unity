# basic-react-native-unity
Basic React Native app with Tabs navigation and Integration of Unity View.

Works on both Android and iOS.

**Kudos to [@asmadsen/react-native-unity-view](https://github.com/asmadsen/react-native-unity-view).**

[**GIF Demo**]


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

- node / npm / yarn.
- React Native 0.6+.
- Unity 2019.3+.
- XCode (mine is 11).
- Real test devices (for both platforms, especially for iOS, since the simulator won't work, and hence you need to be able to sign the app). Mine are Samsung S8 & iPhone starting from 7.
- React Native Debugger (Optional, if you want to test bridge messages that's it).

### Installing

- Clone this repo && cd.

- Install dependencies & packages:

```
$ npm i

// OR

$ yarn
```

- Here's already premade builds for up and running: UnityExport for Android | UnityExport for iOS. Download it and unzip it.


- Move the UnityExport folder for each platform into ios/ or android/.

- Link:

```
$ react-native link
$ react-native link @asmadsen/react-native-unity-view //just in case, to make sure
```
- (For iOS) Install pods
```
$ cd ios
$ cd pod install
$ cd ..
```

## Running the tests

- Plug your device and make sure your system recognize it.
- Start the packager (skip for Android if you want).
```
$ react-native start
```
### For Android:
```
$ react-native run-android
```

### For iOS
Argh this will be complicated.

## Example usage of the API and the Bridge.
To be updated.

## Built With

- [@asmadsen/react-native-unity-view](https://github.com/asmadsen/react-native-unity-view).
- React Native.
- Unity.

## Authors

- [**sdsmnc**](https://github.com/sdsmnc221) / [**An TRUONG**](https://antr.tech) @ Gobelins.


## Acknowledgments

- [**asmadsen**](https://github.com/asmadsen).

## TODO
- Upload then include UnityExport and UnityProject.
- Details on how to stabilize and get this to run on iOS.
- Support for multiple Unity scenes. **Multiple Unity Views / Instances are impossible**, until further updates from Unity and asmadsen (if he decides not to drop his amazing package).
- Make a branch and a how to build this from scratch.

