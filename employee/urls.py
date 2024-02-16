from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from .views import EmployeeViewSet, DeleteEmployeeView

app_name = 'employee'
router = routers.DefaultRouter()
router.register(r'', EmployeeViewSet, basename='employee')


urlpatterns = [
    path('', include(router.urls)),
    path(r'delete/<int:pk>/', DeleteEmployeeView.as_view(), name='delete')

]

urlpatterns += router.urls