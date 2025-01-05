Calling App - React Native
This project is a Calling App developed using React Native. It allows users to initiate and receive audio and video calls, toggle between front and back cameras, mute/unmute the microphone, and adjust speaker settings. The app uses the react-native-camera for video call functionality and supports essential call controls for a smooth communication experience.

Features:
Audio and Video Calls: Users can choose between audio or video calls.
Camera Switching: Toggle between front and back cameras during video calls.
Mic and Speaker Control: Mute/unmute the microphone and toggle the speaker.
Real-time Call Timer: Display a timer that counts up in minutes and seconds during a call.
Receiving Call Notification: Shows a full-screen notification when someone calls, with the option to accept or decline.
Call Termination: End the call when finished, with the timer stopping when the call ends.
How to Run the Project
Follow these steps to run the app on your local machine:

1. Clone the Repository

git clone https://github.com/your-username/your-repository-name.git
2. Install Dependencies
Navigate to the project folder and install the dependencies:

cd your-repository-name
npm install
Alternatively, if you use yarn:


yarn install
3. Run the App on a Device or Emulator
For Android:
Make sure you have Android Studio set up and an Android device or emulator running. Then, run:


npx react-native run-android
For iOS:
Ensure that you have Xcode installed and an iOS simulator or device connected. Then, run:


npx react-native run-ios
4. Start Metro Server (if not running)
If the Metro server is not running automatically, you can start it manually by running:


npx react-native start
Prerequisites
Node.js: v14 or above

React Native CLI: Make sure you have React Native CLI installed globally:


npm install -g react-native-cli
Android Studio / Xcode for Android and iOS development respectively.

Feel free to customize this according to the specific libraries you used or any other configuration needed for your project!
