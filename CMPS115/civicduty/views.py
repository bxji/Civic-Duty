from django.shortcuts import render, HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
import requests

# Create your views here.

def index(request):
    return render(request, "civicduty/index.html")

# calls API to get images for a person, given a name.
def get_image(name):

    query_link = 'https://www.googleapis.com/customsearch/v1?key=AIzaSyBUk7qSUlrZZwukgMVCM7ba40aPXQpn8LY&cx=016697662841277014273:1nlnkvf0z7i&q='
    images = requests.get(query_link + name + ' politician' + '&searchType=image').json()

    # if exceed daily limit, return None
    if 'error' in images:
        return None
    
    # return only img link
    return (images['items'][0]['link'])

# get representatives.
class RepresentativesAPI(APIView):

    # default to zip code '95064', which is UCSC.
    def get(self, request):
        reps = requests.get('https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyAEDMe9X4hv9FNSqjYEBaCnPCguHK44rfY&address=95064').json()
        for person in reps['officials']:
            # if person doesn't have a picture listed
            if 'photoUrl' not in person:
                # find the image
                person['photoUrl'] = get_image(person['name'])

        return Response(reps)

    # may add full address feature in future.
    # for now, takes in ZIP
    def post(self, request):
        data = request.data
        zip = data['zip'].strip()

        reps = requests.get('https://www.googleapis.com/civicinfo/v2/representatives?address=' + zip + '&key=AIzaSyAEDMe9X4hv9FNSqjYEBaCnPCguHK44rfY').json()
        for person in reps['officials']:
            if 'photoUrl' not in person:
                person['photoUrl'] = get_image(person['name'])

        return Response(reps)

# upcoming elections
class ElectionsAPI(APIView):

    # upcoming elections. only GET
    def get(self, request):

        elections = requests.get('https://www.googleapis.com/civicinfo/v2/elections?key=AIzaSyAEDMe9X4hv9FNSqjYEBaCnPCguHK44rfY').json()
        return Response(elections)

    # POST requests will do the same thing as GET, but maybe in the future
    # we can make it so that we parse through the json returned and only
    # return stuff relevant to the user's location.
    def post(self, request):

        elections = requests.get('https://www.googleapis.com/civicinfo/v2/elections?key=AIzaSyAEDMe9X4hv9FNSqjYEBaCnPCguHK44rfY').json()
        return Response(elections)

# local polling places
class PollingAPI(APIView):

    # takes in street, city, state, election id (this is from elections API, call that first)
    def post(self, request):

        data = request.data
        election = data['id'].strip()
        street = data['street'].strip()
        city = data['city'].strip()
        state = data['state'].strip()

        link = 'https://www.googleapis.com/civicinfo/v2/voterinfo?key=AIzaSyAEDMe9X4hv9FNSqjYEBaCnPCguHK44rfY&address='

        elections = requests.get(link + street + ' ' + city + ' ' + state + '&electionId=' + election).json()
        return Response(elections)

