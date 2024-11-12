# myproject/urls.py
from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path('admin/', admin.site.urls),
    path('signup/', include('users.urls')),  # signup/を処理するパターンを追加
]
