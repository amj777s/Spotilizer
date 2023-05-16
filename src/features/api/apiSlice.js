import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.spotify.com/v1/',
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('access_token');
            if(token){
                headers.set('Authorization', `Bearer ${token}`)
            }
            return headers
        }
    }),
    endpoints: builder => ({
        getUser: builder.query({
            query: () => '/me'
        })
    })
})

export const {useGetUserQuery} = apiSlice

