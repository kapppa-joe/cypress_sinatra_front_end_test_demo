# Front End testing with Cypress & Sinatra

A skeleton project on how to do front end test with Sinatra server and Cypress.

The sinatra server is `server.rb`, and the spec file is `cypress/integration/example/sinatraTest.js`

# How to run it
1. install necessary packages
```shell
npm install
bundle install
```

2. start the Sinatra server
```shell
ruby server.rb
```

3. run the test in cypress
for GUI test runner
```shell
npx cypress open
```

for command line test runner
```shell
npx cypress run
```