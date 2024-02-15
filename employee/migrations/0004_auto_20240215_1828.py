# Generated by Django 3.2 on 2024-02-15 18:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('employee', '0003_auto_20240215_1817'),
    ]

    operations = [
        migrations.AlterField(
            model_name='employee',
            name='birthdate',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='employee',
            name='entry_date',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='employee',
            name='gender',
            field=models.CharField(max_length=20),
        ),
    ]
