from rest_framework import routers
from django.urls import include, path

from .views import MangaViewSet

# Создаем router и регистрируем наш ViewSet
router = routers.DefaultRouter()
router.register(r'manga', MangaViewSet)
# URLs настраиваются автоматически роутером
urlpatterns = router.urls


'''
urlpatterns = [
    path('get_manga_id/<int:manga_id>', ChapterAPIView.as_view())
]
'''