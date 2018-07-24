# All API's

### All backend functions can be tested through Django's UnitTests module.

### To do so, navigate to the CMPS115 folder, then type in the following command
"python manage.py test"

### Doing so will run all unit tests, which are located in CMPS115/civicduty/tests.py

### Alternatively, you can choose to run unit tests for a specific API by typing in

"python manage.py test <API Name>TestCases" 

### which will run test cases specifically for that API.

-------------------------------------------------------------------------------------------------

# Elections API


Our functional testing for this API simply compares the object returned by our API versus
the object returned directly from the Google Civic View API. 

We have two tests for this API; one tests Http GET requests, and one tests Http POST requests.
Both should be the same, since this API doesn't take any input, and are handled the same way.

We first make a call to our API, which is deployed on Heroku. Then, we make call to Google's
Civic Info API, and compare the results.

The result should be that the two are the same, since we didn't add anything extra besides 
calling Google's API from our server.

--------------------------------------------------------------------------------------------------

# Representatives API

Similar to the tests for the Elections API, our tests for this API compare output. However, we first
test a private method called get_image(). This function calls a Google Search API to grab the first
image that it gets from the call. We call the function with a randomly chosen keyword. Since we only 
have 100 free requests to the API per day, we simply check if the output is null. If it is, we know 
that this is probably the reason why other tests are failing for our API.

Then, we test our GET request method for this module. Since this API requires an address to work
properly, we simply default to using zip code '95064' as our address. We compare the JSON object
returned from calling our API, and the JSON API from calling Google's API. Since our API also grabs
images for candidates, we test to see if the two objects are the same, except for the image field
of the JSON object. If they are equal, we know that the code is working. If it fails, it was
likely due to get_image() running out of daily API calls.

For POST, we do the same, except we test Google's API with a certain ZIP code and send a POST request
to our API with the same ZIP code.

-------------------------------------------------------------------------------------------------

# Polling API

For this API endpoint, we test for GET and POST requests. Since GET is not supported for this API
endpoint, any user trying to make a GET request should receive an erorr. To test this, we simply 
call our API with a GET request and check if the result is "Method GET not allowed".

For POST, we do a series of tests. Since this API relies on an election id, we first call the 
Elections API, which will have been tested beforehand, and run a comparison between our output
and the output of the Google API with the same address and the same election id for every
election id pulled.

------------------------------------------------------------------------------------------------ 
