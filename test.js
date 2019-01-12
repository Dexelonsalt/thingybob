console.log("Hello world, this is a test.");

const sleep = (ms) => {
    return new Promise((res) => {
        setTimeout(res, ms);
    });
};

(async () => {
    await sleep(20000);
    console.log("Test...")
})();
