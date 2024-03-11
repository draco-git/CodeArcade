import {
  createApi,
  EndpointBuilder,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query";

export const baseService = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "",
  }),
  reducerPath: "instant-chat-ui",
  endpoints: () => ({}),
});
