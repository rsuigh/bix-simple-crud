from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver
from .models import CompanyActionHistory, EmployeeActionHistory
from company.models import Company
from employee.models import Employee


@receiver(post_save, sender=Company)
def company_saved(sender, instance, created, **kwargs):
    action = 'created' if created else 'updated'
    CompanyActionHistory.objects.create(action=action, company_name=instance.name)

@receiver(post_delete, sender=Company)
def company_deleted(sender, instance, **kwargs):
    CompanyActionHistory.objects.create(action='deleted', company_name=instance.name)

@receiver(post_save, sender=Employee)
def employee_saved(sender, instance, created, **kwargs):
    action = 'created' if created else 'updated'
    EmployeeActionHistory.objects.create(action=action, employee_name=instance.name)

@receiver(post_delete, sender=Employee)
def employee_deleted(sender, instance, **kwargs):
    EmployeeActionHistory.objects.create(action='deleted', employee_name=instance.name)
