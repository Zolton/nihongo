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
        .string("password", 128).notNullable();
      tbl
        .string("email", 128).unique();
      tbl
        .string("role", 128)
        .notNullable()
        .defaultTo("member");
      tbl
        .timestamps(true, true);
      tbl
        .timestamp('lastLogin')
        .defaultTo(knex.fn.now())
    })
    .createTable("questions", tbl => {
      tbl
        .increments();
      tbl
        // Sqlite max string length = ~ 1 billion
        .string("question");
      tbl
        .string("difficulty")
      tbl
        .integer("author")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
      tbl
        .timestamps(true, true)
    })
    .createTable("answers", tbl => {
      tbl
        .increments();
      tbl
        .string("answer");
      tbl
        .boolean("correct_answer").defaultTo(false);
      tbl
        .integer("question_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("questions")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .timestamps(true, true);
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
      tbl
        .timestamps(true, true);
    })
    .createTable("UnexpectedErrors", tbl => {
      tbl
        .increments();
      tbl
        .string("name", 128)
      tbl
        .string("message", 128)
      tbl
        .timestamp('Time Recorded')
        .defaultTo(knex.fn.now())
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("UnexpectedErrors")
    .dropTableIfExists("QuestionsAnsweredCorrectly")
    .dropTableIfExists("answers")
    .dropTableIfExists("questions")
    .dropTableIfExists("users");
};
