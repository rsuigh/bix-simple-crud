from rest_framework import viewsets
from .serializers import EmployeeSerializer
from bix_simple_crud.permissions import ReadOnlyOrAdminPermission
from rest_framework.generics import DestroyAPIView


from .models import Employee

# Create your views here.

class EmployeeViewSet(viewsets.ModelViewSet):
    """
    API endpoint que permite que o funcionário seja vista ou editada
    """

    queryset = Employee.objects.all().order_by('-created_at')
    serializer_class = EmployeeSerializer
    permission_classes = [ReadOnlyOrAdminPermission]


class DeleteEmployeeView(DestroyAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer