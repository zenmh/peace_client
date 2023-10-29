"use client";

import { ReactNode } from "react";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

const Providers = ({ children }: { children: ReactNode }) => (
  <Provider store={store}>{children}</Provider>
);

export default Providers;
