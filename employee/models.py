from django.db import models

# Create your models here.

class Employee(models.Model):

    name = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    address = models.CharField(max_length=200)
    birthdate = models.DateField(null=True, blank=True)
    gender = models.CharField(max_length=20)

    entry_date = models.DateField(null=True, blank=True)
    leave_date = models.DateField(null=True, blank=True)
    vacation_date_start = models.DateField(null=True, blank=True)
    vacation_date_end = models.DateField(null=True, blank=True)

