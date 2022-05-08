import React from 'react';

const CourseForm = (props) => {
    return (
        <form onSubmit={props.addCourse}>
            <input type="text" value={props.current} onChange={props.UpdateCourse}/>
            <button type="submit">Add Course</button>
        </form>
    )
}

export default CourseForm;