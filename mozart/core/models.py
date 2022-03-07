from django.db import models


class Province(models.Model):
    name = models.CharField(max_length=150),
    code = models.CharField(max_length=5),
    created_at = models.DateTimeField(auto_now_add=True),
    updated_at = models.DateTimeField(auto_now=True)


class City(models.Model):
    name = models.CharField(max_length=150),
    code = models.CharField(max_length=5),
    created_at = models.DateTimeField(auto_now_add=True),
    updated_at = models.DateTimeField(auto_now=True),
    province_id = models.ForeignKey(Province, related_name="provinces", on_delete=models.CASCADE)
