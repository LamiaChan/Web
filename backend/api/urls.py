from rest_framework import routers
from django.urls import include, path

from .views import MangaViewSet, ChapterViewSet, PageViewSet, TagViewSet


router = routers.DefaultRouter()
router.register(r'manga', MangaViewSet)
router.register(r'chapter', ChapterViewSet)
router.register(r'page', PageViewSet)
router.register(r'tag', TagViewSet)

urlpatterns = router.urls

