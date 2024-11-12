# views.py
from django.shortcuts import render
from django.http import JsonResponse
from django.views import View
from django.contrib.auth.models import User

def signup(request):
        
        # リクエストからデータを取得
        username = request.POST.get('username')
        password = request.POST.get('password')

        if not username or not password:
            return JsonResponse({'message': 'ユーザー名とパスワードを入力してください'}, status=400)

        # ユーザー作成処理
        try:
            user = User.objects.create_user(username=username, password=password)
            return JsonResponse({'message': '登録成功'}, status=200)
        except Exception as e:
            return JsonResponse({'message': f'エラー: {str(e)}'}, status=500)
