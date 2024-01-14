from django.shortcuts import render
from .serializers import *
from .models import *

# DRF IMPORTS
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics
from rest_framework import permissions
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt




# Create your views here.
class TeacherList(generics.ListCreateAPIView):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer
    #permission_classes = [permissions.IsAuthenticated]



class TeacherDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer
    #permission_classes = [permissions.IsAuthenticated]



@csrf_exempt
def teacher_login(request):
    email=request.POST['email']
    password=request.POST['password']
    teacherData = Teacher.objects.get(email=email, password=password)

    if teacherData:
        return JsonResponse({'bool' : True})
    else:
        return JsonResponse({'bool' : False})
