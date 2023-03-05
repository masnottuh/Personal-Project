from django.contrib import admin
from django.urls import path, re_path
from JobBoard import views

urlpatterns = [
    path("admin/", admin.site.urls),
    re_path(r'^api/JobBoard/$', views.job_list),
    re_path(r'^api/JobBoard/([0-9])$', views.job_detail),
]
