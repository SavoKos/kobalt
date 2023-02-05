import axios from '../../utils/axiosBackend';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Auth, Buttons } from '../../Theme';
import Spinner from '../Spinner';
import { toast } from 'react-toastify';

function AddFood({ setModalActive, categories }) {
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);
  const [image, setImage] = useState();
  const [foodData, setFoodData] = useState({
    available: false,
    rating: '',
    price: '',
    category: '',
    name: '',
  });
  const [error, setError] = useState('');
  const updateInputValueHandler = (event) => {
    setFoodData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  let errorMessage = '';
  if (error) errorMessage = <p className='error-message'>{error}</p>;

  const addFoodHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'xcnvg0nj');
    formData.append('folder', `kobalt/${foodData.category}`);
    formData.append('cloud_name', 'dicynt7ms');
    fetch(`https://api.cloudinary.com/v1_1/dicynt7ms/image/upload`, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => data.url)
      .then((url) =>
        axios
          .post('/food', { ...foodData, image: url, available: checked })
          .then(() => {
            setModalActive(false);
            setError('');
            toast.success(`${foodData.name} is successfully added!`);
          })
      )
      .catch((err) => setError(err.response.data.message))
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <S.Auth>
      <S.Form onSubmit={addFoodHandler} loading={loading}>
        <div>
          <label htmlFor='name'> Name</label>
          <input
            type='text'
            name='name'
            className='input-name'
            onChange={(event) => updateInputValueHandler(event)}
            required
            value={foodData.name}
            disabled={loading}
          />
        </div>
        <div>
          <label htmlFor='category'> Category</label>
          <input
            type='text'
            name='category'
            className='input-category'
            onChange={(event) => updateInputValueHandler(event)}
            required
            value={foodData.category}
            list='languages'
            disabled={loading}
          />
          <datalist id='languages'>
            {categories.map((category) => (
              <option value={category.category} key={category.category} />
            ))}
          </datalist>
        </div>
        <div>
          <label htmlFor='price'> Price</label>
          <input
            type='number'
            name='price'
            className='input-price'
            onChange={(event) => updateInputValueHandler(event)}
            required
            value={foodData.price}
            disabled={loading}
          />
        </div>
        <div>
          <label htmlFor='rating'> Rating</label>
          <input
            type='number'
            min={1}
            max={5}
            name='rating'
            className='input-rating'
            onChange={(event) => updateInputValueHandler(event)}
            required
            value={foodData.rating}
            disabled={loading}
          />
        </div>
        <S.Image>
          <input
            type='file'
            accept='image/*'
            onChange={(e) => setImage(e.target.files[0])}
            disabled={loading}
          />
        </S.Image>
        <S.Available>
          <p>Available</p>
          <input
            type='checkbox'
            name='available'
            id='available'
            checked={checked}
            onChange={() => setChecked((prev) => !prev)}
            disabled={loading}
          />
        </S.Available>
        {errorMessage}
        <Buttons>
          <button type='submit' disabled={loading}>
            Add Food
          </button>
          <button type='text' onClick={() => setModalActive(false)}>
            Cancel
          </button>
        </Buttons>
      </S.Form>
      {loading && <Spinner />}
    </S.Auth>
  );
}

export default AddFood;

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Auth = styled(Auth)`
  background-color: transparent;
  height: 80%;
`;
S.Form = styled.form`
  margin: auto;
  opacity: ${({ loading }) => (loading ? 0 : 1)};

  label {
    color: #000;
  }
`;

S.Available = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;

  p {
    margin-top: 0;
  }

  input {
    width: fit-content !important;
  }
`;

S.Image = styled.div``;

S.Spinner = styled.div`
  margin-top: 2rem;
`;
