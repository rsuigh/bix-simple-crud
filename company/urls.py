from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from .views import CompanyViewSet, DeleteCompanyView

app_name = 'company'
router = routers.DefaultRouter()
router.register(r'', CompanyViewSet, basename='company')



urlpatterns = [
    path('', include(router.urls)),
    path(r'delete/<int:pk>/', DeleteCompanyView.as_view(), name='delete')
]

urlpatterns += router.urls