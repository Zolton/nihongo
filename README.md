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

## Future:
* All user-submitted quizzes go to community for voting; need X amount of "yes" votes to ensure translation/answers are correct before being put in pool of multiple choice quizzes
* Stripe/Amazon payment integration for Premium memberships
* Move to AWS

## Tech stack:
* Backend uses Node.js with Express, and an SQLite3 server.  Heroku plugin used on hosting site to convert the database to PostGreSQL
* Frontend uses React with hooks

### Front end ENV file requirements:
* REACT_APP_BACK_END_URL

### Back end ENV file requirements:
* PORT
* Token SECRET
* DATABASE_URL
* DB_ENV
* PROJECT_PATH
