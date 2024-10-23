from django.contrib import admin
from .models import JobApplication, Registration, Plan, Trainer

# Register your models here.
admin.site.register(JobApplication)
admin.site.register(Registration)
admin.site.register(Plan)
admin.site.register(Trainer)