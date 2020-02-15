from rest_framework.serializers             import (HyperlinkedIdentityField, ModelSerializer, SerializerMethodField, ValidationError) 
from rest_framework                         import serializers 
from django.utils.text                      import gettext_lazy as _
from core.models                            import *
from django.contrib.auth                    import get_user_model


User = get_user_model()
'''
class MangaUserSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source='user.username')
    email = serializers.CharField(source='user.email')
    password = serializers.CharField(source='user.password')
    user_image = serializers.Field(source='user_image')
    user_moto = serializers.Field(source='user_moto')

    class Meta:
        model = MangaUser
        fields = ('id', 'username', 'email', 'password', 'user_image', 'user_moto')

    def restore_object(self, attrs, instance=None):
        """
        Given a dictionary of deserialized field values, either update
        an existing model instance, or create a new model instance.
        """
        if instance is not None:
            instance.user.email = attrs.get('user.email', instance.user.email)
            instance.user_image = attrs.get('user_image', instance.user_image)
            instance.user_moto = attrs.get('user_moto', instance.user_moto)
            instance.user.password = attrs.get('user.password', instance.user.password)
            return instance

        user = User.objects.create_user(username=attrs.get('user.username'), email= attrs.get('user.email'), password=attrs.get('user.password'))
        return MangaUser(user=user)
'''

class UserSerializer(serializers.ModelSerializer):
    #mangauser_set = serializers.SerializerMethodField()
    user_image = serializers.ImageField(source='mangauser.user_image')
    user_moto = serializers.CharField(source='mangauser.user_moto')

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password', 'user_image', 'user_moto']
        extra_kwargs = {'password': {'write_only': True}}


    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

    def update(self, instance, validated_data):
        for attr, value in validated_data.items():
            if attr == 'password':
                instance.set_password(value)
            else:
                setattr(instance, attr, value)
        instance.save()
        return instance

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
            'updated',
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
    

        