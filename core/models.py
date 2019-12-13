from django.db                  import models
from django.urls                import reverse
from django.utils               import timezone
from django.utils.translation   import ugettext_lazy as _
from urllib.parse 		        import urlparse


class Source(models.Model):
    url = models.URLField()

    PLATFORM_DICT = {
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
    
class Manga(models.Model):
    title = models.CharField(max_length=256)
    description = models.CharField(max_length=500)
    sources = models.ManyToManyField(Source)

    def __str__(self):
        return str(self.title)

class Chapter(models.Model):
    title = models.CharField(max_length=256)
    manga = models.ForeignKey(Manga, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.title)

class Page(models.Model):
    number = models.IntegerField(null=True, blank=True)
    image = models.ImageField(upload_to='manga')

    chapter = models.ForeignKey(Chapter, on_delete=models.CASCADE)
    def __str__(self):
        return str(self.image.url)