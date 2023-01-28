import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import OrderItem from '../components/Profile/OrderItem';
import ProtectedRoute from '../components/ProtectedRoute';
import useUser from '../context/user';
import axios from '../utils/axiosBackend';

function Orders() {
  const [orders, setOrders] = useState(undefined);
  const { user } = useUser();
  const [error, setError] = useState(undefined);

  let errorMessage = '';
  if (error) errorMessage = <p className='error-message'>{error}</p>;
  console.log(orders);

  useEffect(() => {
    if (!user._id) return;
    axios
      .get(`/order/${user._id}`)
      .then((res) => {
        setOrders(res.data.data);
        setError(undefined);
      })
      .catch((err) => {
        setError(err?.response?.data?.message);
        console.log(err);
      });
  }, [user]);

  return (
    <ProtectedRoute>
      <Navigation cartIcon={true} homeIcon={true} catalogIcon={true} />
      <S.Container>
        <h2>Orders</h2>
        <S.Orders>
          {orders?.map((order, i) => (
            <S.Order key={i}>
              <h5>
                Total: ${order.total}
                {order.discounted && ' with 15% discount!'}
              </h5>
              {order?.food?.map((food, i) => (
                <OrderItem order={order} food={food} key={i} />
              ))}
            </S.Order>
          ))}
        </S.Orders>

        {orders?.length === 0 && <h4>We could not find any orders.</h4>}
        {errorMessage}
      </S.Container>
    </ProtectedRoute>
  );
}

export default Orders;

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Container = styled.div`
  padding: 5rem 5%;
  background-color: #fff;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  min-height: 50vh;
  height: 100%;

  @media screen and (min-width: 768px) {
    padding: 5rem 10%;
    margin: 2rem;
    border-radius: 3rem;
  }

  form {
    min-width: 500px;
  }

  & > div {
    min-height: unset;
    margin-bottom: 5rem;
  }

  h4 {
    text-align: center;
    margin: 5rem 0;
  }

  h2 {
    margin-bottom: 5rem;
  }

  h5 {
    margin-bottom: 2rem;
  }
`;

S.Orders = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;
S.Order = styled.div``;
