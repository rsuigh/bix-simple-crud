from .models import Employee
from rest_framework import serializers

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ['name', 'created_at', 'address', 'birthdate', 'gender',
                   'entry_date', 'leave_date', 'vacation_date_start',
                   'vacation_date_end']

  