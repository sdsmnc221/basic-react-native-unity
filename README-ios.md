# Config for iOS

## **Cleanup:**

- Delete the **Unity-iPhone.xcodeproj** inside your Xcode workspace.

<p align="center">
    <img width="400" height="auto" src="./resources/delete-unity-iphone.png">
</p>

- In the main project *(TestTabsApp in my case)* > General > Frameworks, Libraries and Embedded Content > **Delete the UnityFramework**.

<p align="center">
    <img width="400" height="auto" src="./resources/unityframework.png">
</p>

- Also in the main project > Product > **Scheme** > Edit Scheme... > Build > **Delete the UnityFramework**. 

<p align="center">
    <img width="auto" height="300" src="./resources/edit-scheme-ios.png">
</p>

<p align="center">
    <img width="auto" height="300" src="./resources/scheme-build-ios.png">
</p>

- Stop the packager.


## **Reimport the UnityProject:**

- Re-export the Unity Project if needed.

- Add **ios/UnityExport/Unity-iPhone.xcodeproj** into the workspace (Right click > Add files to...).

<p align="center">
    <img width="300" height="auto" src="./resources/add-unity-iphone.png">
</p>

- In **Unity-iPhone/Data, change the Target Membership to UnityFramework**.

    <p align="center">
    <img width="500" height="auto" src="./resources/target-membership.png">
</p>

- In the main project > General > Frameworks, Libraries and Embedded Content > **Add the UnityFramework**.

<p align="center">
    <img width="400" height="auto" src="./resources/add-framework.png">
</p>

<p align="center">
    <img width="400" height="auto" src="./resources/unityframework.png">
</p>

- In the main project > Product > **Scheme **> Edit Scheme... > Build > **Add UnityFramework and move it above everything else**.

<p align="center">
    <img width="auto" height="300" src="./resources/scheme-build-ios.png">
</p>

- *(Optional)* In the main project > **Build Phases** > Move **Embed Frameworks** like so:

<p align="center">
    <img width="auto" height="auto" src="./resources/build-phase.png">
</p>
    

## **Additional config codes:** 

- In the main project, make sure that this is the code inside **main.m**:

<p align="center">
    <img width="300" height="auto" src="./resources/main.png">
</p>

```
#import <UIKit/UIKit.h>

#import "AppDelegate.h"

#import "UnityUtils.h"

int main(int argc, char * argv[]) {
    @autoreleasepool {
        InitArgs(argc, argv);
        return UIApplicationMain(argc, argv, nil, NSStringFromClass([AppDelegate class]));
    }
}
```

- In the Unity Project, for the **UnityMessageManager.cs** (add **UnityMessageManager.**, but if you import this script from my .unitypackage from above, just skip), else, edit like so and re-export the Unity Project:

<p align="center">
    <img width="300" height="auto" src="./resources/unitymessagemanager.png">
</p>

```
#if UNITY_IOS && !UNITY_EDITOR
    UnityMessageManager.onUnityMessage(message);
#endif
```

## **Rerun**:

- IF Build succeeded, but the app isn't installed nor launched on the device:

    - *(Optional)* Unplug and replug the iPhone.

    - *(Optional)* Close and reopen Xcode workspace.

    - Delete the app on the device.

    - Clean the build.

    - Restart the packager.

    - Rebuild.

*Really this can happen frequently if you re-export your Project... And I promise this has got to be something with the Xcode build and packager. If this isn't working just repeat. The 3 last steps can be executed in any orders, until it works haha.*