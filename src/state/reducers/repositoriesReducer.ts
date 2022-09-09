import { Actiontype } from '../action-types/index';

interface RepositoriesState {
  loading: boolean,
  error: string | null,
  data: string[],
}

const initialState = {
  loading: false,
  error: null, 
  data: []
}
const reducer = (
  state: RepositoriesState = initialState, 
  action: Action
  
):RepositoriesState => {
  action

  // if (action.type === 'search_repositories_success') {
  //   //100% certainty that 'action' satisfie the 
  //   // SeaarchRepositoriesSuccessAvtion interface
  //   action.payload
  // }

  switch (action.type) {
    case Actiontype.SEARCH_REPOSITORIES:
        return { loading: true, error: null, data: [] }
    case Actiontype.SEARCH_REPOSITORIES_SUCCESS:
       //100% certqin that 'action' satisfie the 
      // SeaarchRepositoriesSuccessAvtion interface action.payload
        return { loading: false, error: null, data: action.payload }
    case Actiontype.SEARCH_REPOSITORIES_ERROR:
        return { loading: false, error: action.payload, data: [] }
      break;
  
    default:
     
      break;
  }
}

export default reducer;