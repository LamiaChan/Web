from django.test         import TestCase
from core.models         import *

#доделать 

class CoreModelTest(TestCase):

    @classmethod
    def setUpTestData(cls):
        #Set up non-modified objects used by all test methods
        Manga.objects.create(title='Тестовая манга', description='бла бла бла')
        Tag.objects.create(title='testing')

    def test_tag_title_lable(self):
        tag=Tag.objects.get(id=1)
        field_label = tag._meta.get_field('title').verbose_name
        self.assertEquals(field_label,'title')

    def test_title_label(self):
        manga=Manga.objects.get(id=1)
        field_label = manga._meta.get_field('title').verbose_name
        self.assertEquals(field_label,'title')

    def test_description_label(self):
        manga=Manga.objects.get(id=1)
        field_label = manga._meta.get_field('description').verbose_name
        self.assertEquals(field_label,'description')

    def test_title_name_max_length(self):
        manga=Manga.objects.get(id=1)
        max_length = manga._meta.get_field('title').max_length
        self.assertEquals(max_length,256)

    def test_description_name_max_length(self):
        manga=Manga.objects.get(id=1)
        max_length = manga._meta.get_field('description').max_length
        self.assertEquals(max_length,500)

    def test_description_name_max_length(self):
        tag=Tag.objects.get(id=1)
        max_length = tag._meta.get_field('title').max_length
        self.assertEquals(max_length,256)