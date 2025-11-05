from django.db import models


class UserMessage(models.Model):
    name = models.CharField(max_length=120)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} — {self.created_at}"


class Comment(models.Model):
    name = models.CharField(max_length=120)  # 100 o'rniga 120 qildim
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} — {self.created_at}"