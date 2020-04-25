from rest_framework import serializers

from api.models import Company, Vacancy
from django.contrib.auth.models import User


class CompanySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    description = serializers.CharField()
    city = serializers.CharField()
    address = serializers.CharField()

    def create(self, validated_data):
        company = Company(**validated_data)
        company.save()
        return company

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.city = validated_data.get('city', instance.city)
        instance.address = validated_data.get('address', instance.address)
        instance.save()
        return instance

# class CompanySerializer2(serializers.ModelSerializer):
#     id = serializers.IntegerField(read_only=True)
#
#     class Meta():
#         model = Company
#         fields = '__all__'

class VacancySerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)

    class Meta():
        model = Vacancy
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta():
        model = User
        fields = '__all__'