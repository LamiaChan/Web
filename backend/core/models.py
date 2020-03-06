from __future__                         import unicode_literals
from django.db                          import models
from django.urls                        import reverse
from django.utils                       import timezone
from django.utils.translation           import ugettext_lazy as _
from urllib.parse 		                import urlparse
from datetime                           import datetime
from django.contrib.auth.models         import User
from django.core.mail                   import send_mail
from django.contrib.auth.models         import PermissionsMixin
from django.contrib.auth.base_user      import AbstractBaseUser
from .managers                          import UserManager
from tinymce.models                     import HTMLField


class Report(models.Model):
    title = models.CharField(max_length=256)
    image = models.ImageField(upload_to='news')
    body = HTMLField()
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.title)

class Source(models.Model):
    url = models.URLField()

    PLATFORM_DICT = {
        'lamiachan.ru': 'lamiachan',
        'mangalib.me': 'mangalib',
        'mangas.rocks': 'readmanga',
        'mints.rocks': 'mintmanga',
        'manga-chan.me': 'mangachan',
        'h-chan.me': 'hentaichan',
    }

    @property
    def platform(self):
        root_url = '.'.join(urlparse(url).netloc.split('.')[-2:])
        return self.PLATFORM_DICT[root_url]

    def __str__(self):
        return str(self.url)
    

class Tag(models.Model):
    title = models.CharField(max_length=256)
    
    def __str__(self):
        return str(self.title)

class Manga(models.Model):
    title = models.CharField(max_length=256)
    #preview_image_url = models.CharField(max_length=256, default='none')
    preview_image_url = models.ImageField(upload_to='manga')
    description = models.CharField(max_length=500)
    sources = models.ManyToManyField(Source)
    tags = models.ManyToManyField(Tag)
    updated = models.DateTimeField(default=datetime.now)
    year_of_publish = models.DateTimeField()
    
    OBJECT_TYPES = [
        ('Манга', 'Манга'),
        ('Манхва', 'Манхва'),
        ('Маньхуа', 'Маньхуа'),
        ('Ранобэ', 'Ранобэ'),
    ]

    NSWF_TYPES = [
        ('true', 'true'),
        ('false', 'false'),
    ]

    nswf = models.CharField(
        max_length = 30,
        choices = NSWF_TYPES,
        default = 'false',
    )

    object_type = models.CharField(
        max_length = 30,
        choices = OBJECT_TYPES,
        default = 'Манга',
    )
    
    TRANSLATING_LIST = [
        ('Ожидает загрузки', 'Ожидает загрузки'),
        ('Заброшенно', 'Заброшенно'),
        ('Продолжается', 'Продолжается'),
        ('Переведено', 'Переведено'),
    ]

    translating_status = models.CharField(
        max_length = 30,
        choices = TRANSLATING_LIST,
        default = 'Ожидает загрузки',
    )

    def __str__(self):
        return str(self.title)

class Chapter(models.Model):
    title = models.CharField(max_length=256)
    manga = models.ForeignKey(Manga, on_delete=models.CASCADE)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        bookmark_title = str(self.manga) + ' : ' + str(self.title)
        return str(bookmark_title)

class Page(models.Model):
    number = models.IntegerField(null=True, blank=True)
    image = models.ImageField(upload_to='manga')
    chapter = models.ForeignKey(Chapter, on_delete=models.CASCADE)
    
    def __str__(self):
        return str(self.image.url)


class User(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(_('user name'), max_length=50, unique=True)
    email = models.EmailField(_('email address'), max_length=30, blank=True)
    first_name = models.CharField(_('first name'), max_length=30, blank=True)
    last_name = models.CharField(_('last name'), max_length=30, blank=True)
    date_joined = models.DateTimeField(_('date joined'), auto_now_add=True)
    is_active = models.BooleanField(_('active'), default=True)
    is_staff = models.BooleanField(_('is_staff'), default=False)
    user_image = models.ImageField(upload_to='upicks', null=True, blank=True)
    user_moto = models.CharField(max_length=256, null=True, blank=True)
    user_favorite_manga = models.ManyToManyField(Manga, null=True, blank=True)
    bookmarks = models.ManyToManyField(Page, null=True, blank=True)
    RANK_LIST = [
        ('Новичок', 'Новичок'),
        ('Завсегдатый', 'Завсегдатый'),
        ('Боженька', 'Боженька'),
        ('Модератор', 'Модератор'),

        #Funny

        ('Жидо-скриптизер', 'Жидо-скриптизер'),
        ('Хозяин-питона', 'Хозяин-питона'),
        ('Джабист', 'Джабист'),
        ('Веб хуежник', 'Веб хуежник')
    ]

    rank = models.CharField(
        max_length = 30,
        choices = RANK_LIST,
        default = 'Новичок',
    )


    objects = UserManager()

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = []

    class Meta:
        verbose_name = _('user')
        verbose_name_plural = _('users')

    def get_full_name(self):
        '''
        Returns the first_name plus the last_name, with a space in between.
        '''
        full_name = '%s %s' % (self.first_name, self.last_name)
        return full_name.strip()

    def get_short_name(self):
        '''
        Returns the short name for the user.
        '''
        return self.first_name
    '''
    def email_user(self, subject, message, from_email=None, **kwargs):

        Sends an email to this User.

        send_mail(subject, message, from_email, [self.email], **kwargs)
    '''

class PageComment(models.Model):
    page = models.ForeignKey(Page, on_delete=models.CASCADE)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    text = models.TextField()
    created_date = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.text