# Each serializer converts model instances into JSON format for API responses and 
# can also handle incoming JSON data for creating or updating model instances.
from rest_framework import serializers
from .models import JobApplication, Registration, Plan, Trainer

# ModelSerializer: Creates a serializer based on a model.
# It automatically generates fields based on the model’s attributes.
class JobApplicationSerializer(serializers.ModelSerializer):
    # Meta class: Contains metadata about the serializer.
    class Meta:
        model = JobApplication
        fields = '__all__'

class RegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Registration
        fields = ['name', 'email', 'phone', 'preferred_location', 'plan']

class PlanSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plan
        fields = '__all__'

class TrainerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trainer
        fields = ['id', 'name','email','gender','age','image', 'specialization', 'experience','bio']