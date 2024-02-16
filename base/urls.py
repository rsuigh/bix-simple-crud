from django.urls import path
from .views import get_role, CompanyHistoryList, EmployeeHistoryList

urlpatterns = [
    path('is_staff/', get_role),
    path('recent_actions/company', CompanyHistoryList.as_view(), name='company_recent_actions'),
    path('recent_actions/employee', EmployeeHistoryList.as_view(), name='employee_recent_actions'),
]