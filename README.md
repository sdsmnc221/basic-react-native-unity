# basic-react-native-unity

Basic React Native app with Tabs navigation and Integration of Unity View.

Works on both Android and iOS.

**Kudos to [@asmadsen/react-native-unity-view](https://github.com/asmadsen/react-native-unity-view).**


## Demo

<p align="center">
  <img width="384" height="auto" src="./resources/demo00.gif">
</p>


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 


### Prerequisites

- node / npm / yarn.
- **React Native 0.6+**.
- **Unity 2019.3+**.
- **XCode** *(mine is 11)*.
- **Real test devices** *(for both platforms, especially for iOS, since the simulator won't work, you'll also need to have an Apple ID to be able to sign the app). Mine are Samsung S8 & iPhone starting from 7*.
- React Native Debugger *(optional, if you want to test bridge messages that's it)*.


### Installing

- Clone this repo && cd.

- Install dependencies & packages:

```
$ npm i

// OR

$ yarn
```

- Here's already premade builds for up and running. Download it and unzip it.

    - [**UnityExport for iOS**](https://www.dropbox.com/s/fkuncvje5w4bqpm/UnityExport-ios.zip?dl=0).
    - [**UnityExport for Android**](https://www.dropbox.com/s/5h0nef78fox0igt/UnityExport-android.zip?dl=0).


- Move the UnityExport folder for each platform into ios/ or android/.

<p align="center">
  <img width="400" height="auto" src="./resources/unity-export-ios.png">
</p>

<p align="center">
  <img width="400" height="auto" src="./resources/unity-export-android.png">
</p>


- Link:

```
$ react-native link
$ react-native link @asmadsen/react-native-unity-view
```


## Running the tests

- Plug your device and make sure your system recognize it.

- Start the packager *(skip for Android if you want)*:

```
$ react-native start
```


### For Android:

Gradle files are already configured. You just need to run:

```
$ react-native run-android
```


### For iOS

- Install pods:
```
$ cd ios
$ cd pod install
$ cd ..
```

- *(Optional)* Relink *(just in case, just to make sure)*:
```
$ react-native link
$ react-native link @asmadsen/react-native-unity-view 
```

- Open the **.xcworkspace** in XCode.

![Open .xcworkspace](/resources/xcworkspace.png)

- Check and fix signing conflicts for both the Main Project and the Unity-iPhone Project (for Tests Target too).

<p align="center">
  <img width="auto" height="400" src="./resources/both-project.png">
  <img width="auto" height="200" src="./resources/main-project-targets.png">
  <img width="auto" height="200" src="./resources/unity-iphone-targets.png">
</p>

- Clean and Build the Main project for a real device, while the packager is running.

![Open .xcworkspace](/resources/build.png)

    - If the build succeeded but the app is not installed and launched on the device, just restart the packager, clean and rebuild project.
    
    - And make sure that your Apple ID works.

```
$ react-native start
```


## How to use your own UnityProject

- Basically, you can just follow [**the guide from asmadsen**](https://github.com/asmadsen/react-native-unity-view). Or keep reading.


### Create a new Unity Project

- Inside the unity/ folder, create your own Unity Project. So it will look like this:

<p align="center">
  <img width="auto" height="400" src="./resources/create-unity-project.png">
</p>

<p align="center">
    <i>(The folder's name doesn't matter.)</i>
</p>
    
- [Here's a starter basic Unity Project](https://github.com/sdsmnc221/basic-unity), go ahead and clone it if you want:

```
$ cd unity
$ git clone https://github.com/sdsmnc221/basic-unity.git UnityProject
$ cd ..
```

- Open the project in **Unity 2019.3+**. 


### Import react-native-unity-view into the project

- Download my [**react-native-unity-view-bridge package**](/resources/react-native-unity-view-bridge.unitypackage) (which already includes all of the scripts from [asmadsen](https://github.com/asmadsen/react-native-unity-view) and [f111fei](https://github.com/f111fei/react-native-unity-view)).

- On the Project Panel, Assets > Import Package > Custom Package... > Import the package:

<p align="center">
  <img width="auto" height="250" src="./resources/import-unity-package.png">
  <img width="auto" height="250" src="./resources/import-unity-package-2.png">
</p>

- You will now have a ReactNative Menu!

<p align="center">
  <img width="auto" height="auto" src="./resources/old-menu.png">
</p>

<p align="center">
    <i>(From this...)</i>
</p>

<p align="center">
  <img width="auto" height="auto" src="./resources/new-menu.png">
</p>

<p align="center">
    <i>(...to this.)</i>
</p>


### Configure the Unity Project


## Example usage of the API and the Bridge
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

- [x] Upload a nice demo gif.
- [X] Upload then include downdload links for UnityExports.
- [x] Working docs for Android.
- [x] Workings docs for iOS.
- [ ] Upload a fresh and preconfigured UnityProject.
- [ ] Docs for UnityProject & how to export and build the project on your own.
- [ ] Support for multiple Unity scenes. **Multiple Unity Views / Instances are impossible**, until further updates from Unity and asmadsen (if he decides not to drop his amazing package).
- [ ] Make a branch and a how to build this from scratch.

