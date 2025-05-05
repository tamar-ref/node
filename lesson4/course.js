import mongoose from 'mongoose';
const { Schema } = mongoose;

//1
const courseSchema = new Schema({
    name: { required: true, type: String, minlength: 1 },
    price: { required: true, type: Number, min: 0 },
    subjects: {
        type: Array,
        validate: function (v) {
            return v && v.length > 0;
        },
        message: 'please enter at least one subject',
    },
    lecturer: {
        type: String,
        match: /^[a-zA-Z\s]+$/,
        message: 'please enter a valid lecturer name',
    },
    date: {
        type: Date,
        validate: {
            validator: function (v) {
                const nextYear = new Date();
                nextYear.setFullYear(nextYear.getFullYear() + 1);
                return v && v <= nextYear;
            },
            message: 'Date should not be later than next year',
        },
    },
    isToAB: { type: Boolean, default: false }
});

const Course = mongoose.model('Course', courseSchema);

//2
const addCourse = async (name, price, subjects, lecturer, date, isToAB) => {
    const course = new Course({
        name: name,
        price: price,
        subjects: subjects,
        lecturer: lecturer,
        date: date,
        isToAB: isToAB
    })
    try {
        return await course.save()
    } catch (error) {
        console.error(error);
    }
}

//3
const getNumCourses = async () => {
    try {
        const count = await Course.countDocuments();
        return count
    } catch (error) {
        console.error(error);
    }
}

//4
const getCourses = async () => {
    try {
        const courses = await Course.find();
        return courses
    } catch (error) {
        console.error(error);
    }
}

//5
const getCourseById = async (id) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        console.log("Invalid ID format");
        return
    }
    try {
        const course = await Course.findById(id);
        return course;
    }
    catch (error) {
        console.error(error);
    }
}

//6
const func6 = async () => {
    try {
        const courses = await Course.find({
            isToBA: true,
            subjects: { $in: ["server"] },
        })
            .sort({ name: -1 })
            .select({ name: 1, lecturer: 1 });
        return courses
    }
    catch (error) {
        console.log(error);
    }
}

//7
const func7 = async () => {
    try {
        const courses = await Course.find({
            subjects: { $in: ["server", "client"] }
        })
            .sort({ price: 1 })
            .select({ name: 1, lecturer: 1 });
        return courses
    }
    catch (error) {
        console.log(error);
    }
}

//8
const func8 = async () => {
    try {
        const courses = await Course.find({
            $or: [
                { price: { $gte: 15 } },
                { name: /וה/ }
            ]
        })
        return courses
    }
    catch (error) {
        console.log(error);
    }
}

//9
const func9 = async (id, field, newValue) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        console.log("Invalid ID format");
        return;
    }
    try {
        const updateData = { [field]: newValue };
        const updatedCourse = await Course.findByIdAndUpdate(
            id,
            updateData,
            { new: true, runValidators: true }
        )
        if (!updatedCourse) {
            console.log("Course not found");
            return;
        }
        return updatedCourse[field]
    }
    catch (error) {
        console.log(error);
    }
}

//10
const func10 = async () => {
    try {
        await Course.deleteMany({ price: 0 })
    }
    catch (error) {
        console.log(error);
    }
}

export {
    addCourse,
    getNumCourses,
    getCourses,
    getCourseById,
    func6,
    func7,
    func8,
    func9,
    func10
}