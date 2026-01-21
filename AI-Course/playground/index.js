// // CommonJS syntax
// const { get_encoding } = require('tiktoken');

// ES module syntax
import { get_encoding } from "tiktoken";

// token ID -> token
// 904 -> hello
const encoding = get_encoding("cl100k_base");
const tokens = encoding.encode(
  "Hello world! This is the first test of tiktoken library.",
);
console.log(tokens);
