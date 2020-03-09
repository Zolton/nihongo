
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('UnexpectedErrors')
      .then(function () {
        // Inserts seed entries
        return knex('UnexpectedErrors').insert([
          {name: "JsonWebTokenError", message: "jwt malformed"},
          {name: "JsonWebTokenError", message: "token expired"},
          {name: "JsonWebTokenError", message: "invalid signature"},
          {name: "JsonWebTokenError", message: "Smaug is on the way"}
        ]);
      });
  };
  