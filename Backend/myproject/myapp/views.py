from django.http import JsonResponse, HttpResponse, Http404 # http responses and handle error
from django.views.decorators.csrf import csrf_exempt #Disables CSRF validation
from .models import JobApplication, Plan, Trainer
from .serializers import RegistrationSerializer, PlanSerializer, TrainerSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status, generics
import folium
from rest_framework.views import APIView

@csrf_exempt
def submit_application(request):
    if request.method == 'POST':
        first_name = request.POST.get('first_name')
        last_name = request.POST.get('last_name')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        city = request.POST.get('city')
        position = request.POST.get('position')
        preferred_location = request.POST.get('preferred_location')
        linkedin_profile = request.POST.get('linkedin_profile')
        other_details = request.POST.get('other_details')
        resume = request.FILES.get('resume')  

        # Saving data to the database
        application = JobApplication.objects.create(
            first_name=first_name,
            last_name=last_name,
            email=email,
            phone=phone,
            city=city,
            position=position,
            preferred_location=preferred_location,
            linkedin_profile=linkedin_profile,
            other_details=other_details,
            resume=resume,
        )
        application.save()

        return JsonResponse({'message': 'Application submitted successfully!'})
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=400)

@api_view(['POST'])
def register(request):
    if request.method == 'POST':
        serializer = RegistrationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'status': 'success'}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
def ahmedabad_map(request):
    # Create a Folium map centered on Ahmedabad
    map_center = [23.0225, 72.5714]
    my_map = folium.Map(location=map_center, zoom_start=12)

    # Add a marker at the center of Ahmedabad
    folium.Marker([23.026966,72.506740], popup="Satellite Branch").add_to(my_map)
    folium.Marker([23.046465,72.530687], popup="Vastrapur Branch").add_to(my_map)
    folium.Marker([22.994948,72.604401], popup="Maninagar Branch").add_to(my_map)

    # Generate the HTML representation of the map
    map_html = my_map._repr_html_()
    
    return HttpResponse(map_html)   




# PlanList handles GET requests for all plans
class PlanList(APIView):
    def get(self, request):
        plans = Plan.objects.all()  # Fetch all plans
        serializer = PlanSerializer(plans, many=True)  # Serialize data
        return Response(serializer.data)

    # POST method for creating new plans
    def post(self, request):
        serializer = PlanSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# PlanDetail handles GET requests for individual plans
class PlanDetail(APIView):
    def get_object(self, pk):
        try:
            return Plan.objects.get(pk=pk)
        except Plan.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        plan = self.get_object(pk)
        serializer = PlanSerializer(plan)
        return Response(serializer.data)

    def put(self, request, pk):
        plan = self.get_object(pk)
        serializer = PlanSerializer(plan, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # DELETE for deleting a plan
    def delete(self, request, pk):
        plan = self.get_object(pk)
        plan.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)



#Trainer
class TrainerListView(generics.ListAPIView):
    queryset = Trainer.objects.all()
    serializer_class = TrainerSerializer

