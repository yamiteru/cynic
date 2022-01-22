import init from "./src/init";

const RUNS = 10;

const suites: Record<string, Record<string, () => void>> = {
    init
};

(() => {
    // const results: Record<string, > = {};

    // for(const suite in suites) {
    //     results[suite] = {};

    //     const suiteInstance = suites[suite];
    //     for(const test in suiteInstance) {
    //         results[suite][test] = {};

    //         const testFunction = suiteInstance[test];
    //         for(let i = 0; i < RUNS; ++i) {
    //             const start = process.hrtime.bigint();
    //             testFunction();
    //             const end = process.hrtime.bigint();
    //         }
    //     }
    // }
})();