import axios from 'axios';
import { useLoginStore } from '@/store/modules/login';

/**
 * @description axios 통신
 */
export const getAxiosData = async () => {
    const loginStore = useLoginStore();

    const token: string | null = loginStore.token;

    const instance = axios.create({
        withCredentials: true,
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });

    return instance;
};