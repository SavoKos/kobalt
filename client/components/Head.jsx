import React from 'react';
import NextHead from 'next/head';

function Head({
  title = 'Catalog',
  description = 'Kobalt has variety of foods you can order right now!',
  link = '/catalog',
}) {
  return (
    <NextHead>
      <title>Kobalt | {title}</title>
      <meta name='description' content={description} />
      <link href={`https://kobalt.savo-kos.com${link}`} rel='canonical' />
    </NextHead>
  );
}

export default Head;
