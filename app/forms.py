from django import forms
from .models import UserMessage, Comment


class UserMessageForm(forms.ModelForm):
    class Meta:
        model = UserMessage
        fields = ['name', 'message']
        widgets = {
            'name': forms.TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'Your name',
                'required': True
            }),
            'message': forms.Textarea(attrs={
                'class': 'form-control',
                'placeholder': 'Your message',
                'rows': 4,
                'required': True
            }),
        }

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        # Qo'shimcha sozlashlar
        for field_name, field in self.fields.items():
            field.widget.attrs['class'] = field.widget.attrs.get('class', '') + ' form-input'


class CommentForm(forms.ModelForm):
    class Meta:
        model = Comment
        fields = ['name', 'message']
        widgets = {
            'name': forms.TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'Your name',
                'required': True
            }),
            'message': forms.Textarea(attrs={
                'class': 'form-control',
                'placeholder': 'Your message',
                'rows': 4,
                'required': True
            }),
        }

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        # Qo'shimcha sozlashlar
        for field_name, field in self.fields.items():
            field.widget.attrs['class'] = field.widget.attrs.get('class', '') + ' form-input'

    def clean_name(self):
        name = self.cleaned_data.get('name')
        if name and len(name.strip()) < 2:
            raise forms.ValidationError("Name must be at least 2 characters long.")
        return name.strip()

    def clean_message(self):
        message = self.cleaned_data.get('message')
        if message and len(message.strip()) < 10:
            raise forms.ValidationError("Message must be at least 10 characters long.")
        return message.strip()