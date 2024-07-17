class User {
    static t = 0;
    _poster = 'yes';
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(this.username)
    }
    static creatId() {
        console.log('123');
        console.log(this.t)
    }
}

class Teacher extends User {
    constructor(username,email) {
        super(username);
        this.email = email;
    }

    addCourse() {
        console.log('course added by', this.username)
    }
}
class Engineer extends Teacher {
    constructor(username, email) {
       super(username,email)
    }

    constructThings() {
        console.log('constructing')
    }
    get email() {
        return this._email;
    }
    set email(value) {
        console.log(value)
        this._email = value
    }
}
// const user = new User('teat');
const teacher = new Teacher('teacher', 'teacher@mail.co')
// teacher.logMe();
// Teacher.creatId();
// User.creatId();
const engineer = new Engineer('engineer', 'engineerr@gmail.com');
// engineer.constructThings();
// engineer.logMe();
// engineer.addCourse();
// console.log(teacher._poster)
console.log(engineer.email)