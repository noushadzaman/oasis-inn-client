import axios from "axios";

const axiosSecure = axios.create({
    baseUrl: "http://localhost:5000",
    withCredentials: true
})

const useAxiosSecure = () => {
    return axiosSecure
};

export default useAxiosSecure;