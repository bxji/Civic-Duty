from django.shortcuts import render, HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
import requests

# Create your views here.

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

class CivicDutyAPI(APIView):

    def get(self, request):
        #populations = [100000, 200000, 300000, 400000, 500000]

        #args = {
        #    'name': 'Bryan',
        #    'populations': populations,
        #    'senators': ['Dianne Feinstein', 'Kamala Harris']
        #}

        random_data = requests.get('https://www.googleapis.com/civicinfo/v2/elections?key=AIzaSyAEDMe9X4hv9FNSqjYEBaCnPCguHK44rfY').json()

        return Response(random_data)
        #return Response({'senators': ['Dianne Feinstein', 'Kamala Harris']})

    def post(self, request):
        #form = HomeForm(request.post)

        return Response({})
