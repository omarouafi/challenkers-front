import { citationTypes } from './citation.types';

interface CitationState {
  citations: any[]; 
  citation: any; 
  loading: boolean;
  error: string | null;
}

const initialState: CitationState = {
  citations: [],
  citation: {},
  loading: false,
  error: null,
};

const citationReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case citationTypes.GET_CITATIONS_START:
    case citationTypes.GET_CITATION_BY_ID_START:
    case citationTypes.CREATE_CITATION_START:
    case citationTypes.UPDATE_CITATION_START:
    case citationTypes.DELETE_CITATION_START:
    case citationTypes.TOGGLE_CITATION_FAVOURITE_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case citationTypes.GET_CITATIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        citations: action.payload,
      };
    case citationTypes.GET_CITATION_SUCCESS:
      return {
        ...state,
        loading: false,
        citation: action.payload,
      };
    case citationTypes.CREATE_CITATION_SUCCESS:
    case citationTypes.UPDATE_CITATION_SUCCESS:
    case citationTypes.DELETE_CITATION_SUCCESS:
    case citationTypes.TOGGLE_CITATION_FAVOURITE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case citationTypes.GET_CITATIONS_FAIL:
    case citationTypes.GET_CITATION_FAIL:
    case citationTypes.CREATE_CITATION_FAIL:
    case citationTypes.UPDATE_CITATION_FAIL:
    case citationTypes.DELETE_CITATION_FAIL:
    case citationTypes.TOGGLE_CITATION_FAVOURITE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default citationReducer;
