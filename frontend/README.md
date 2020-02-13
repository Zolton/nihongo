# Nihongo

* Proof of concept: Enable users to log in, take multiple choice quizzes.

## Now:
* Show user an english sentence with 3-4 multiple choice Japanese translations, only one of which is correct
* Allow users to submit their own multiple choice quiz for others
* Allow users to flag incorrect entries
 
## Later: 
* Adjective conjugation quizzes
* Ichigan + Godan noun conjugations
* Idea is to be similar to MATCHA, a quiz version of JapaneseVerbConjugator.com
* Medium/Hard involve showing a Japanese paragraph with faulty vocabulary/grammar, enable user to click on portions of sentences and words they believe are wrong, and enter what it should be.

## Farther future:
* All user-submitted quizzes go to community for voting; need X amount of "yes" votes to ensure translation/answers are correct before being put in pool of multiple choice quizzes
* Shunt multiple choice into Easy section.  Break out Medium and Hard sections


## Tech stack:
* Backend uses Node.js with Express, and an SQLite3 server.  Heroku plugin used on hosting site to convert the database to PostGres
* Frontend will use React


# Frontend to-do
* Add ability to upgrade users from members to mods or admins once backend functions created
* Add route for quizzes, make axios call.  Test update login date function and pulling quiz seeds from backend
