from rest_framework import serializers
from .models import Contact


# Create your models here.
class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ('id', 'name', 'phone_number')