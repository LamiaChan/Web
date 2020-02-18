from django.contrib             import admin
#from django.contrib.auth.admin  import UserAdmin as BaseUserAdmin
#from django.contrib.auth.models import User
from .models import User
from .models import *


'''
class MangaUserInline(admin.StackedInline):
    model = MangaUser
    can_delete = False
    verbose_name_plural = 'mangauser'

class UserAdmin(BaseUserAdmin):
    inlines = (MangaUserInline,)
'''

admin.site.register(Page)
admin.site.register(Chapter)
admin.site.register(Source)
admin.site.register(Manga)
admin.site.register(Tag)
admin.site.register(Report)

admin.site.register(User)
#admin.site.register(User, UserAdmin)