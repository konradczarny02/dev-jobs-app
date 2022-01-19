import React, { useEffect, useState } from 'react';
import axios from 'axios';

const initialFormState = {
  fullTime: false,
  location: '',
  title: '',
};

export const JobsContext = React.createContext({
  jobs: [],
  filters: {},
  handleFullTimeFilter: () => {},
  handleLocationFilter: () => {},
  handleTitleFilter: () => {},
  handleFull: () => {},
  handleLoc: () => {},
  handleSearch: () => {},
});

const JobsProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [allJobs, setAllJobs] = useState([]);
  const [filters, setFilters] = useState(initialFormState);

  useEffect(() => {
    axios
      .get('/jobs')
      .then(({ data }) => {
        setJobs(data.jobs);
        setAllJobs(data.jobs);
      })
      .catch((error) => console.warn(error));
  }, []);

  const handleFullTimeFilter = () => {
    if (filters.fullTime) {
      setFilters({ ...filters, fullTime: false });
    } else {
      setFilters({ ...filters, fullTime: true });
    }
  };

  const handleLocationFilter = (location) => {
    setFilters({ ...filters, location });
  };

  const handleTitleFilter = (title) => {
    setFilters({ ...filters, title });
  };

  const handleLoc = (location) => {
    setFilters({ ...filters, location });
  };

  const handleFull = () => {
    if (filters.fullTime) {
      setFilters({ ...filters, fullTime: false });
    } else {
      setFilters({ ...filters, fullTime: true });
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    let SearchJobs = allJobs.filter((job) => {
      let fullTime;
      if (filters.fullTime) {
        let fullTime = 'Full Time';
        if (
          job.location.toLowerCase().includes(filters.location.toLowerCase()) &&
          job.position.toLowerCase().includes(filters.title.toLowerCase()) &&
          job.contract === fullTime
        ) {
          return job;
        }
      } else {
        if (
          job.location.toLowerCase().includes(filters.location.toLowerCase()) &&
          job.position.toLowerCase().includes(filters.title.toLowerCase())
        ) {
          return job;
        }
      }
    });
    if (SearchJobs.length > 0) {
      setJobs(SearchJobs);
    } else {
      setJobs(allJobs);
    }
  };

  return (
    <JobsContext.Provider
      value={{
        jobs,
        filters,
        handleFullTimeFilter,
        handleLocationFilter,
        handleTitleFilter,
        handleSearch,
        handleFull,
        handleLoc,
      }}
    >
      {children}
    </JobsContext.Provider>
  );
};

export default JobsProvider;
