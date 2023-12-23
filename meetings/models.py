from django.db import models

class Meeting(models.Model):
    topic = models.CharField(max_length=200)
    date = models.DateField()
    start_time = models.TimeField()
    end_time = models.TimeField()
    participants = models.TextField()

