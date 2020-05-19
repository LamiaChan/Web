# Generated by Django 3.0.3 on 2020-05-18 21:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0024_auto_20200519_0005'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='bookmarks',
            field=models.ManyToManyField(blank=True, default=None, to='core.Page'),
        ),
        migrations.AlterField(
            model_name='user',
            name='user_favorite_manga',
            field=models.ManyToManyField(blank=True, default=None, to='core.Manga'),
        ),
    ]