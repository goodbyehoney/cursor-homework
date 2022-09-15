
    class Student {
        constructor (university, course, fullName, marks) {
            this.university = university;
            this.course = course;
            this.fullName = fullName;
            this.marks = marks;
            this.isDismissed = false;
        }
        getInfo () {
            return console.log(`Наш студент навчається на: ${this.course}, університету: ${this.university}, та має ім-я: ${this.fullName}`);
        } 
        get mark () {
            if (this.isDismissed === false) {
            return this.marks;
            } else return null;
        }
        set extraMark (mark) {
            if (this.isDismissed === false) {
            this.marks.push(mark);
            }
        }
        getAverageMark() {
            return this.marks.reduce((acc, e) => acc + e) / this.marks.length;
        }
        getDismiss() {
            return this.isDismissed = true;
        }
        getRecover() {
            return this.isDismissed = false;
        }
        }

    class BudgetStudent extends Student {
        constructor (university, course, fullName, marks) {
            super (university, course, fullName, marks);
            setInterval(() => {
                this.getScholarShip()
            }, 3000);
        }
        getScholarShip () {
            if (this.getAverageMark () >= 4 && this.isDismissed === false) {
                console.log('Йой, най буде, ось тобі 1400 грн на донати для ЗСУ');
            }
            else {
                console.log('Йой, стипендію не дам, але на ЗСУ все одно задонать');
            }
        }
    }

    const studentFirst = new Student (
        'НУБіП',
        '5',
        'Марчуков Євген',
        [5, 3, 3, 4, 2, 5]
    );

    const studentSecond = new BudgetStudent (
        'НУБіП',
        '1',
        'Андреків Роман',
        [5, 4, 5, 5, 4, 5]
    );