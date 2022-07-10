const MODAL = "rootReducer/MODAL";

export const modal = () => ({ type: MODAL });
const initialState = {
  Modal : false,
};

export default function actions(state = initialState, action : any) {
switch (action.type) {
    case MODAL:
        return {...state, Modal: !state.Modal};
    default:
      return state;
  }
}