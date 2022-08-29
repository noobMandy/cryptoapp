import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const cryptoNewsHeaders={
    'X-RapidAPI-Key': '7bb9412c5bmsh1a45d86307fa147p1fe87djsn4d03bd19768b',
    'X-RapidAPI-Host': 'crypto-news-live3.p.rapidapi.com'
};

const baseUrl = "https://crypto-news-live3.p.rapidapi.com";

const createRequest=(url)=>({url,headers:cryptoNewsHeaders});
export const cryptoNewsApi=createApi({
    reducerPath:'cryptoNewsApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptoNews: builder.query({
            query:({newsCategory,count}) =>createRequest(`/news/cryptonews.com`)
        })
    })
});

export const {useGetCryptoNewsQuery}=cryptoNewsApi;