namespace N030050010 {
    class Animal {
        constructor(lastName: string, firstName: string = 'lee') {
            this._firstName = firstName;
            this._lastName = lastName;
        }

        private _firstName: string;
        private _lastName: string;

        //只包含get的存取器会被自动推断为readonly
        get name(): string {
            return `${this._firstName} ${this._lastName}`;
        }

        get firstName(): string {
            return this._firstName;
        }

        set firstName(newName: string) {
            console.log('first name is setted', newName);
            this._firstName = newName;
        }

        //只包含get的存取器可以指定private或protected
        private get lastName(): string {
            return this._lastName;
        }

        move(distance: number = 5) {
            console.log(`${this.name} moved ${distance} meter`)
        }
    }


    let tom = new Animal('tom');
    tom.firstName = 'wang';
    //不允许(readonly)
    // tom.name='wang sam';
    //不允许(private)
    // console.log(tom.lastName);
    tom.move();


}



