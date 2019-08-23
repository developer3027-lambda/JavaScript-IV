class Student{
    constructor(attributes){
        this.name = attributes.name
        this.age = attributes.age
        this.location = attributes.location
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

const student = new Student({
    name: 'Mason',
    age: 48,
    location: 'USA'
})
console.log(student.speak());
