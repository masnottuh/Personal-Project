from rest_framework import serializers
from .models import JobBoard

class JobBoardSerializer(serializers.ModelSerializer):

    class Meta:
        model = JobBoard
        fields = ('pk', 'title', 'location', 'level', 'details', 'postedDate')