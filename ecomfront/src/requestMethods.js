import axios from "axios";

const BASE_URL = "http://localhost:4000/api";
/*const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNTZhZjZhOGEzYzVmNmQ5MTUzNDI3ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MjMzNzk3NCwiZXhwIjoxNjcyNTk3MTc0fQ.Xgulj3wOhrAVhaEaRNX-aUh5kJdusx6daNLxc7gRWXs";*/
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
//   .currentUser.accessToken;

const TOKEN = JSON.parse(
  JSON.parse(localStorage.getItem("persist:root"))?.user || "{}"
)?.currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `bearer ${TOKEN}` },
});
