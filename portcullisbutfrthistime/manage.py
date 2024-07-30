#!/usr/bin/env python
#NOTICE: You must have Django, Python, Javascript, CSS, the Python libraries [dotEnv, celery redis, django-celery-beat and ajax] installed in your virtual environment for this to work. 
#These MUST be on path. Ensure you are installing to the right python. Use Ctrl Shift P on vsc to check.
#Celery is a bit complicated, install both celery redis and django-celery-beat specifically
#To run celery (the timed newsletter), use 'celery -A portcullisbutfrthistime beat --loglevel=info', to run the website, run 'django manage.py runserver'
"""Django's command-line utility for administrative tasks."""
import os
import sys


def main():
    """Run administrative tasks."""
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'portcullisbutfrthistime.settings')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)


if __name__ == '__main__':
    main()

