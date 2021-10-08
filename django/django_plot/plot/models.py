from django.db import models

# class SuperModel(models.Model):
#     name = models.CharField()

# class BinaryProperties(models.Model):
#     name = models.ForeignKey(SuperModel, on_delete=models.CASCADE)

#     id = models.PositiveIntegerField()
#     m1zams = models.FloatField()
#     m2zams = models.FloatField()
#     separationzams = models.FloatField()
#     weight = models.FloatField()

class CustomFile(models.Model):
    name = models.FilePathField(path="media/")

    def __str__(self):
        return self.name
