from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework import generics

from .models import CompanyActionHistory, EmployeeActionHistory


from .serializers import UserSerializer, CompanyHistorySerializer, EmployeeHistorySerializer

# Create your views here.
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_role(request):
    user = request.user
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)

@permission_classes([IsAuthenticated])
class CompanyHistoryList(generics.ListAPIView):
    queryset = CompanyActionHistory.objects.all().order_by('-timestamp')
    serializer_class = CompanyHistorySerializer
    
@permission_classes([IsAuthenticated])
class EmployeeHistoryList(generics.ListAPIView):
    queryset = EmployeeActionHistory.objects.all().order_by('-timestamp')
    serializer_class = EmployeeHistorySerializer