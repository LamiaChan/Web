from rest_framework import routers
from django.urls import include, path

from . import views
from .views import MangaViewSet, ChapterViewSet, PageViewSet, TagViewSet, JavaAppMangaViewSet


router = routers.DefaultRouter()
router.register(r'manga', MangaViewSet)
router.register(r'jmanga', JavaAppMangaViewSet)
router.register(r'chapter', ChapterViewSet)
router.register(r'page', PageViewSet)
router.register(r'tag', TagViewSet)

urlpatterns = [
    path('login/', views.LoginView.as_view(), name='Login'),
    # ex: api/user/register/
    path('register/', views.RegisterView.as_view(), name='Register'),
]

urlpatterns += router.urls

