from django.db import models

class JobBoard(models.Model):
    title = models.CharField("Title", max_length=240)
    location = models.CharField("Location", max_length=240)
    level = models.CharField("Experience Level", max_length=240)
    details = models.CharField("Details", max_length=240)
    postedDate = models.DateField("Date Posted", auto_now_add=True)

    def __str__(self):
        return self.name