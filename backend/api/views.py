from rest_framework import viewsets
from .serializers import MangaSerializer, ChapterSerializer, PageSerializer
from core.models import Manga, Page, Source, Chapter
from rest_framework.decorators import action
from rest_framework import generics


class MangaViewSet(viewsets.ModelViewSet):
    queryset = Manga.objects.all()
    serializer_class = MangaSerializer

class PageViewSet(viewsets.ModelViewSet):
    queryset = Page.objects.all()
    serializer_class = PageSerializer

class ChapterViewSet(viewsets.ModelViewSet):
    queryset = Chapter.objects.all()
    serializer_class = ChapterSerializer
    '''
    def get_queryset(self):
        """
        Optionally restricts the returned purchases to a given user,
        by filtering against a `username` query parameter in the URL.
        """
        queryset = Chapter.objects.all()
        manga_id = self.request.query_params.get('manga_id', None)
        if manga_id is not None:
            queryset = queryset.filter(manga_id=manga_id)
        return queryset
    '''



    