// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);// { id: '123abc', name: 'Sammy', isLoggedIn: false }

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "shreya",
            lastname: "marvania"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname); // shreya

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);// { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));// [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser));// [ '123abc', 'Sammy', false ]
// console.log(Object.entries(tinderUser));// [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));// true


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "shreya"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);// shreya
// console.log(instructor); //shreya

// {
//     "name": "xyz",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]