from django.db import models

# Create your models here.

class Employee(models.Model):

    GENDER_CHOICES = [
        ("M", 'Masculino'),
        ("F", 'Feminino'),
        ("O", 'Outro')
    ]


    name = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    address = models.CharField(max_length=200)
    birthdate = models.DateField()
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES)

    entry_date = models.DateTimeField()
    leave_date = models.DateTimeField()
    vacation_date_start = models.DateTimeField()
    vacation_date_end = models.DateTimeField()

