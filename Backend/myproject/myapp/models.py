from django.db import models


class JobApplication(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=15)
    city = models.CharField(max_length=100)
    position = models.CharField(max_length=100)
    preferred_location = models.CharField(max_length=150)
    linkedin_profile = models.URLField(blank=True, null=True)
    other_details = models.TextField(blank=True, null=True)
    resume = models.FileField(upload_to='resumes/', blank=True, null=True)

    def __str__(self):
        return f'{self.first_name} {self.last_name} - {self.position}'

class Registration(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    preferred_location = models.CharField(max_length=100)
    plan = models.CharField(max_length=50)
    
    def __str__(self):
        return self.name



class Plan(models.Model):
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=8, decimal_places=2)
    duration = models.CharField(max_length=100)
    timing = models.CharField(max_length=100)
    group_activities = models.BooleanField(default=False)
    personal_training = models.BooleanField(default=False)
    diet_counselling = models.BooleanField(default=False)
    sauna = models.BooleanField(default=False)
    yoga = models.BooleanField(default=False)
    female_plan=models.BooleanField(default=False)
    supplements=models.CharField(max_length=50)
    others=models.CharField(max_length=100)
    available_equipments = models.TextField()    # Store list of equipment as a comma-separated string

    def __str__(self):
        return self.name

class Trainer(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    gender=models.CharField(max_length=20)
    image=models.URLField(max_length=200,null=True)
    age=models.IntegerField(default=0)
    specialization = models.CharField(max_length=200)
    experience = models.IntegerField()
    bio = models.TextField()

    def __str__(self):
        return self.name