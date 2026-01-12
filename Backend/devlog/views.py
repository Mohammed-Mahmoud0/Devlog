from django.shortcuts import render
from .serializers import (
    BlogSerializer,
    UserRegistrationSerializer,
    updateUserSerializer,
)
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from .models import Blog
from rest_framework.pagination import PageNumberPagination
from django.contrib.auth import get_user_model
from .serializers import UserInfoSerializer
from .serializers import SimpleAuthorSerializer


# Create your views here.
class BlogListPagination(PageNumberPagination):
    page_size = 3


@api_view(["POST"])
def register_user(request):
    serializer = UserRegistrationSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_username(request):
    user = request.user
    username = user.username
    return Response({"username": username})


@api_view(["GET"])
def get_userinfo(request, username):
    User = get_user_model()
    user = User.objects.get(username=username)
    serializer = UserInfoSerializer(user)
    return Response(serializer.data)


@api_view(["GET"])
def get_user(request, email):
    User = get_user_model()
    try:
        existing_user = User.objects.get(email=email)
        serializer = SimpleAuthorSerializer(existing_user)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except User.DoesNotExist:
        return Response({"detail": "User not found."}, status=status.HTTP_404_NOT_FOUND)


@api_view(["PUT"])
@permission_classes([IsAuthenticated])
def update_user_profile(request):
    serializer = updateUserSerializer(request.user, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def create_blog(request):
    user = request.user
    serializer = BlogSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(author=user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET"])
def list_blogs(request):
    blogs = Blog.objects.all()
    paginator = BlogListPagination()
    paginated_blogs = paginator.paginate_queryset(blogs, request)
    serializer = BlogSerializer(paginated_blogs, many=True)
    return paginator.get_paginated_response(serializer.data)


@api_view(["GET"])
def get_blog(request, slug):
    try:
        blog = Blog.objects.get(slug=slug)
    except Blog.DoesNotExist:
        return Response({"error": "Blog not found."}, status=status.HTTP_404_NOT_FOUND)

    serializer = BlogSerializer(blog)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(["PUT"])
@permission_classes([IsAuthenticated])
def update_blog(request, pk):
    try:
        blog = Blog.objects.get(pk=pk)
        user = request.user
        if blog.author != user:
            return Response(
                {"error": "You do not have permission to edit this blog."},
                status=status.HTTP_403_FORBIDDEN,
            )
    except Blog.DoesNotExist:
        return Response({"error": "Blog not found."}, status=status.HTTP_404_NOT_FOUND)

    serializer = BlogSerializer(blog, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["DELETE"])
@permission_classes([IsAuthenticated])
def delete_blog(request, pk):
    try:
        blog = Blog.objects.get(pk=pk)
        user = request.user
        if blog.author != user:
            return Response(
                {"error": "You do not have permission to delete this blog."},
                status=status.HTTP_403_FORBIDDEN,
            )
    except:
        return Response({"error": "Blog not found."}, status=status.HTTP_404_NOT_FOUND)

    blog.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)
