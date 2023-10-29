import { baseApi } from "./baseApi";

const doctorApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getDoctors: build.query({
      query: (data) => ({
        url: "/doctors",
        method: "GET",
        params: data,
      }),
    }),
  }),
});

export const { useGetDoctorsQuery } = doctorApi;
