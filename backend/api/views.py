from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.parsers import FileUploadParser
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.generics import CreateAPIView
from rest_framework.generics import RetrieveUpdateAPIView
from .serializers import MangaSerializer, ChapterSerializer, PageSerializer, TagSerializer
from core.models import Manga, Page, Source, Chapter, Tag


class RegisterView(CreateAPIView):
    """
    Register View

    Register a new user to the system.
    The data required are username, email, name, password and mobile.

    Author: Himanshu Shankar (https://himanshus.com)
            Aditya Gupta (https://github.com/ag93999)
    """
    from .serializers import UserSerializer
    from rest_framework.permissions import AllowAny
    from rest_framework.renderers import JSONRenderer

    renderer_classes = (JSONRenderer,)
    permission_classes = (AllowAny,)
    serializer_class = UserSerializer

    def perform_create(self, serializer):
        from django.contrib.auth.models import User

        user = User.objects.create_user(
            username=serializer.validated_data['username'],
            email=serializer.validated_data['email'],
            password=serializer.validated_data['password'])
        serializer = self.get_serializer(user)


class LoginView(APIView):
    """
    Login View

    This is used to Login into system.
    The data required are 'username' and 'password'.

    username -- Either username or mobile or email address.
    password -- Password of the user.

    Author: Himanshu Shankar (https://himanshus.com)
            Aditya Gupta (https://github.com/ag93999)
    """
    from rest_framework_jwt.serializers import JSONWebTokenSerializer
    from rest_framework.permissions import AllowAny
    from rest_framework.renderers import JSONRenderer

    renderer_classes = (JSONRenderer,)
    permission_classes = (AllowAny,)
    serializer_class = JSONWebTokenSerializer

    def validated(self, serialized_data, *args, **kwargs):
        from rest_framework_jwt.settings import api_settings

        from datetime import datetime


        from drfaddons.utils import get_client_ip

        from rest_framework.response import Response

        user = serialized_data.object.get('user') or self.request.user
        token = serialized_data.object.get('token')
        response_data = api_settings.JWT_RESPONSE_PAYLOAD_HANDLER(token, user,
                                                                  self.request)
        response = Response(response_data)
        if api_settings.JWT_AUTH_COOKIE:
            expiration = (datetime.utcnow() +
                          api_settings.JWT_EXPIRATION_DELTA)
            response.set_cookie(api_settings.JWT_AUTH_COOKIE,
                                token,
                                expires=expiration,
                                httponly=True)

        user.last_login = datetime.now()
        user.save()


        return response

    def post(self, request):
        from drfaddons.utils import JsonResponse

        from rest_framework import status

        serialized_data = self.serializer_class(data=request.data)
        if serialized_data.is_valid():
            return self.validated(serialized_data=serialized_data)
        else:
            return JsonResponse(serialized_data.errors,
                                status=status.HTTP_422_UNPROCESSABLE_ENTITY)


class MangaViewSet(viewsets.ModelViewSet):
    queryset = Manga.objects.all()
    serializer_class = MangaSerializer

class JavaAppMangaViewSet(viewsets.ModelViewSet):
    queryset = Manga.objects.all()
    serializer_class = MangaSerializer

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        serializer = self.get_serializer(queryset, many=True)
        serializer_data = serializer.data # get the default serialized representation
        custom_data = {'content': serializer_data} # custom representation
        return Response(custom_data)

class ChapterViewSet(viewsets.ModelViewSet):
    queryset = Chapter.objects.all()
    serializer_class = ChapterSerializer

class PageViewSet(viewsets.ModelViewSet):
    queryset = Page.objects.all()
    serializer_class = PageSerializer

class TagViewSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer

