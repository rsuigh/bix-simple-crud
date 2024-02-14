from django.shortcuts import render
from rest_framework import permissions, viewsets
from .models import Company
from bix_simple_crud.permissions import ReadOnlyOrAdminPermission
from .serializers import CompanySerializer


# Create your views here.

class CompanyViewSet(viewsets.ModelViewSet):
    """
    API endpoint que permite que a empresa seja vista ou editada
    """

    queryset = Company.objects.all().order_by('-created_at')
    serializer_class = CompanySerializer
    permission_classes = [ReadOnlyOrAdminPermission]