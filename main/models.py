from django.db import models
from ckeditor.fields import RichTextField


class Profile(models.Model):
    name = models.CharField(max_length=100)
    age = models.PositiveIntegerField()
    profession = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    address = models.CharField(max_length=200)
    bio = RichTextField()
    avatar = models.ImageField(upload_to='avatars/')
    cv = models.FileField(upload_to='cv/', blank=True, null=True)

    # Social links
    github = models.URLField(blank=True, null=True)
    linkedin = models.URLField(blank=True, null=True)
    twitter = models.URLField(blank=True, null=True)
    instagram = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Profile"
        verbose_name_plural = "Profile"


class Experience(models.Model):
    title = models.CharField(max_length=100)
    years = models.CharField(max_length=50)  # e.g., "5+ years"
    description = RichTextField()

    def __str__(self):
        return self.title


class Skill(models.Model):
    CATEGORY_CHOICES = (
        ('frontend', 'Frontend'),
        ('backend', 'Backend'),
        ('design', 'Design'),
        ('other', 'Other'),
    )

    name = models.CharField(max_length=100)
    icon_class = models.CharField(max_length=50, help_text="Font Awesome class name (e.g., 'fa-html5')")
    percentage = models.PositiveIntegerField(help_text="Skill level (0-100)")
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES, default='other')

    def __str__(self):
        return self.name


class Project(models.Model):
    CATEGORY_CHOICES = (
        ('web', 'Web'),
        ('mobile', 'Mobile'),
        ('design', 'Design'),
        ('other', 'Other'),
    )

    title = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='projects/')
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    url = models.URLField(blank=True, null=True)
    date_created = models.DateField()

    def __str__(self):
        return self.title


class Service(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    icon_class = models.CharField(max_length=50, help_text="Font Awesome class name")

    def __str__(self):
        return self.title


class Testimonial(models.Model):
    name = models.CharField(max_length=100)
    position = models.CharField(max_length=100)
    company = models.CharField(max_length=100)
    testimonial = models.TextField()
    avatar = models.ImageField(upload_to='testimonials/')

    def __str__(self):
        return self.name


class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    subject = models.CharField(max_length=200)
    message = models.TextField()
    date_sent = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.subject}"

