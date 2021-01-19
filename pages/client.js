import axios from "axios";

export default function getFromUrl(url) {
    return axios.get(url).then((response) => {
        return response.data;
    });
}