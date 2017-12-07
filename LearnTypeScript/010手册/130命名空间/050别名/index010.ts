namespace NamespaceThree {
    export namespace NamespaceFour {
        export let i = 0;
    }
}
//可以使用import为命名空间指定别名
import NF=NamespaceThree.NamespaceFour;

console.log(NF.i);