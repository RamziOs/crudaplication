import React, { Component } from 'react';
import './App.css';
import CourseForm from './components/CourseForm/CourseForm';
import CourseList from './components/CourseList/CourseList';

class App extends Component {
  state = {
    courses: [
      { courseName: 'HTML' },
      { courseName: 'CSS' },
      { courseName: 'JavaScript' },
      { courseName: 'ReactJs' },
    ],
    current: ''
  }
  // UpdateCourse 
  updateCourse = (e) => {
    this.setState({
      current: e.target.value
    })
  }
  // AddCourse
  addCourse = (e) => {
    e.preventDefault();
    let current = this.state.current;
    let courses = this.state.courses;
    courses.push({ courseName: current });
    this.setState({
      courses
    })
  }
  // deleteCourse
  deleteCourse = (index) => {
    let courses = this.state.courses;
    courses.splice(index, 1);
    this.setState({
      courses
    })
  }
  // editCourse 
  editCourse = (index, value) => {
    let courses = this.state.courses;
    let course = courses[index];
    course['courseName'] = value;
    this.setState({
      courses
    })
  }
  render() {
    const { courses } = this.state;
    const coursesList = courses.map((course, index) => {
      return <CourseList details={course} key={index} index={index} update={this.handeleChange} deleteCourse={this.deleteCourse} editCourse={this.editCourse} />
    })
    return (
      <section className='App'>
        <h2>Add Course</h2>
        <CourseForm current={this.state.current} UpdateCourse={this.updateCourse} addCourse={this.addCourse} />
        <ul>{coursesList}</ul>
      </section>
    )
  }
}

export default App;
