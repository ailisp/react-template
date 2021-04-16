# Write React Native like apprun, elm and re-frame

React is considerably more lengthy, less performant and state management is painful compare to apprun, elm or re-frame. If you have used any of them, you know what I'm saying. If you haven't, take a look at https://medium.com/dailyjs/a-realworld-comparison-of-front-end-frameworks-2020-4e50655fe4c1 to see how much performance increase and less code it takes in apprun and re-frame vs react. In general it'll save 50% of the code compare to react-redux and more for vanilla react with hooks.
However you have to use react for some project and for the sake of React Native, which are best of the type in sharing most of the base of logic and many of the UI with a Web App, a Mobile App and a Desktop App (with https://react.nodegui.org/ or https://microsoft.github.io/react-native-windows/). Then this template is for you. It gives you comparable performance in web vs apprun and even shorter lines of code vs apprun.

## Advantage

- It's a react native template, and work out of box for both mobile app and web. You can specify different view for mobile and for web (see `Page1.js` and `Page1.native.js` as example, or reuse the logic and view. Desktop app build support is WIP.
- Global state, state is accessible in browser console, and app status is fully determined by set the same state with `setState`, include routing
- Routing does correct behavior in both web and mobile. In web, it does correct thing on refresh
- Global dispatch event with `d`
- Use every component with memo, so that every component won't re-render if state is same as the previous one
- Every component is fully depend on the props pass to it, no local state, very easy to test them. Props passed to components are partial of the global state
- You can reproduce the app state or go back to a historical state just by setting `setState`. This is a superior advantage in debug and e2e test.
- State is `Map` and `List` from immutable.js, you can easilly update or access a nested prop with `setIn` and `getIn`

## Usage

```
npm i
npm start
# enters expo console
w # open web, with auto refresh
a # open android simulator
r # refresh android app
# or scan the qr code printed in console to run app on your iOS and Android device
```
