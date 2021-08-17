from django.urls import path
from .views import PostListView, PostDetailView, PostCreateView, PostUpdateView, PostDeleteView, UserPostListView
from . import views

urlpatterns = [
    path('', PostListView.as_view(), name='blog-home'),
    path('user/<str:username>', UserPostListView.as_view(), name='user-post'),
    path('about', views.about, name='blog-about'),
    path(f'post/<int:pk>/', PostDetailView.as_view(), name='post-detail'),
    path(f'post/new/', PostCreateView.as_view(), name='post-create'),
    path(f'post/<int:pk>/update/', PostUpdateView.as_view(), name='post-update'),
    path(f'post/<int:pk>/delete/', PostDeleteView.as_view(), name='post-delete'),
    
]
