const MODAL = "MODAL";

export const modal = ({ Modal }: { Modal: boolean }) => ({
    type: MODAL,
    Modal: Modal
});
const initialState = {
    Modal: false
};

export default function actions(state = initialState, action: any) {
    switch (action.type) {
        case MODAL:
            return {
                ...state,
                Modal: action.Modal
            };
        default:
            return state;
    }
}
