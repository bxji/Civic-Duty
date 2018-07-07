from django.http import HttpResponse, JsonResponse
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Elections
from .serializers import ElectionsSerializers
import requests

def index(request):
    return HttpResponse("<h1>Upcoming Elections</h1>")

class ElectionList(APIView):

    def get(self, request):
        election = requests.get('https://www.googleapis.com/civicinfo/v2/elections?key=AIzaSyAEDMe9X4hv9FNSqjYEBaCnPCguHK44rfY')
        electionData = election.json()
        return Response(electionData)

    def post(self):
        pass

#basic template to put apis into our django database
'''class FOO(APIView):
    def get(self, request):
        VAR1 = request.get('insert api here')
        VAR2 = VAR1.json()
        return Response(VAR2)

    def post(self):
        pass
'''
