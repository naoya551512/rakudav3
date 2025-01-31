from django.shortcuts import render
from django.http import JsonResponse
from django.views import View
from django.contrib.auth import authenticate, login as auth_login
from django.contrib.auth.models import User
import json

def signup(request):
        if request.method == 'POST':
            data = json.loads(request.body)
            username = data.get('username')
            password = data.get('password')
        if User.objects.filter(username=username).exists():
            return JsonResponse({"message": "このユーザー名は既に使用されています。"}, status=400)
        if not username or not password:
            return JsonResponse({'message': 'ユーザー名とパスワードを入力してください'}, status=400)
        try:
            user = User.objects.create_user(username=username, password=password)
            return JsonResponse({'message': '登録成功'}, status=200)
        except Exception as e:
            return JsonResponse({'message': f'エラー: {str(e)}'}, status=500)
def user_login(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')
        if not username or not password:
            return JsonResponse({'message': 'ユーザー名とパスワードを入力してください'}, status=400)
        user = authenticate(request, username=username, password=password)
        if user is not None:
            auth_login(request, user)  
            return JsonResponse({'message': 'ログイン成功'}, status=200)
        else:
            return JsonResponse({'message': 'ユーザー名またはパスワードが間違っています'}, status=401)