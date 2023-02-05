import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import Modal from '../Modal';
import axios from '../../utils/axiosBackend';
import { toast } from 'react-toastify';
import { Buttons } from '../../Theme';

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

  const deleteHandler = () => {
    setLoading(true);

    axios
      .delete(`/food/category/${selectedValue.value}`)
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

      <Modal active={modalActive} setModalActive={setModalActive}>
        <h6>Are you sure you want to delete this category?</h6>
        <h6>All food in this category will also be deleted.</h6>
        <Buttons>
          <button className='red' onClick={deleteHandler}>
            Delete
          </button>
          <button onClick={() => setModalActive(false)}>Cancel</button>
        </Buttons>
      </Modal>
    </>
  );
}

export default Categories;
