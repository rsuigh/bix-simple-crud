from rest_framework import viewsets
from .models import Company
from bix_simple_crud.permissions import ReadOnlyOrAdminPermission
from .serializers import CompanySerializer
from rest_framework.generics import DestroyAPIView


# Create your views here.

class CompanyViewSet(viewsets.ModelViewSet):
    """
    API endpoint que permite que a empresa seja vista ou editada
    """

    queryset = Company.objects.all().order_by('-created_at')
    serializer_class = CompanySerializer
    permission_classes = [ReadOnlyOrAdminPermission]

class DeleteCompanyView(DestroyAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer


    