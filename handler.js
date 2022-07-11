"use strict";

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hola mundo desde mi API",
        input: event,
      },
      null,
      2
    ),
  };
};
