from django.db import models
from django.contrib.auth.models import User
from core.models import City


class Person(models.Model):
    first_name = models.CharField(max_length=150),
    last_name = models.CharField(max_length=150),
    email = models.EmailField(max_length=100, unique=True),
    address = models.CharField(max_length=255, null=True),
    document_number = models.CharField(max_length=15),
    phone = models.CharField(max_length=15),
    birthday = models.DateField(null=True),
    status = models.BooleanField(default=False),
    city_id = models.ForeignKey(City, related_name="cities", on_delete=models.CASCADE)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    code = models.CharField(max_length=10, unique=True),
    is_virtual = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Student(models.Model):
    level = models.CharField(max_length=15)
    school_from = models.CharField(max_length=255)
    observation = models.TextField(null=True)
    is_virtual = models.BooleanField(default=False)
    grade = models.CharField(max_length=5)
    person_id = models.ForeignKey(Person, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)


class PhoneBook(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    contact_name = models.CharField(max_length=150)
    phone = models.CharField(max_length=50)
    person_id = models.ForeignKey(Person, on_delete=models.CASCADE)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)