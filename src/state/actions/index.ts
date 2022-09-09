import { Actiontype } from '../action-types/index';
// interface Action {
//   type: string,
//   payload?: any,
// }

export interface SearchRepositoriesAction {
  type: Actiontype.SEARCH_REPOSITORIES;
}

export interface SearchRepositoriesSuccessAction {
 type: Actiontype.SEARCH_REPOSITORIES_SUCCESS;
 payload: string[];
}

export interface SearchRepositoriesErrorAction {
 type: Actiontype.SEARCH_REPOSITORIES_ERROR;
 payload: string[];
}

export type Action = 
 | SearchRepositoriesAction 
 | SearchRepositoriesSuccessAction
 | SearchRepositoriesErrorAction
