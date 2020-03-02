
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('questions')
    .then(function () {
      // Inserts seed entries
      return knex('questions').insert([
        {question: "Where is the library?", author: 1, difficulty: "easy"},
        {question: "Where is the hospital?", author: 1, difficulty: "easy"},
        {question: "Where is the zen temple?", author: 1, difficulty: "medium"},
        {question: "How are you doing?", author: 2, difficulty: "hard"},
        {question: "That was funny", author: 3, difficulty: "expert"}
      ]);
    });
};
