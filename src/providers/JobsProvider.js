import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const JobsContext = React.createContext({
  jobs: [],
  filters: {},
  handleFullTimeFilter: () => {},
  handleLocationFilter: () => {},
  handleTitleFilter: () => {},
});

const JobsProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({
    fullTime: false,
    location: '',
    title: '',
  });

  const handleFullTimeFilter = (checked) => {
    if (checked) {
      setFilters({ ...filters, fullTime: true });
    } else {
      setFilters({ ...filters, fullTime: false });
    }
  };

  const handleLocationFilter = (location) => {
    setFilters({ ...filters, location });
  };

  const handleTitleFilter = (title) => {
    setFilters({ ...filters, title });
  };

  useEffect(() => {
    axios
      .get('/jobs')
      .then(({ data }) => {
        setJobs(data.jobs);
      })
      .catch((error) => console.warn(error));
  }, []);

  return (
    <JobsContext.Provider
      value={{
        jobs,
        filters,
        handleFullTimeFilter,
        handleLocationFilter,
        handleTitleFilter,
      }}
    >
      {children}
    </JobsContext.Provider>
  );
};

export default JobsProvider;
