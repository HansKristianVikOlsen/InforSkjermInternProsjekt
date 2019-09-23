import { useState, useReducer, useEffect } from "react";
import axios from "axios";

const dataFetchReducer = (state, action) => {
    switch (action.type) {
        case "FETCH_INIT":
            return { ...state, isLoading: true, hasError: false };
        case "FETCH_SUCCESS":
            return {
                ...state,
                isLoading: false,
                hasError: false,
                errorMessage: "",
                data: action.payload
            };
        case "FETCH_FAILURE":
            return {
                ...state,
                isLoading: false,
                hasError: true,
                errorMessage: "Data retrieve failure"
            };
        default:
            throw new Error();
    }
}

const useAxiosFetch = (initialUrl, initialData) => {
    const [url] = useState(initialUrl);

    const [state, dispatch] = useReducer(dataFetchReducer, {
        isLoading: false,
        hasError: false,
        errorMessage: "",
        data: initialData
    });

    useEffect(() => {
        let didCancel = false;

        const fetchData = async () => {
            dispatch({ type: "FETCH_INIT" });

            try {
                let result = await axios.get(url);
                if (!didCancel) {
                    dispatch({ type: "FETCH_SUCCESS", payload: result.data });
                }
            } catch (err) {
                if (!didCancel) {
                    dispatch({ type: "FETCH_FAILURE" });
                }
            }
        }

        fetchData();

        return () => {
            didCancel = true;
        }
    }, [url]);

    return state;
}

export default useAxiosFetch