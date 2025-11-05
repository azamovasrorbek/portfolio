from django.contrib import admin
from .models import UserMessage, Comment

@admin.register(UserMessage)
class UserMessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'created_at')
    list_filter = ('created_at',)
    search_fields = ('name', 'message')
    readonly_fields = ('created_at',)
    date_hierarchy = 'created_at'

@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ('name', 'created_at')
    list_filter = ('created_at',)
    search_fields = ('name', 'message')
    readonly_fields = ('created_at',)
    date_hierarchy = 'created_at'