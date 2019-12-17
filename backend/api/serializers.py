from rest_framework import serializers
from core.models import Manga, Page, Source, Chapter

class PageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Page
        fields = [
            'id', 
            'number', 
            'image', 
            'chapter_id'
        ]

class ChapterSerializer(serializers.ModelSerializer):
    page_set = serializers.SerializerMethodField()
    class Meta:
        model = Chapter
        fields = [
            'id', 
            'title', 
            'manga_id', 
            'page_set'
            
        ]
    
    def get_page_set(self, instance):
        page = instance.page_set.all()
        return PageSerializer(page, many=True).data
        

class MangaSerializer(serializers.ModelSerializer):
    chapter_set = serializers.SerializerMethodField()
    class Meta:
        model = Manga
        fields = [
            'id', 
            'title', 
            'description', 
            'preview_image_url',
            'chapter_set',

        ]
    
    def get_chapter_set(self, instance):
        chapter = instance.chapter_set.all()
        return ChapterSerializer(chapter, many=True).data
        