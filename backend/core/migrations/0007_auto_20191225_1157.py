# Generated by Django 3.0.1 on 2019-12-25 11:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0006_tag'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='tag',
            name='manga',
        ),
        migrations.AddField(
            model_name='manga',
            name='tags',
            field=models.ManyToManyField(to='core.Tag'),
        ),
    ]
