from rest_framework.serializers             import (HyperlinkedIdentityField, ModelSerializer, SerializerMethodField, ValidationError) 
from rest_framework                         import serializers 
from django.utils.text                      import gettext_lazy as _
from core.models                            import *
from django.contrib.auth                    import get_user_model


User = get_user_model()

class ShowUserSerializer(serializers.ModelSerializer):
    """
    Cериализатор для вывода информации о юзере
    """
    class Meta:
        model = User
        fields = [
            'id', 
            'username', 
            'email', 
            'user_image', 
            'user_moto', 
            'user_favorite_manga',
            'bookmarks',
            'rank'
        ]

        read_only_fields  = [
            'id', 
            'username', 
            'email', 
            'user_image', 
            'user_moto', 
            'user_favorite_manga',
            'rank'
        ]



class ReportSerializer(serializers.ModelSerializer):
    """
    Cериализатор для вывода новостей
    """
    class Meta:
        model = Report
        fields = [
            'id',
            'title',
            'image',
            'body',
            'updated'
        ]


class TagSerializer(serializers.ModelSerializer):
    """
    Cериализатор для вывода тегов
    """
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


class PageCommentSerializer(serializers.ModelSerializer):
    """
    Cериализатор для вывода коментарьев на странице
    """
    class Meta:
        model = PageComment
        fields = [
            'id',
            'author',
            'text',
            'created_date',
        ]
    

class PageSerializer(serializers.ModelSerializer):
    """
    Cериализатор для вывода страницы
    """
    pagecomment_set = serializers.SerializerMethodField()
    class Meta:
        model = Page
        fields = [
            'id', 
            'number', 
            'image', 
            'chapter',
            'pagecomment_set'
        ]
    def get_pagecomment_set(self, instance):
        """
        Метод для линковке кометарьев к странице
        """
        page_comment = instance.pagecomment_set.all()
        return PageCommentSerializer(page_comment, many=True).data

    

class ChapterSerializer(serializers.ModelSerializer):
    """
    Cериализатор для вывода главы
    """
    page_set = serializers.SerializerMethodField()
    class Meta:
        model = Chapter
        fields = [
            'id', 
            'title',
            'manga', 
            'updated',
            'page_set'
            
        ]
    
    def get_page_set(self, instance):
        """
        Метод для линковке страниц к главам
        """
        page = instance.page_set.all()
        return PageSerializer(page, many=True).data
        

class MangaSerializer(serializers.ModelSerializer):
    """
    Cериализатор для вывода манги
    """
    chapter_set = serializers.SerializerMethodField()
    class Meta:
        model = Manga
        fields = [
            'id', 
            'title', 
            'description', 
            'preview_image_url',
            'tags',
            'url_name',
            'year_of_publish',
            'nswf',
            'likes',
            'updated',
            'gradient_color1',
            'gradient_color2',
            'chapter_set',

        ]
        
        lookup_field = 'url_name'

        extra_kwargs = {
            'url': {'lookup_field': 'url_name'}
        }
    
    def get_chapter_set(self, instance):
        """
        Метод для линковке глав к манге
        """
        chapter = instance.chapter_set.all()
        return ChapterSerializer(chapter, many=True).data
    
    


class UserSerializer(serializers.ModelSerializer):
    """
    Cериализатор пользователей
    """

    user_favorite_manga = MangaSerializer(many=True, required=False)
    bookmarks = PageSerializer(many=True, required=False)


    class Meta:
        model = User
        fields = [
            'id', 
            'username', 
            'email', 
            'password', 
            'user_image', 
            'user_moto', 
            'user_favorite_manga',
            'bookmarks',
            'rank',
        ]
        
        extra_kwargs = {
            'password': {'write_only': True},
        }

    def create(self, validated_data):
        """
        Метод для создания юзера
        """
        password = validated_data.pop('password', None)

        instance = self.Meta.model(**validated_data)
        
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

    def update(self, instance, validated_data):
        """
        Метод для обновления юзера
        """
        for attr, value in validated_data.items():
            if attr == 'password':
                instance.set_password(value)
            else:
                setattr(instance, attr, value)
        instance.save()
        return instance