import React, { useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';
import { Wrapper } from 'components/organisms/Modal/Modal.styles';
import { ModalContext } from 'providers/ModalProvider';
import { ReactComponent as LocationIcon } from 'assets/images/location.svg';
import { JobsContext } from 'providers/JobsProvider';
import SearchButton from 'components/atoms/SearchButton/SearchButton';

const modalContainer = document.getElementById('modal-container');

const Modal = () => {
  const { isOpen } = useContext(ModalContext);
  const { handleLocationFilter, handleFullTimeFilter, handleSearch } = useContext(JobsContext);
  const modalNode = document.createElement('div');

  useEffect(() => {
    modalContainer.appendChild(modalNode);

    return () => {
      modalContainer.removeChild(modalNode);
    };
  }, [modalNode]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <Wrapper as="form" onSubmit={handleSearch}>
      <LocationIcon />
      <input type="text" placeholder="Filter by location" onChange={(event) => handleLocationFilter(event.target.value)} />

      <input type="checkbox" />
      <h4>Full Time</h4>
      <SearchButton type="submit" />
    </Wrapper>,
    modalNode
  );
};

export default Modal;
