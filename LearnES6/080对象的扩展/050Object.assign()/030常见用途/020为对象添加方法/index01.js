let obj = {
    m1: () => {
        console.log('m1');
    }
};
Object.assign(obj, {
    m2: () => {},
    m3: () => {},
});