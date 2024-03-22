import axios, { AxiosResponse } from 'axios';
type YourData = any;

const postData = async (
  url: string,
  data: YourData,
): Promise<AxiosResponse<YourData>> => {
  try {
    const response = await axios.post(url, data);
    return response;
  } catch (error) {
    throw new Error(`Failed to post data: ${error}`);
  }
};

export default postData;

export const postApil = async (data: any) => {
  try {
    const res = await postData(
      'https://65fc85d79fc4425c6530556a.mockapi.io/payment/v1/payments',
      data,
    );
    console.log(res);

    alert('successfull');
    // Post successful, handle any further actions (e.g., showing a success message)
  } catch (error) {
    alert('error');
    console.log(error);
    // Handle error (e.g., show error message)
  }
};
