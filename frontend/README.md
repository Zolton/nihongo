# Frontend to-do
* Add ability to upgrade users from members to mods or admins once backend functions created
* Heroku takes ages to wake up - add loading screen to trigger On Submit that'll tide users over until it loads the backend
* Finish formatting backend quiz data into single questions + answers
** Fun idea: Make a hash table - questions = key, possible answers = values.  Quick & easy to go down the line for users

* res.data [{},{}] has proven unworkable.  Separate out questions + id and answers + question_id into separate obejcts/arrays and match on quiz card.  Front or back end solution possible

backend solution: grab questions, grab answers, if question id = anwer.question_id, insert into questsion object, then send whole package to fornt end, map over, and display

front end soltuion: map over, put questions + id into a set, answers + question_id in an array, match up and display

