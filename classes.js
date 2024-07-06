class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(this.username)
    }
}

class Teacher extends User {
    constructor(username,email) {
        super();
        this.username = username; 
        this.email = email;
    }

    addCourse() {
        console.log('course added by', this.username)
    }
}
// const user = new User('teat');
const teacher = new Teacher('teacher', 'teacher@mail.co')
teacher.logMe();
