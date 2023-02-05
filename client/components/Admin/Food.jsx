import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import axios from '../../utils/axiosBackend';
import Modal from '../Modal';
import Skeleton from '../Skeletons/Skeleton';
import AddFoodModal from './AddFoodModal';
import FoodItem from './FoodItem';

function Food({ categories }) {
  const [error, setError] = useState('');
  const [foodData, setFoodData] = useState([]);
  const [category, setCategory] = useState('all');
  const [selectedValue, setSelectedValue] = useState();
  const skeletons = new Array(8).fill(0);
  const [modalActive, setModalActive] = useState(false);
  const [deleteFoodData, setDeleteFoodData] = useState(undefined);
  const [modalContent, setModalContent] = useState('');

  let errorMessage = '';
  if (error) errorMessage = <p className='error-message'>{error}</p>;

  const options = categories?.map((category) => ({
    value: category.category,
    label: category.category[0].toUpperCase() + category.category.slice(1),
  }));

  const getFood = () =>
    axios
      .post(`/food/category/${category}`)
      .then((res) => setFoodData(res?.data?.data))
      .catch((err) => setError(err.response.data.message));

  useEffect(() => {
    getFood();
  }, [category]);

  const selectChangedHandler = (e) => {
    setSelectedValue(e);
    setCategory(e.value);
  };

  const deleteHandler = () => {
    axios
      .delete(`/food/${deleteFoodData._id}`)
      .then(() => {
        getFood();
        toast.success(`${deleteFoodData.name} is successfully deleted!`);
      })
      .catch((err) => setError(err.response.data.message))
      .finally(() => setModalActive(false));
  };

  const removeFoodModal = (
    <>
      <h6>Are you sure you want to delete this food?</h6>
      <S.Buttons>
        <button className='red' onClick={deleteHandler}>
          Delete
        </button>
        <button onClick={() => setModalActive(false)}>Cancel</button>
      </S.Buttons>
    </>
  );

  return (
    <S.Container>
      <h2>Food</h2>
      <Select
        value={selectedValue}
        options={options}
        onChange={selectChangedHandler}
        className='select'
      />
      <button
        onClick={() => {
          setModalActive(true);
          setModalContent('add');
        }}
      >
        Add Food
      </button>
      <S.FoodList>
        {!error &&
          foodData?.length > 0 &&
          foodData[0].name &&
          foodData.map((food) => (
            <FoodItem
              food={food}
              setDeleteFoodData={setDeleteFoodData}
              setModalActive={setModalActive}
              setModalContent={setModalContent}
              key={food.slug}
            />
          ))}

        {foodData?.length === 0 &&
          skeletons.map((_, i) => <Skeleton key={i} />)}

        {foodData?.length > 0 && !foodData[0].name && (
          <h4>We could not find any food.</h4>
        )}
        {errorMessage}
      </S.FoodList>

      <Modal active={modalActive} setModalActive={setModalActive}>
        {modalContent === 'add' ? (
          <AddFoodModal
            setModalActive={setModalActive}
            categories={categories}
          />
        ) : (
          removeFoodModal
        )}
      </Modal>
    </S.Container>
  );
}

export default Food;

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Container = styled.div`
  margin: 7rem 0;

  .modalContent {
    height: 80%;
  }
`;

S.FoodList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 5rem 0;
  row-gap: 8rem;
  justify-content: center;
  column-gap: 1rem;
`;

S.Buttons = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  button {
    outline: 0;
    border: 0;
    background-color: ${({ theme }) => theme.colors.lightGray}!important;
    color: #000;
    padding: 1rem 2rem;
    border-radius: 1rem;
    cursor: pointer;

    &.red {
      background-color: #ff3131 !important;
      color: #fff;
    }
  }
`;
