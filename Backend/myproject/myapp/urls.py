from django.urls import path
from .views import submit_application, register, ahmedabad_map,PlanList,PlanDetail, TrainerListView


urlpatterns = [
    path('submit-application/', submit_application, name='submit-application'),
    path('register/', register, name='register'),
    path('map/',ahmedabad_map,name="ahmedabad_map"),
    path('plans/', PlanList.as_view(), name='plan-list'),
    path('plans/<int:pk>/', PlanDetail.as_view(), name='plan-detail'), 
    path('trainers/', TrainerListView.as_view(), name='trainer-list'),
]