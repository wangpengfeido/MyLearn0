namespace N030010010 {
    class A {
        constructor(x: string) {
            this.x = x;
        }

        x: string;

        y() {
            return 'hello' + this.x;
        }

    }

    let a = new A('world');
    console.log(a.y());
}
