# Write React like apprun, elm and re-frame

React is considerably more lengthy, less performant and state management is painful compare to apprun, elm or re-frame (If you have used any of them, you know what I'm saying). However you have to use react for some project, or for some rich ecosystem support. This template is for you. In detail this does these thing:

- Global state, state is accessible in browser console, and app status is fully determined by set the same state with `setState`, even include routing
- Global dispatch event with `d`
- Use every component with memo, so that every component won't re-render if state is same as the previous one
- Every component is fully depend on the props pass to it, no local state, very easy to test them.
- Props passed to components are partial of the global state
- State is `Map` and `List` from immutable.js, you can easilly update or access a nested prop with `setIn` and `getIn`
