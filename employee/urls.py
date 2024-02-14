from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from . import views

app_name = 'employee'
router = routers.DefaultRouter()
router.register(r'', views.EmployeeViewSet, basename='employee')


urlpatterns = [
    path('', include(router.urls)),
]

urlpatterns += router.urls