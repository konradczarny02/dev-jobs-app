import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const JobsContext = React.createContext({
  jobs: [],
});

const JobsProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get('/jobs')
      .then(({ data }) => setJobs(data.jobs))
      .catch((error) => console.warn(error));
  }, []);

  return <JobsContext.Provider value={{ jobs }}>{children}</JobsContext.Provider>;
};

export default JobsProvider;
