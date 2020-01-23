// Users to questions = one to many
// questions to answers = one to many


exports.up = function(knex) {
    return knex.schema
    .createTable("users", tbl => {
        tbl
        .increments()
        tbl
        .string("username", 128)
        .unique()
        .notNullable()
        tbl.string("password", 128)
        .notNullable()
        tbl
        .string("email", 128)
        .unique()
    })
    .createTable("questions", tbl => {
        tbl
        .increments()
        // Sqlite max string length = ~ 1 billion
        tbl
        .string("question")
        tbl
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
    })
    .createTable("answers", tbl=>{
        tbl
        .increments()
        tbl
        .string("answer")
        tbl
        .boolean("correct_answer")
        .defaultTo(false)
        tbl
        .integer("question_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("questions")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
    })
  };
  
  exports.down = function(knex) {
      return knex.schema
      .dropTableIfExists("answers")
      .dropTableIfExists("questions")
      .dropTableIfExists("users")
  };
  