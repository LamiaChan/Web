from django.contrib import admin

from .models import Page
from .models import Chapter
from .models import Source
from .models import Manga


admin.site.register(Page)
admin.site.register(Chapter)
admin.site.register(Source)
admin.site.register(Manga)