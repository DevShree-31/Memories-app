import { postFetchData,createdData} from "../utils/postSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as api from '../api'
const GetcreatedPosts=(post)=>{
    const fetchcreatedPostData = async () => {
        const {data}=await api.createPost(post);
    }
    useEffect(()=>{
        fetchcreatedPostData()
    },[])
}

export default GetcreatedPosts;