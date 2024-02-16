from django.urls import path, include
from .views import MyTokenObtainPairView, MyTokenRefreshView




urlpatterns = [
   path('token/',  MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
   path('token/refresh/',  MyTokenRefreshView.as_view(), name='token_refresh'),
   path('', include('base.urls'))
]