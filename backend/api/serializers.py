from rest_framework import serializers
from core.models import *

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = [
            'id',
            'title',
        ]

class DateUpSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = [
            'id',
            'date',
        ]
    

class PageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Page
        fields = [
            'id', 
            'number', 
            'image', 
            'chapter'
        ]

class ChapterSerializer(serializers.ModelSerializer):
    page_set = serializers.SerializerMethodField()
    class Meta:
        model = Chapter
        fields = [
            'id', 
            'title', 
            'manga', 
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
            'tags',
            'upload_date',
            'updated',
            'chapter_set',

        ]
    
    def get_chapter_set(self, instance):
        chapter = instance.chapter_set.all()
        return ChapterSerializer(chapter, many=True).data
    

        