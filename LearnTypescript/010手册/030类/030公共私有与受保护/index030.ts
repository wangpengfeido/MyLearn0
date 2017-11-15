namespace N030030030 {
    class Animal {
        constructor(firstName: string, lastName: string) {
            this.firstName = firstName;
            this.lastName = lastName;
        }

        protected firstName: string;
        private lastName: string;

        move(distance: number = 5) {
            console.log(`${this.firstName} ${this.lastName} moved ${distance} meter`)
        }
    }

    class Snake extends Animal {
        constructor(firstName: string, lastName: string) {
            super(firstName, lastName);
        }

        move(distance = 10) {
            console.log('snake is moving');
            let saying = `name of the snake is`;
            //受保护成员可以在派生类中访问
            saying+=this.firstName;
            //私有成员不能在派生类中访问
            // saying+=this.lastName;
            console.log()
            super.move(distance);
        }
    }

    let tom = new Snake('tee','tom');
    //private和protected成员均不能通过对象访问
    // console.log(tom.firstName);
    // console.log(tom.lastName);
}



