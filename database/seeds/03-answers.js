
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('answers')
    .then(function () {
      // Inserts seed entries
      return knex('answers').insert([
        {answer: "図書館はどこですか", question_id: 1},
        {answer: "銀座はどこですか", question_id: 1},
        {answer: "飛行機はどこですか", question_id: 1},
        {answer: "病院はどこですか", question_id: 2},
        {answer: "病人はどこですか", question_id: 2},
        {answer: "図書館はどこですか", question_id: 2},
        {answer: "禅寺はどこですか", question_id: 3},
        {answer: "仏教徒はどこですか", question_id: 3},
        {answer: "仏教寺はどこですか", question_id: 3},
        {answer: "お元気ですか", question_id: 4},
        {answer: "お前はもう死んでいる", question_id: 4},
        {answer: "面白いでした", question_id: 5},
        {answer: "面白いじゃない", question_id: 5}
      ]);
    });
};
