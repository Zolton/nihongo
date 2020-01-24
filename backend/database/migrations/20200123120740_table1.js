// Users to questions = one to many
// questions to answers = one to many
// users to questions-answered-correctly = many-to-many

exports.up = function(knex) {
  return knex.schema
    .createTable("users", tbl => {
      tbl
      .increments();
      tbl
        .string("username", 128)
        .unique()
        .notNullable();
      tbl
      .string("password", 128)
      .notNullable();
      tbl
      .string("email", 128)
      .unique();
      tbl
        .string("role", 128)
        .notNullable()
        .defaultTo("member");
    })
    .createTable("questions", tbl => {
      tbl
      .increments();
      tbl
        // Sqlite max string length = ~ 1 billion
        .string("question");
      tbl
        .integer("author")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("answers", tbl => {
      tbl
      .increments();
      tbl
      .string("answer");
      tbl
      .boolean("correct_answer")
      .defaultTo(false);
      tbl
        .integer("question_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("questions")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("QuestionsAnsweredCorrectly", tbl => {
      tbl
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("question_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("questions")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("QuestionsAnsweredCorrectly")
    .dropTableIfExists("answers")
    .dropTableIfExists("questions")
    .dropTableIfExists("users");
};
