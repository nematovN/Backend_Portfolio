from django.contrib import admin
from .models import Profile, Experience, Skill, Project, Service, Testimonial, Contact

@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ('name', 'profession', 'email', 'phone')


@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    list_display = ('title', 'years')


@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'percentage')
    list_filter = ('category',)


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'date_created')
    list_filter = ('category',)
    search_fields = ('title', 'description')


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ('title',)


@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ('name', 'position', 'company')


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'subject', 'date_sent')
    readonly_fields = ('date_sent',)
    search_fields = ('name', 'email', 'subject', 'message')

