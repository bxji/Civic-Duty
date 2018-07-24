# All API's

### All backend functions can be tested through Django's UnitTests module.

### To do so, navigate to the CMPS115 folder, then type in the following command
"python manage.py test"

### Doing so will run all unit tests, which are located in CMPS115/civicduty/tests.py

### Alternatively, you can choose to run unit tests for a specific API by typing in

"python manage.py test <API Name>TestCases" 

###which will run test cases specifically for that API.

-------------------------------------------------------------------------------------------------

# Elections API


Our functional testing for this API simply compares the object returned by our API versus
the object returned directly from the Google Civic View API. 

The result should be true, since the 
