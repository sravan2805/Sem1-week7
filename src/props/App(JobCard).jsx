// App.js
import React from 'react';
import JobCard from './JobCard';

const App = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <JobCard
        jobTitle="Software Engineer"
        companyName="Tech Innovators"
        location="San Francisco, CA"
      />
      <JobCard
        jobTitle="Product Manager"
        companyName="Creative Solutions"
        location="New York, NY"
      />
      <JobCard
        jobTitle="Data Scientist"
        companyName="Analytics Experts"
        location="Austin, TX"
      />
      <JobCard
        jobTitle="UX Designer"
        companyName="Design Studio"
        location="Seattle, WA"
      />
    </div>
  );
};

export default App;
