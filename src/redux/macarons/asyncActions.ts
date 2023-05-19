import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Macarons, SearchMacaronsParams } from './types';
import pickBy from 'lodash/pickBy';
import identity from 'lodash/identity';

export const fetchMacaron = createAsyncThunk<Macarons[], SearchMacaronsParams>(
  'macarons/fetchMacaronStatus',
  async (params) => {
    const { sortBy, order, category, search, currentPage } = params;
    console.log(params, 4444);
    const { data } = await axios.get<Macarons[]>(`https://644fd909b61a9f0c4d2cfe1b.mockapi.io/items`, {
      params: pickBy(
        {
          page: currentPage,
          limit: 4,
          category,
          sortBy,
          order,
          search,
        },
        identity,
      ),
    });

    return data;
  },
);