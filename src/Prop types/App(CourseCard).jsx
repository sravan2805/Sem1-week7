// App.js
import React from 'react';
import CourseCard from './CourseCard';

const App = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <CourseCard
        courseName="Introduction to React"
        instructor="Jane Doe"
        duration={30}
      />
      <CourseCard
        courseName="Advanced JavaScript"
        instructor="John Smith"
        duration={45}
      />
      <CourseCard
        courseName="UI/UX Design Fundamentals"
        instructor="Alice Johnson"
        duration={20}
      />
    </div>
  );
};

export default App;
