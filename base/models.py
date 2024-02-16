
from django.db import models
from django.contrib.auth.models import User
from django.db import models


class UserRole(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='user')
    
    def __str__(self):
        return self.user.username
    

class CompanyActionHistory(models.Model):
    action=models.CharField(max_length=200)
    timestamp = models.DateTimeField(auto_now_add=True)
    company_name = models.CharField(max_length=200, null=True)

class EmployeeActionHistory(models.Model):
    action=models.CharField(max_length=200)
    timestamp = models.DateTimeField(auto_now_add=True)
    employee_name = models.CharField(max_length=200, null=True)
