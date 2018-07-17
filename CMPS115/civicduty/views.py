from django.shortcuts import render, HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
import requests

# Create your views here.

def index(request):
    return render(request, "civicduty/index.html")

def hello(request):

    # the third parameter is a dictionary object with all the data I want
    # to pass into the view.

    # could do a dictionary with the key as the city, value as the population.
    populations = [100000, 200000, 300000, 400000, 500000]

    args = {
        'name': 'Bryan',
        'populations': populations,
    }

    return render(request, "civicduty/hello.html", args)

def get_image(name):

    query_link = 'https://www.googleapis.com/customsearch/v1?key=AIzaSyBUk7qSUlrZZwukgMVCM7ba40aPXQpn8LY&cx=016697662841277014273:1nlnkvf0z7i&q='
    images = requests.get(query_link + name + '&searchType=image').json()
    return (images['items'][0]['link'])

# get representatives.
class RepresentativesAPI(APIView):

    def get(self, request):
        reps = requests.get('https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyAEDMe9X4hv9FNSqjYEBaCnPCguHK44rfY&address=95064').json()
        #for person in reps['officials']:
        #    if 'photoUrl' not in person:
        #        person['photoUrl'] = get_image(person['name'])

        #    if person['party'] == 'Republican':
        #        person['color'] = 'red'
        #    elif person['party'] == 'Democratic':
        #        person['color'] = 'blue'
        #    else:
        #        person['color'] = 'gray'

        return Response(reps)

    # may add full address in future.
    def post(self, request):
        data = request.data
        zip = data['zip'].strip()

        reps = requests.get('https://www.googleapis.com/civicinfo/v2/representatives?address=' + zip + '&key=AIzaSyAEDMe9X4hv9FNSqjYEBaCnPCguHK44rfY').json()
        #for person in reps['officials']:
        #    if 'photoUrl' not in person:
        #        person['photoUrl'] = get_image(person['name'])

        #    if person['party'] == 'Republican':
        #        person['color'] = 'red'
        #    elif person['party'] == 'Democratic':
        #        person['color'] = 'blue'
        #    else:
        #        person['color'] = 'gray'

        #reps['img'] = somelinkasiofhoaig

        return Response(reps)

# upcoming elections
class ElectionsAPI(APIView):

    # upcoming elections. only GET
    def get(self, request):
        random_data = requests.get('https://www.googleapis.com/civicinfo/v2/elections?key=AIzaSyAEDMe9X4hv9FNSqjYEBaCnPCguHK44rfY').json()

        return Response(random_data)

    # need to do functionality of only displaying elections relevant to user location
    def post(self, request):
        random_data = requests.get('https://www.googleapis.com/civicinfo/v2/elections?key=AIzaSyAEDMe9X4hv9FNSqjYEBaCnPCguHK44rfY').json()

        return Response(random_data)

# local polling places
class PollingAPI(APIView):

    # takes in street, city, state
    # may also need election id?
    def post(self, request):

        data = request.data
        election = data['id'].strip()
        street = data['street'].strip()
        city = data['city'].strip()
        state = data['state'].strip()

        link = 'https://www.googleapis.com/civicinfo/v2/voterinfo?key=AIzaSyAEDMe9X4hv9FNSqjYEBaCnPCguHK44rfY&address='

        random_data = requests.get(link + street + ' ' + city + ' ' + state + '&electionId=' + election).json()

        return Response(random_data)

