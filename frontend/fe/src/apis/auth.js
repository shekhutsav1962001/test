import axios from "axios";
import { toastMessage } from "../helpers/toast";

const baseURL = "http://localhost:5000";

const displayError = (errorMessage) => {
  toastMessage(false, errorMessage);
  return null;
};

export const siginIn = async (data) => {
  try {
    const url = `${baseURL}/auth/signin`;
    const response = await axios({ method: "POST", url, data });
    const { error, token } = response.data;

    if (error) return displayError(error);
    toastMessage(true, "Login successful!!");
    return { token };
  } catch (e) {
    return displayError("Something went wrong");
  }
};

export const siginUp = async (data) => {
  try {
    const url = `${baseURL}/auth/signup`;
    const response = await axios({ method: "POST", url, data });
    const { error, message } = response.data;

    if (error) return displayError(error);
    toastMessage(true, "User registered successfully!!!");
    return { message };
  } catch (e) {
    return displayError("Something went wrong");
  }
};
