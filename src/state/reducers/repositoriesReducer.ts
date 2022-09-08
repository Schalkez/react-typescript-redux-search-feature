import { ActionType } from '../action-types';
import { Action } from '../actions';

interface RepositoriesState {
    loading: boolean;
    error: string | null;
    data: string[]
}

const innitialState = {
    loading: false,
    error: null,
    data: []
}

const reducer = (state: RepositoriesState = innitialState, action: Action): RepositoriesState => {

        switch (action.type) {
            case ActionType.SEARCH_REPOSITORIES:
                return {
                    loading: true,
                    error: null,
                    data: []
                }
            case ActionType.SEARCH_REPOSITORIES_SUCCESS:
                console.log(action.payload)
                // call api lay data va da co tren store roi nhung useselector sai chua view ra man hinh duoc
                return {
                    loading: false,
                    error: null,
                    data: action.payload
                }
            case ActionType.SEARCH_REPOSITORIES_ERROR:
                return {
                    loading: false,
                    error: action.payload,
                    data: []
                }
            default:
                return state;

        }
}
export default reducer