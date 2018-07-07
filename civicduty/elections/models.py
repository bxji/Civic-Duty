from django.db import models

class Elections(models.Model):

    kind = models.CharField(max_length=250)
    ids = models.IntegerField()
    name = models.CharField(max_length=250)
    day = models.IntegerField()
    ocdDivison = models.IntegerField()

    #def __str__(self):
        #return self.name
