from rest_framework import viewsets
from .serializers import MangaSerializer, ChapterSerializer, PageSerializer
from core.models import Manga, Page, Source, Chapter


class MangaViewSet(viewsets.ModelViewSet):
    queryset = Manga.objects.all()
    serializer_class = MangaSerializer


    