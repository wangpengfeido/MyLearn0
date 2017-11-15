namespace N030040010 {
    class Animal {
        constructor(name: string) {
            this.name = name;
        }

        //声明为readonly的成员只能在构造方法中被赋值
        private readonly name: string;

        // changeName(name:string){
        //     this.name=name;
        // }

        move(distance: number = 5) {
            console.log(`${this.name} moved ${distance} meter`)
        }
    }

}



