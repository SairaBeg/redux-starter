import store from "./store";
import { bugAdded, bugRemoved, bugResolved } from "./actionCreator";

const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store.getState());
});

store.dispatch(bugAdded("bug1"));

store.dispatch(bugAdded("bug2"));
store.dispatch(bugAdded("bug3"));
store.dispatch(bugResolved(1));
// store.dispatch(bugRemoved(1));
console.log(store.getState());
