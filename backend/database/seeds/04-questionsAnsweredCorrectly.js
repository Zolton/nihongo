
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('QuestionsAnsweredCorrectly')
    .then(function () {
      // Inserts seed entries
      return knex('QuestionsAnsweredCorrectly').insert([
        {user_id: 1, question_id: 1},
        {user_id: 1, question_id: 3},
        {user_id: 2, question_id: 1},
        {user_id: 2, question_id: 2},
        {user_id: 3, question_id: 1},
        {user_id: 3, question_id: 2},
        {user_id: 3, question_id: 3},
        {user_id: 3, question_id: 4},
        {user_id: 3, question_id: 5},
      ]);
    });
};
