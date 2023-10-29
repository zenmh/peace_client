import { baseApi } from "./baseApi";

const doctorApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getDoctor: build.query({
      query: (id) => `/doctors/${id}`,
    }),
    getDoctors: build.query({
      query: (data) => ({
        url: "/doctors",
        method: "GET",
        params: data,
      }),
    }),
  }),
});

export const { useGetDoctorQuery, useGetDoctorsQuery } = doctorApi;
