import smtplib
import ssl
import os
import datetime
from email.message import EmailMessage
from dotenv import load_dotenv
from celery import shared_task
from celery.schedules import crontab
from portcullisbutfrthistime.celery import app



#Check Date, import email from views.py and move to this one
current_time = datetime.datetime.now()
review_date = 0
month = current_time.month
day = current_time.day
hour = current_time.hour
minute = current_time.minute
List = ["Quarter1", "banana", "cherry"]

subscriber_email_addresses = [
    "liong1250230@gmail.com"
]

def add_to_subscriber_email_addresses(email):
    """Add the email to the newsletter list."""
    if email not in subscriber_email_addresses:
        subscriber_email_addresses.append(email)
        print(f"Added to list: {email}")  # Log the addition for debugging purposes
    else:
        print(f"Email already in list: {email}")

# .env file is not loaded for now because it doesn't work on django whoopie
load_dotenv()
gmail_address = os.getenv("GMAIL_ADDRESS")
gmail_password = os.getenv("GMAIL_PASSWORD")

#EMAIL


#Scheduling..
@shared_task
def sendtheletter():
    email = EmailMessage()
    email["Subject"] = "Reminder: Check the Portcullis Database"
    email["From"] = gmail_address
    email.add_alternative(f"""\
        <html>
            <head>
                This is a reminder to check the Portcullis Database!
            </head>
            <body>
                The link is as follows: http://127.0.0.1:8000/
                (This assumes the server is permanently running)
            </body>
        </html>
    """, subtype='html')
    with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=ssl.create_default_context()) as smtp_server:
        smtp_server.login(gmail_address, gmail_password)
        
        for subscriber_email_address in subscriber_email_addresses:
            # Set the recipient for the email
            email["To"] = subscriber_email_address

            smtp_server.send_message(email)


@app.on_after_configure.connect
def setup_periodic_tasks(sender, **kwargs):
    # Calls sendtheletter() every minute
    sender.add_periodic_task(
        crontab(minute='*'),
        sendtheletter.s(),
        name='send email every minute'
    )