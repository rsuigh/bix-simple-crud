from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated


from .serializers import UserSerializer

# Create your views here.
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_role(request):
    user = request.user
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)