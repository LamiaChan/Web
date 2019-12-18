from rest_framework import routers
from django.urls import include, path

from .views import MangaViewSet, ChapterViewSet


router = routers.DefaultRouter()
router.register(r'manga', MangaViewSet)
router.register(r'chapter', ChapterViewSet)

urlpatterns = router.urls

