import { postFetchData,createdData} from "../utils/postSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import * as api from '../api'
const GetPosts=()=>{
    const dispatch = useDispatch();
    const fetchPostData = async () => {
        const {data}=await api.fetchPosts();
        dispatch(postFetchData(data));
    }
    useEffect(() => {
        fetchPostData()
    }, [])
}

export default GetPosts;