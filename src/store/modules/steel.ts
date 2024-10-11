/**
 * @description 강종 관리 모듈 pinia
 */
import { defineStore } from 'pinia';
import axios from 'axios';

/** 리스트 데이터 */
interface List {
    stCd : string;
    stNm : string;
}

interface State {
    list : List[]; /** 리스트 데이터 */
    stCd : string;
    stNm : string;
}

export const useSteelStore = defineStore('steel', {
    state: (): State => ({
        list : [],
        stCd : '',
        stNm : ''
    }),
    actions: {
        async getList()
        {
            try
            {
                const res  = await axios.post('https://fasolai.allips.kr/steel/getList');
                const list = [];

                console.log(res);

                res.data.map(item => {
                    list.push({
                        stCd : item.stCd,
                        stNm : item.stNm
                    })
                })

                this.list = list;
            }
            catch(e)
            {
                console.log(e);
                alert('강종 리스트 불러오는 중 오류가 발생하였습니다. 지속될 경우 관리자에게 문의하세요.');
            }
        },
        getReset()
        {
            this.stNm = '';
            this.stCd = '';
        }
    }
});