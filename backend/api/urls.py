from rest_framework import routers
from django.urls import include, path

from .views import MangaViewSet, ChapterViewSet, PageViewSet, TagViewSet, JavaAppMangaViewSet


router = routers.DefaultRouter()
router.register(r'manga', MangaViewSet)
router.register(r'jmanga', JavaAppMangaViewSet)
router.register(r'chapter', ChapterViewSet)
router.register(r'page', PageViewSet)
router.register(r'tag', TagViewSet)

urlpatterns = router.urls

