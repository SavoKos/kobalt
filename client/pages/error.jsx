import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import Head from '../components/Head';

function Error({ message = "Looks like you're lost", code = 404 }) {
  return (
    <>
      <Head title='Error' description='Error' link='/error' />
      <S.Container>
        <section className='page_404'>
          <div>
            <div>
              <div>
                <div>
                  <div className='four_zero_four_bg'>
                    <h1>{code}</h1>
                  </div>

                  <div className='contant_box_404'>
                    <h3 className='h2'>{message}</h3>
                    <Link href='/' className='home'>
                      Go to Home
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </S.Container>
    </>
  );
}

export default Error;

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.gray};
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;

  .page_404 {
    padding: 40px 0;
    background: #fff;
    width: 80%;
    text-align: center;
  }

  .page_404 img {
    width: 100%;
  }

  .four_zero_four_bg {
    background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
    height: 400px;
    background-position: center;
  }

  .four_zero_four_bg h1 {
    font-size: 80px;
  }

  .four_zero_four_bg h3 {
    font-size: 80px;
  }

  .home {
    color: #fff !important;
    padding: 1rem 2rem;
    background: ${({ theme }) => theme.colors.gray};
    border-radius: 2rem;
    margin: 20px 0;
    display: inline-block;
  }
  .contant_box_404 {
    margin-top: -50px;
  }
`;
