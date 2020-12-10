---
title: "Find Screen"
metaTitle: "Application find screen"
metaDescription: "Documentation for application home screen"
---

The find screen was originally supposed to act as a tool to find nearby deskball users using the familiar Google Maps.
It was set up with a personalized API key which is shown in the documents, however, it is set to expire in January 2021. 

#### Files
You can find the screen built in the following file after opening the repository:

- [/lib/screens/find.dart](https://github.com/TheDJZiegler/deskball_mobile_app/blob/master/lib/screens/find.dart)

There were plans to develop the find screen so that it would be more interactive for the user, however, they was a change
in priority and so a lot of the code found in the file above is commented out in order to provide basic functionaility in 
the simulation of the application. You can find the API code in the following files:

- [/android/secure.properties](https://github.com/TheDJZiegler/deskball_mobile_app/blob/master/android/secure.properties)
- [/android/app/src/main/AndroidManifest.xml](https://github.com/TheDJZiegler/deskball_mobile_app/blob/master/android/app/src/main/AndroidManifest.xml)
- [/ios/Runner/AppDelegate.swift](https://github.com/TheDJZiegler/deskball_mobile_app/blob/master/ios/Runner/AppDelegate.swift)

The first two files set up Google Maps in the Find screen for the android side. The third file sets up google maps for the ios side. If there are plans to add/renew the Google Maps API key, it will be done here.

[Here is a current display of the Find Screen.](https://github.com/mirandaricky9/Deskball-Docs/blob/main/content/screenshots/findScreen.png)