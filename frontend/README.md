# Frontend to-do
* Add ability to upgrade users from members to mods or admins once backend functions created
* Heroku takes ages to wake up - add loading screen to trigger On Submit that'll tide users over until it loads the backend
* Finish formatting backend quiz data into single questions + answers
** Fun idea: Make a hash table - questions = key, possible answers = values.  Quick & easy to go down the line for users

* res.data [{},{}] has proven unworkable.  Separate out questions + id and answers + question_id into separate obejcts/arrays and match on quiz card.  Front or back end solution possible
* Backend solution easiest, but function needs work.  Ugly, complicated, and has async problems.  Consider async/await solution for final array
* Better: Move ugly function to helper folder, set db returns as variables; easier to work with if split up into stages and separate function calls, passing around variables as they resolve
