
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('questions')
    .then(function () {
      // Inserts seed entries
      return knex('questions').insert([
        {question: "Where is the library?", user_id: 1, },
        {question: "Where is the hospital?", user_id: 1, },
        {question: "Where is the zen temple?", user_id: 1, },
        {question: "How are you doing?", user_id: 2, },
        {question: "That was funny", user_id: 3, }
      ]);
    });
};
