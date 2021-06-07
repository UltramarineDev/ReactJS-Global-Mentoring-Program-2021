import React from 'react'
import Head from 'next/head'
import MovieDetails from '../../src/components/features/MovieDetails/MovieDetails'

const FilmPage = () => (
  <>
    <Head>
      <title>Netflix Roulette | Movie</title>
    </Head>
      <MovieDetails />
  </>
)

export default FilmPage
