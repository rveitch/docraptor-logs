# DocRaptor Logs
A simple Node app for returning DocRaptor logs.

## Local Setup
- `$ git clone https://github.com/rveitch/docraptor-logs.git`
- `$ npm install`
- Copy `template.env.txt` and rename it to `.env`
- Add your DocRaptor API key to the `.env` file and save it.
- Run `$ npm start` or `$ node app` to initialize the app.
- Visit http://localhost:3000 in your browser.

## Heroku
- Add `DOCRAPTOR_API_KEY` (and the key value) as a Heroku environment variable before deploying the app.

## Endpoints
- `/` - Discovery endpoint. Lists route endpoints and related info.
- `/docs` - Returns list of previously created documents. This is information like the name, the date, and if it was a test document.
- `doc_logs` - Returns a list of all previously attempted document creations. The returned data here includes information about document creation success and failure, any errors that were encountered, and information about generation time.
