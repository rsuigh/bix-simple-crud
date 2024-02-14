from django.shortcuts import render
from rest_framework import permissions, viewsets
from .serializers import EmployeeSerializer
from bix_simple_crud.permissions import ReadOnlyOrAdminPermission

from .models import Employee

# Create your views here.

class EmployeeViewSet(viewsets.ModelViewSet):
    """
    API endpoint que permite que a empresa seja vista ou editada
    """

    queryset = Employee.objects.all().order_by('-created_at')
    serializer_class = EmployeeSerializer
    permission_classes = [ReadOnlyOrAdminPermission]