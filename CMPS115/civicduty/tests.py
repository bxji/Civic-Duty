from django.test import TestCase
from .views import get_image
import requests

# Create your tests here.

class ElectionsTestCases(TestCase):

    # will test GET requests.
    def test_elections_get(self):

        # since our server is currently deployed to heroku, this is ok.

        google_output = requests.get('https://www.googleapis.com/civicinfo/v2/elections?key=AIzaSyAEDMe9X4hv9FNSqjYEBaCnPCguHK44rfY').json()
        my_output = requests.get('http://civic-duty.herokuapp.com/elections/').json()

        self.assertEqual(google_output, my_output)

    # will test POST requests.
    def test_elections_post(self):

        # since google API only accepts GET requests, sending POST to our API should just return the same info as GET.
        google_output = requests.get('https://www.googleapis.com/civicinfo/v2/elections?key=AIzaSyAEDMe9X4hv9FNSqjYEBaCnPCguHK44rfY').json()
        my_output = requests.post('http://civic-duty.herokuapp.com/elections/', { 'zip': '95064'}).json()

        self.assertEqual(google_output, my_output)

class RepresentativeTestCases(TestCase):

    # this test may be faulty, since we only have 100 requests to the image search API per day.
    # if possible, this test should be run first.
    # if the first test case fails, then the other results should be discarded.
    def test_get_image(self):

        my_output = [get_image('Donald Trump'), get_image('John McCain'), get_image('Darrell Long')]

        self.assertNotEqual(None, get_image('Curious George'))
        self.assertEqual('https://cdn.images.express.co.uk/img/dynamic/40/590x/Trump1-650170.jpg', my_output[0])
        self.assertEqual('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/John_McCain_official_portrait_2009.jpg/220px-John_McCain_official_portrait_2009.jpg', my_output[1])
        self.assertEqual('https://www.soe.ucsc.edu/people/darrell/photo/1', my_output[2])

    # this is a rather weak test, since our output also grabs images.
    def test_representative_get(self):

        # we will test with zip code 95064.
        google_output = requests.get('https://www.googleapis.com/civicinfo/v2/representatives?address=95064&key=AIzaSyAEDMe9X4hv9FNSqjYEBaCnPCguHK44rfY').json()
        my_output = requests.get('http://civic-duty.herokuapp.com/representative/').json()

        # we try and test for non-equivalence since our API 
        # also pulls images for representatives that do not have one
        # seems to be a weak test.
        self.assertNotEqual(None, my_output)
        self.assertNotEqual(google_output, my_output)

    # same reasoning as above, weak test.
    def test_representative_post(self):

        zip_code = 92129

        google_output = requests.get('https://www.googleapis.com/civicinfo/v2/representatives?address=92129&key=AIzaSyAEDMe9X4hv9FNSqjYEBaCnPCguHK44rfY').json()
        my_output = requests.post('http://civic-duty.herokuapp.com/representative/', { 'zip': zip_code })

        self.assertNotEqual(None, my_output)
        self.assertNotEqual(google_output, my_output)

class PollingTestCases(TestCase):

    # GET is not allowed, check if throws error.
    def test_polling_get(self):

        correct_output = { 'detail': 'Method \"GET\" not allowed.' }
        my_output = requests.get('http://civic-duty.herokuapp.com/polling/').json()

        self.assertEqual(correct_output, my_output)

    def test_polling_post(self):

        # in the future, we can add a few more addresses for extra unit tests.
        address = {
            'street': '1156 High St',
            'city': 'Santa Cruz',
            'state': 'CA'
        }

        # this is the link to the Google API, just for sake of ease.
        link = 'https://www.googleapis.com/civicinfo/v2/voterinfo?key=AIzaSyAEDMe9X4hv9FNSqjYEBaCnPCguHK44rfY'
        # grab the ids of all the upcoming elections from google API
        elections = requests.get('https://www.googleapis.com/civicinfo/v2/elections?key=AIzaSyAEDMe9X4hv9FNSqjYEBaCnPCguHK44rfY').json()['elections']

        # check results from calling on each id.
        for election in elections:

            election_id = election['id']

            google_output = requests.get(link + '&address=' + address['street'] + ' ' + address['city'] + ' ' + address['state'] + '&electionId=' + election_id).json()
            my_output = requests.post('http://civic-duty.herokuapp.com/polling/', address).json()

            self.assertEqual(google_output, my_output)