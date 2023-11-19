# myapp/models.py
from django.db import models

class Country(models.Model):
    name = models.CharField(max_length=255)

class Subject(models.Model):
    name = models.CharField(max_length=255)

class Object(models.Model):
    name = models.CharField(max_length=255)
