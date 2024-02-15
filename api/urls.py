from django.urls import path, include
from .views import MyTokenObtainPairView


urlpatterns = [
   path('token/',  MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
   path('token/refresh/',  MyTokenObtainPairView.as_view(), name='token_refresh'),
   path('', include('base.urls'))
]