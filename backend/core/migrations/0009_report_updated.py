# Generated by Django 3.0 on 2020-02-18 03:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0008_auto_20200218_0620'),
    ]

    operations = [
        migrations.AddField(
            model_name='report',
            name='updated',
            field=models.DateTimeField(auto_now=True),
        ),
    ]