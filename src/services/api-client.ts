import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '79cc10a56546426aaa6db8b43fb5cc4e'
    }
})