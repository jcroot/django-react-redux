from django.db import models
from people.models import Person


class Student(models.Model):
    level = models.CharField(max_length=15)
    school_from = models.CharField(max_length=255)
    observation = models.TextField(null=True)
    is_virtual = models.BooleanField(default=False)
    grade = models.CharField(max_length=5)
    person_id = models.ForeignKey(Person, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
