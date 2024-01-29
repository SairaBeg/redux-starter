// import {BUG_ADDED,BUG_REMOVED} from "./actionTypes";
import * as actions from "./actionTypes";
let lastId = 0;

export default function reducer(state = [], action) {
  if (action.type === actions.BUG_ADDED) {
    return [
      ...state,
      {
        id: lastId++,
        description: action.payload.description,
        resolved: false,
      },
    ];
  } else if (action.type === actions.BUG_REMOVED) {
    return state.filter((bug) => bug.id !== action.payload.id);
  } else if (action.type === actions.BUG_RESOLVED) {
    return state.map((bug) =>
      bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
    );
  } else {
    return state;
  }
}

// export default function reducer(state = [], action) {
//   switch (action.type) {
//     case "bugAdded":
//       return [
//         ...state,
//         {
//           id: lastId++,
//           description: action.payload.description,
//           resolved: false,
//         },
//       ];

//     case "bugRemoved":
//       return state.filter((bug) => bug.id !== action.payload.id);
//     default:
//       return state;
//   }
// }
