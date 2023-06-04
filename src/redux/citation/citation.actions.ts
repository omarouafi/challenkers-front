import BackendSDK from "../../utils/backendSDK";
import { citationTypes } from "./citation.types";
import axios from "axios";

//get all citations
export const getCitations = (citation:string | null = null) => async (dispatch) => {
    try {
        dispatch({
            type: citationTypes.GET_CITATIONS_START,
        });

        const { data } = await axios.get(`${BackendSDK.baseurl}/api/citations?citation=${citation||''}`);
        
        dispatch({
            type: citationTypes.GET_CITATIONS_SUCCESS,
            payload: data.citations,
        });
    } catch (error) {
        dispatch({
            type: citationTypes.GET_CITATIONS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
}

//get citation by id

export const getCitationById = (id) => async (dispatch) => {
    try {
        dispatch({
            type: citationTypes.GET_CITATION_START,
        });

        const { data } = await axios.get(`${BackendSDK.baseurl}/api/citations/${id}`);

        dispatch({
            type: citationTypes.GET_CITATION_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: citationTypes.GET_CITATION_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
}

//create citation

export const createCitation = (citation) => async (dispatch) => {
    try {
        dispatch({
            type: citationTypes.CREATE_CITATION_START,
        });

        const { data } = await axios.post(`${BackendSDK.baseurl}/api/citations`, citation);

        dispatch({
            type: citationTypes.CREATE_CITATION_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: citationTypes.CREATE_CITATION_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
}

//update citation
export const updateCitation = (citation) => async (dispatch) => {
    try {
        dispatch({
            type: citationTypes.UPDATE_CITATION_START,
        });

        const { data } = await axios.put(`${BackendSDK.baseurl}/api/citations/${citation.id}`, citation);

        dispatch({
            type: citationTypes.UPDATE_CITATION_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: citationTypes.UPDATE_CITATION_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
}

//delete citation
export const deleteCitation = (id) => async (dispatch) => {
    try {
        dispatch({
            type: citationTypes.DELETE_CITATION_START,
        });

        const { data } = await axios.delete(`${BackendSDK.baseurl}/api/citations/${id}`);

        dispatch({
            type: citationTypes.DELETE_CITATION_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: citationTypes.DELETE_CITATION_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
}

//get random citation

export const getRandomCitation = () => async (dispatch) => {
    try {
        dispatch({
            type: citationTypes.GET_CITATION_START,
        });

        const { data } = await axios.get(`${BackendSDK.baseurl}/api/citations/random`);

        dispatch({
            type: citationTypes.GET_CITATION_SUCCESS,
            payload: data.citation,
        });
    } catch (error) {
        dispatch({
            type: citationTypes.GET_CITATION_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
}

//get random citation kaamelott

export const getRandomKaamelottCitation = () => async (dispatch) => {
    try {
        dispatch({
            type: citationTypes.GET_CITATION_START,
        });

        const { data } = await axios.get(`${BackendSDK.baseurl}/api/citations/kaamelott`);

        dispatch({
            type: citationTypes.GET_CITATION_SUCCESS,
            payload: data.citation,
        });
    } catch (error) {
        dispatch({
            type: citationTypes.GET_CITATION_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
}


//citation toggle favourite

export const toggleCitationFavourite = (payload) => async (dispatch) => {
    try {
        dispatch({
            type: citationTypes.TOGGLE_CITATION_FAVOURITE_START,
        });

        const { data } = await axios.post(`${BackendSDK.baseurl}/api/citations-favoris`, payload);

        dispatch({
            type: citationTypes.TOGGLE_CITATION_FAVOURITE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: citationTypes.TOGGLE_CITATION_FAVOURITE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
}