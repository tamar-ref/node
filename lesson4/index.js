import * as course from "./course.js";

//11
console.log(course.addCourse('C#', 120, ['OOP', 'Polimorfism'], 'teacher A', new Date(), true));
console.log(course.addCourse('C++', 200, ['OOP', 'server'], 'teacher B', new Date(), false));
console.log(course.addCourse(undefined, 150, undefined, 'teacher C', new Date(), undefined));
console.log(course.addCourse('SQL', 70, ['server', 'client'], 'teacher A', new Date(), false));
console.log(course.addCourse('מתמטיקה', 0, ['סטטיסטיקה והסתברות', 'בדידה', 'חדוא'], 'teacher F', new Date(), true));

console.log(course.getNumCourses());
console.log(course.getCourses());
console.log(course.getCourseById(2));
console.log(course.func6());
console.log(course.func7());
console.log(course.func8());
console.log(course.func9(2, 'price', 100));
console.log(course.func10());

console.log(course.getCourses());