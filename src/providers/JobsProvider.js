import React, { useEffect, useState } from 'react';
import axios from 'axios';

const initialFormState = {
  fullTime: false,
  location: '',
  title: '',
};

export const JobsContext = React.createContext({
  jobs: [],
  handleSearch: () => {},
  handleSearchModal: () => {},
});

const JobsProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [allJobs, setAllJobs] = useState([]);

  useEffect(() => {
    axios
      .get('/jobs')
      .then(({ data }) => {
        setJobs(data.jobs);
        setAllJobs(data.jobs);
      })
      .catch((error) => console.warn(error));
  }, []);

  const handleSearch = (data) => {
    let SearchJobs = allJobs.filter((job) => {
      let fullTime;
      if (data.fullTime) {
        let fullTime = 'Full Time';
        if (
          job.location.toLowerCase().includes(data.location.toLowerCase()) &&
          job.position.toLowerCase().includes(data.title.toLowerCase()) &&
          job.contract === fullTime
        ) {
          return job;
        }
      } else {
        if (
          job.location.toLowerCase().includes(data.location.toLowerCase()) &&
          job.position.toLowerCase().includes(data.title.toLowerCase())
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

  const handleSearchModal = (data) => {
    let SearchJobs = allJobs.filter((job) => job.location.toLowerCase().includes(data.location.toLowerCase()));
    if (SearchJobs) {
      setJobs(SearchJobs);
    }
  };

  return (
    <JobsContext.Provider
      value={{
        jobs,
        handleSearch,
        handleSearchModal,
      }}
    >
      {children}
    </JobsContext.Provider>
  );
};

export default JobsProvider;
