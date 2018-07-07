from rest_framework import serializers
from .models import Elections

class  ElectionsSerializers(serializers.ModelSerializer):

    class Meta:
        model = Elections
        fields = '__all__'
