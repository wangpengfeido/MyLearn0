namespace NameSpaceOne {
    let a = 1;
    export let b = a + 1;
    export let c = a + 2;
}

console.log(NameSpaceOne.b, NameSpaceOne.c);