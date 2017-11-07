interface I {
    attrOne?: string;
    attrTwo?: number;
}

function test(param: I): { num: number } {
    console.log(param.attrOne, param.attrTwo);

    return {num: 3};
}

let o = {attrOne: 'aaa'};
test(o);