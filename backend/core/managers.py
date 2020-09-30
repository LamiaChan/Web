from django.contrib.auth.base_user import BaseUserManager

class UserManager(BaseUserManager):
    """
    Надстройка над стандартным юзером
    """
    use_in_migrations = True

    def _create_user(self, username, password, **extra_fields):
        """
        Метод для создания пользователя
        """
        if not username:
            raise ValueError('The given nick must be set')
        #username = self.normalize_username(username)
        user = self.model(username=username, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, username, password=None, **extra_fields):
        """
        Метод для оканчательного создания пользователя
        """
        extra_fields.setdefault('is_superuser', False)
        return self._create_user(username, password, **extra_fields)

    def create_superuser(self, username, password, **extra_fields):
        """
        Метод для создания супер пользователя
        """
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_staff', True)

        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self._create_user(username, password, **extra_fields)