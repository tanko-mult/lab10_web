from django.urls import path
from api.views import fbv
from api.views.auth import UserList, login, logout
from api.views.generics import Companies, CompanyDetails, Vacancies, VacancyDetails

urlpatterns = [
    path('companies/', Companies.as_view()),
    path('companies/<int:pk>/', CompanyDetails.as_view()),
    path('companies/<int:companyId>/vacancies/', fbv.vacancies_by_company),

    path('vacancies/', Vacancies.as_view()),
    path('vacancies/<int:pk>/', VacancyDetails.as_view()),
    path('vacancies/top_ten/', fbv.get_top_ten_vacancies),

    path('users/', UserList.as_view()),
    path('login/', login),
    path('logout/', logout)
]