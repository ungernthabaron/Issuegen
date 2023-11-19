# myapp/views.py
from django.shortcuts import render

def page1(request):
    content = {
        'text': "Текст о вашей программе.",
        'button_text': "Перейти ко второй странице",
        'button_link': "/page2/",
    }
    return render(request, 'page1.html', content)

def page2(request):
    content = {
        'text': "Текст второй страницы.",
        'button_text': "Перейти к третьей странице",
        'button_link': "/page3/",
    }
    return render(request, 'page2.html', content)

def page3(request):
    content = {
        'text': "Текст третьей страницы.",
        'button_text': "Вернуться на первую страницу",
        'button_link': "/page1/",
    }
    return render(request, 'page3.html', content)

def page4(request):
    content = {
        'text': "Текст третьей страницы.",
        'button_text': "Вернуться на первую страницу",
        'button_link': "/page1/",
    }
    return render(request, 'page4.html', content)

