from rest_framework import routers

from .views import MangaViewSet, PageViewSet, ChapterViewSet
# Создаем router и регистрируем наш ViewSet
router = routers.DefaultRouter()
router.register(r'manga', MangaViewSet)
router.register(r'page', PageViewSet)
router.register(r'chapter', ChapterViewSet)
# URLs настраиваются автоматически роутером
urlpatterns = router.urls