import { channel } from '../../src';

export default {
    cynic: () => {
        const a = channel<number>();
        const unsub = a.sub(() => {});

        for(let i = 0; i < 1000; ++i) a.pub(i);

        unsub();
    }
};