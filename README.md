# Nguyen Van Thuy - React Native assessment

![Project structure](https://i.ibb.co/6nk3hjm/project-structure.png)
##### As seen in the referenced screenshot above, At the very first I create a base folder “src” which will store all the necessary folders or files in it for the project.

## assets/
##### This folder will store all the assets that we are using in react-native. You can add static files like fonts and images to it. Also, you can add more assets like videos in this folder according to your project requirements.

## components/
##### You can create components that are common to the entire application and reusable, providing a unified look and feel for the entire application. I am managing by component type: button, input, ....

## constants/
##### All constants should be saved here: API base url, Api request time out, ... In addition, the security variables: google place api key will be saved in the environment and use the react-native-config library to get the value. For now, I simply put it right in the constants file.

## i18n/
##### This holds translation files for different languages in which you're using your application. The strings displayed on the screen should be taken from translation files instead of hard coding as now.

## models/
##### Where we define all the data while using typescript to develop the application.

## navigation/
##### Your project base navigation goes here. You can create a stack navigator in it and export it to your application. For now just making simple demo application, I did not install navigation in this project.

## screens/
##### All your screens will be stored here: login, home, map, ... If there's too much UI in one screen that can't be reused anywhere, you can split it up into smaller ones. like the SearchResult.tsx file that I split.

## services/
##### Defines all the Restfull APIs used throughout the application. It can be reused. With the use of axios, we can control the time out request api, add tokens before reuqest API or general handling of errors returned by the API.

## stores/
##### We are using Redux Toolkit and Redux-Sagas in our project and handle business logic using them. All the complex logic should be written in the saga or create a custom hook.

## theme/
- ##### color: all repeated colors will be stored here. Make sure we don't define new color codes ourselves to ensure application-wide consistency. It also makes it easy to implement dark mode later, which I wrote in the themeHook.ts file
- ##### dimension: Defines all the dimensions: margin, padding, text size, radius, icon size, ... Not only ensures consistency in the user interface, it also makes it easier for us to implement when we want to scale size on multiple devices.

## utils/
##### All the utils/helpers file will go here that storing reusable methods and logic's like validations, progress bar, date pickers and according to your app requirements.

## [Video demo](https://drive.google.com/file/d/15gll-lnT7XPP9S43FApccdpDTYy2EnXx/view?usp=sharing)

### *Thank you!!!*
