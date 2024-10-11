/**
 * @description 강종 관리 모듈 pinia
 */
import { defineStore } from 'pinia';
import { useSteelStore } from '@/store/modules/steel';
import axios from 'axios';

interface Search {
    leGb : string;
}

/** 리스트 데이터 */
interface List {
    leCd   : string;
    stNm   : string;
    leGb   : string;
    h2s    : number;
    co2    : number;
    ph     : number;
    cooh   : number;
    coona  : number;
    naci   : number;
    water  : number;
    time   : number;
    result : string;
}

interface Info {
    leGb   : string;
    h2s    : null | number;
    co2    : null | number;
    ph     : null | number;
    cooh   : null | number;
    coona  : null | number;
    naci   : null | number;
    water  : null | number;
    time   : null | number;
    result : string;
}

interface State {
    search : Search;
    list   : List[]; /** 리스트 데이터 */
    info   : Info;
    start  : number;
    limit  : number;
}

const getInfo = (): Info => {
    return {
        leGb   : 'H',
        h2s    : null,
        co2    : null,
        ph     : null,
        cooh   : null,
        coona  : null,
        naci   : null,
        water  : null,
        time   : null,
        result : 'Y'
    }
}

export const useLearningStore = defineStore('learning', {
    state: (): State => ({
        search : {
            leGb : 'H',
        },
        list   : [],
        info   : getInfo(),
        start  : 0,
        limit  : 30
    }),
    actions: {
        async getList()
        {
            const steel  = useSteelStore();
            const params = {
                leGb  : this.search,
                stCd  : steel['stCd'],
                start : this.start,
                limit : this.limit
            };

            try
            {
                const res  = await axios.post('https://fasolai.allips.kr/learning/getList', params);
                const list = [];

                res.data.map(item => {
                    list.push({
                        leCd   : item.leCd,
                        stNm   : item.stNm,
                        leGb   : item.leGb === 'H' ? 'HIC' : 'SSCC',
                        h2s    : item.h2s,
                        co2    : item.co2,
                        ph     : item.ph,
                        cooh   : item.cooh,
                        coona  : item.coona,
                        naci   : item.naci,
                        water  : item.water,
                        time   : item.time,
                        result : item.result === 'Y' ? '통과' : '실패'
                    })
                })

                this.list = list;

                return res.data.length === 0 ? 'stop' : 'more';
            }
            catch(e)
            {
                console.log(e);
                alert('학습 리스트 불러오는 중 오류가 발생하였습니다. 지속될 경우 관리자에게 문의하세요.');
                return false;
            }
        },
        getAddNum()
        {
            this.start = this.start + 30;
        },
        getReset()
        {
            this.start = 0;
            this.info  = getInfo();
        }
    }
});