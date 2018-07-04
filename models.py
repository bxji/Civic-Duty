from django.db import models
from django.contrib.auth.models import User


class Politician(models.Model):
    name = models.charField(max_length=200)
    party = models.TextField()
    photo = models.ImageField(
        upload_to="politicians/photos/", null=True, blank=True)
