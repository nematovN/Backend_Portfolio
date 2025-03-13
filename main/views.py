from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Profile, Experience, Skill, Project, Service, Testimonial
from .forms import ContactForm


def home(request):
    # Get all data from models
    profile = Profile.objects.first()  # Assuming there's only one profile
    experiences = Experience.objects.all()
    skills = Skill.objects.all()
    projects = Project.objects.all()
    services = Service.objects.all()
    testimonials = Testimonial.objects.all()

    # Handle contact form
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Your message has been sent successfully!')
            return redirect('home')
    else:
        form = ContactForm()

    # Prepare context for template
    context = {
        'profile': profile,
        'experiences': experiences,
        'skills': skills,
        'projects': projects,
        'services': services,
        'testimonials': testimonials,
        'form': form,
    }

    return render(request, 'index.html', context)

