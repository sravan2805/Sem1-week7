// App.js
import React from 'react';
import JobCard from './JobCard';

const App = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <JobCard
        jobTitle="Software Engineer"
        companyName="Tech Innovations Ltd."
        location="San Francisco, CA"
      />
      <JobCard
        jobTitle="Product Manager"
        companyName="Creative Solutions Inc."
        location="New York, NY"
      />
      <JobCard
        jobTitle="UX Designer"
        companyName="Design Experts"
        location="Austin, TX"
      />
    </div>
  );
};

export default App;
