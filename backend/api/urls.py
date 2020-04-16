from rest_framework import routers
from django.urls import include, path

from . import views
from .views import MangaViewSet, ChapterViewSet, PageViewSet, TagViewSet, CreateUserAPIView, ReportViewSet, ShowUserViewSet

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView
)

router = routers.DefaultRouter()
router.register(r'manga', MangaViewSet)
router.register(r'chapter', ChapterViewSet)
router.register(r'page', PageViewSet)
router.register(r'tag', TagViewSet)
router.register(r'news', ReportViewSet)
router.register(r'show_users', ShowUserViewSet)

urlpatterns = [
    path('userinfo/', views.GetUserInfo.as_view(), name='userinfo'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('token/check', TokenVerifyView.as_view(), name='token_checker'),
    path('create/', CreateUserAPIView.as_view()),
]

urlpatterns += router.urls

