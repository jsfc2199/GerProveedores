import { createAsyncThunk } from "@reduxjs/toolkit";
import { providerType } from "../slice/providerSlice";

const getProviderUrl =
  "https://raul-hardware-store-jsfc.herokuapp.com/v1/api/all-providers";

export const getAllProviders = createAsyncThunk("getAllProviders", async () => {
  const response = await fetch(getProviderUrl);
  return (await response.json()) as providerType[];
});
