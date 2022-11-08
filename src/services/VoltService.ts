import axios from "axios";

export type ConnectData = {
  clientId: string,
  clientSecret: string,
  username: string,
  password: string,
}

export type OrderData = {
  currencyCode: string,
  amount: number,
  type: string,
  uniqueReference?: string,
  customer: {
    name: string,
    email: string,
  },
}

const BASE_URL = 'http://localhost:3000';

export const connect = async ({
  clientId,
  clientSecret,
  username,
  password
}: ConnectData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/auth/connect`,
      {
        clientId,
        clientSecret,
        username,
        password,
        grant_type: 'password',//no need
      }
    );

    console.log(JSON.stringify(response.data, null, 4));

    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error?.message);

      return error?.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}

export const purchase = async ({
  currencyCode,
  amount,
  type,
  uniqueReference,
  customer,
}: OrderData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/checkout/pay`,
      {
        currencyCode,
        amount,
        type,
        uniqueReference,
        customer,
      }
    );

    console.log(JSON.stringify(response.data, null, 4));

    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error?.message);

      return error?.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}
