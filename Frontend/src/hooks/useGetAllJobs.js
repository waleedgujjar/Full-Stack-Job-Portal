import { setAllJobs } from "../redux/jobSlice";
import { JOB_API_END_POINT } from "../utils/constant";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetAlljobs = () => {
    const dispatch = useDispatch();
    useEffect(() =>{
        const fetchAlljobs = async() => {
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/get`,{withCredentials:true});
                if(res.data.success){
                    dispatch(setAllJobs(res.data.jobs));
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchAlljobs();
    },[])
}

export default useGetAlljobs;