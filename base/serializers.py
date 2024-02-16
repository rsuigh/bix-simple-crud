from rest_framework import serializers
from base.models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class CompanyHistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = CompanyActionHistory
        fields = '__all__'

class EmployeeHistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = EmployeeActionHistory
        fields = '__all__'