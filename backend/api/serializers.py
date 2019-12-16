from rest_framework import serializers
from core.models import Manga, Page, Source, Chapter

class MangaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Manga
        fields = ('id', 'title', 'description', 'preview_image_url')


class ChapterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chapter
        fields = ('id', 'title', 'manga_id')

class PageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Page
        fields = ('id', 'number', 'image', 'chapter_id')