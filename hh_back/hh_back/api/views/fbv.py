import json
from django.http import JsonResponse
from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from api.models import Company, Vacancy
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
from api.serializers import CompanySerializer, VacancySerializer

@permission_classes([IsAuthenticated])
@api_view(['GET'])
def vacancies_by_company(request, companyId):
        try:
            vacancies = Vacancy.objects.filter(company = Company.objects.get(id = companyId))
        except Company.DoesNotExist as e:
            return JsonResponse({'error': str(e)})
        serializer = VacancySerializer(vacancies, many=True)
        return JsonResponse(serializer.data, safe=False)

@api_view(['GET'])
def get_top_ten_vacancies(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    serializer = VacancySerializer(vacancies, many=True)
    return JsonResponse(serializer.data, safe=False)