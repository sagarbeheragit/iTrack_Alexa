

# iTrack


1. backend code - index.js ## TODO in in app.js
2. Code to be installed in Lamda. Just zip and upload
3. Interaction model is in /model/ folder.
4. Test folder for test cases. ## TO DO call specific test cases. I have two one for Mock lamda and other is for test skill locally

# Instrcution For Devlopers:
1. No node moudles to be checked in. Use - echo 'node_modules' > .gitignore while checking in.
2. To build install the followings from root folder:
    A. npm install mocha chai --save-dev
    B. npm install alexa-skill-test-framework --save-dev
    C. npm install aws-lambda-mock-context --save-dev
    D. npm install alexa-sdk --save
3. Running the test - npm test (package.json - "test": "mocha")
4. To implement aws-lambda-mock-context test cases

# To chekout and check-in

git clone https://github.com/sagarbeheragit/iTrack_Alexa.git
git init
echo 'node_modules' > .gitignore
git add *
git commit -m 'my first commit'

