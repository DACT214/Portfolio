import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e4f1705890b640ebb426c30ff7e517de",
  },
});
