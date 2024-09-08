// App.js
import React from 'react';
import CourseCard from './CourseCard';

const App = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <CourseCard
        courseName="Introduction to React"
        instructor="John Doe"
        duration="6 weeks"
      />
      <CourseCard
        courseName="Advanced JavaScript"
        instructor="Jane Smith"
        duration="8 weeks"
      />
      <CourseCard
        courseName="Web Development Bootcamp"
        instructor="Alex Johnson"
        duration="12 weeks"
      />
      <CourseCard
        courseName="Python for Data Science"
        instructor="Emily Brown"
        duration="10 weeks"
      />
    </div>
  );
};

export default App;
