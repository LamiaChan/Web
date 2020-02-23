from rest_framework                 import viewsets
from rest_framework.response        import Response
from rest_framework.parsers         import FileUploadParser
from rest_framework.views           import APIView
from rest_framework                 import status
from rest_framework.generics        import CreateAPIView
from rest_framework.generics        import RetrieveUpdateAPIView
from .serializers                   import MangaSerializer, ChapterSerializer, PageSerializer, TagSerializer, UserSerializer, ReportSerializer, ShowUserSerializer
from core.models                    import Manga, Page, Source, Chapter, Tag, Report
#, MangaUser
from rest_framework.permissions     import IsAuthenticated, AllowAny
from rest_framework.decorators      import api_view
from rest_framework.decorators      import permission_classes
from django.contrib.auth            import get_user_model
from rest_framework.parsers         import FileUploadParser, FormParser
from rest_framework.pagination      import PageNumberPagination


'''
need to refactor frontend
'''

class StandardResultsSetPagination(PageNumberPagination):
    page_size = 2
    page_size_query_param = 'page_size'
    max_page_size = 1000


User = get_user_model()

class GetUserInfo(APIView):

    permission_classes = (IsAuthenticated,)
    serializer_class = UserSerializer

    def get(self, request, *args, **kwargs):
        # serializer to handle turning our `User` object into something that
        # can be JSONified and sent to the client.
        serializer = self.serializer_class(request.user, context={"request":request})

        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, *args, **kwargs):
        serializer = self.serializer_class(request.user, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)


class ShowUserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = ShowUserSerializer
    http_method_names = ['get']

class CreateUserAPIView(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class MangaViewSet(viewsets.ModelViewSet):
    pagination_class = StandardResultsSetPagination
    queryset = Manga.objects.all().order_by('-updated')
    serializer_class = MangaSerializer
    

class ReportViewSet(viewsets.ModelViewSet):
    #pagination_class = StandardResultsSetPagination
    queryset = Report.objects.all().order_by('-updated')
    serializer_class = ReportSerializer
    #need to refactor
    http_method_names = ['get']


class ChapterViewSet(viewsets.ModelViewSet):
    queryset = Chapter.objects.all().order_by('-updated')
    serializer_class = ChapterSerializer

class PageViewSet(viewsets.ModelViewSet):
    queryset = Page.objects.all()
    serializer_class = PageSerializer

class TagViewSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer

