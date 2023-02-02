import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import Modal from '../Modal';
import axios from '../../utils/axiosBackend';
import { toast } from 'react-toastify';

function Categories({
  categories,
  setLoading,
  setCategories,
  error,
  setError,
}) {
  const [selectedValue, setSelectedValue] = useState();
  const [modalActive, setModalActive] = useState(false);

  const getCategories = async () => {
    const data = await axios.get('/food/category');

    return data.data.data;
  };

  console.log(error);

  const deleteHandler = () => {
    setLoading(true);

    axios
      .delete(`/food/${selectedValue.value}`)
      .then(async () => {
        setLoading(false);

        toast.success(
          `${selectedValue.label} category is successfully deleted!`
        );

        setSelectedValue('');
        setCategories(await getCategories());
        setError('');
      })
      .catch((err) => setError(err.response.data.message))
      .finally(() => {
        setLoading(false);
        setModalActive(false);
      });
  };

  const options = categories?.map((category) => ({
    value: category.category,
    label: category.category[0].toUpperCase() + category.category.slice(1),
  }));

  let errorMessage = '';
  if (error) errorMessage = <p className='error-message'>{error}</p>;

  return (
    <>
      <h2>Categories</h2>
      <Select
        value={selectedValue}
        options={options}
        onChange={(e) => setSelectedValue(e)}
        className='select'
      />
      <button disabled={!selectedValue} onClick={() => setModalActive(true)}>
        Remove Category
      </button>
      {errorMessage}

      <Modal active={modalActive}>
        <h6>Are you sure you want to delete this category?</h6>
        <h6>All food in this category will also be deleted.</h6>
        <S.Buttons>
          <button className='delete' onClick={deleteHandler}>
            Delete
          </button>
          <button onClick={() => setModalActive(false)}>Cancel</button>
        </S.Buttons>
      </Modal>
    </>
  );
}

export default Categories;

// -------------------------------------------------- styling ----------------------------------------------
const S = {};

S.Buttons = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  button {
    outline: 0;
    border: 0;
    background-color: ${({ theme }) => theme.colors.lightGray};
    color: #000;
    padding: 1rem 2rem;
    border-radius: 1rem;
    cursor: pointer;

    &.delete {
      background-color: #cc0000;
      color: #fff;
    }
  }
`;
