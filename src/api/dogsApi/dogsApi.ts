import { RandomDogImageResponse } from "../../model/RandomDogImageResponse";
import axios from "axios";

const RANDOM_DOG_IMAGE_ENDPOINT = "https://dog.ceo/api/breeds/image/random";

const fetchRandomDogImageAsync = async (): Promise<string> => {
  try {
    const response = await fetch(RANDOM_DOG_IMAGE_ENDPOINT);
    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
    const data: RandomDogImageResponse = await response.json();
    return data.message;
  } catch (error) {
    console.error("Error fetching image: ", error);
    return "";
  }
};

const fetchRandomDogImagePromise = async (): Promise<string> => {
  return fetch(RANDOM_DOG_IMAGE_ENDPOINT)
    .then((response) => {
      if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
      return response.json();
    })
    .then((data: RandomDogImageResponse) => data.message)
    .catch((error) => {
      console.error("Error fetching image: ", error);
      return "";
    });
};

const fetchRandomDogImageUsingAxios = async (): Promise<string> => {
  return axios
    .get(RANDOM_DOG_IMAGE_ENDPOINT)
    .then((response) => {
      if (response.status !== 200) throw new Error(`HTTP Error: ${response.status}`);
      return response.data;
    })
    .then((data: RandomDogImageResponse) => data.message)
    .catch((error) => {
      console.error("Error fetching image: ", error);
      return "";
    });
};

export { fetchRandomDogImageAsync, fetchRandomDogImagePromise, fetchRandomDogImageUsingAxios };
