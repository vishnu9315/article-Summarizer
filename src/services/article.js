import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const rapidkey = import.meta.env.VITE_X_RAPIDAPI_KEY;

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', rapidkey);
            headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com')

            return headers;
        }
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            //passing this function to the demo component and accepting articleUrl
            query: (params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`
        })
    })
    
})      

export const {useLazyGetSummaryQuery} = articleApi;