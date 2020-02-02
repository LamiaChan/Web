from django.contrib import admin

from .models import *

admin.site.register(Page)
admin.site.register(Chapter)
admin.site.register(Source)
admin.site.register(Manga)
admin.site.register(Tag)
admin.site.register(DateUp)