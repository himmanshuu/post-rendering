// import axios from "axios";

export const feedAPI = async (url: string) => {
  const res = await fetch("http://localhost:8080/");
  const data = await res.json();
  console.log("Data", data);
  return data;
};

export const feedAPISecond = async (url: string) => {
  const res = await fetch(url, {
    headers: {
      method: "GET",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVkYXlAaHlkLmh5ZCIsIm5hbWUiOiJKb2huIERvZSIsImlhdCI6MTUxNjIzOTAyMn0.jVAWWrvQ6gQOQbmonmL8Fbl_l0tfwksW6L20wlUcMhY",
    },
  });
  const data = await res.json();
  console.log("Data Second", data);
};
