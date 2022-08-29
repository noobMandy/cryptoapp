import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const cryptoExchangesHeaders={
    'X-RapidAPI-Key': '7bb9412c5bmsh1a45d86307fa147p1fe87djsn4d03bd19768b',
    'X-RapidAPI-Host': 'coinlore-cryptocurrency.p.rapidapi.com'
};

const baseUrl = "https://coinlore-cryptocurrency.p.rapidapi.com";

const createRequest=(url)=>({url,headers:cryptoExchangesHeaders});
export const cryptoExchangesApi=createApi({
    reducerPath:'cryptoExchangesApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptoExchanges: builder.query({
            query:() =>createRequest(`/api/exchanges/`)
        })
    })
});

export const {useGetCryptoExchangesQuery}=cryptoExchangesApi;

