import smtplib
import ssl
import os

#Use py -m pip python-dotenv to install dotenv if you don't already have it
from email.message import EmailMessage
from dotenv import load_dotenv

# Step 4: Load secrets from .env
load_dotenv()
gmail_address = os.getenv("GMAIL_ADDRESS")
gmail_password = os.getenv("GMAIL_PASSWORD")

# Step 5: Create the email
email = EmailMessage()

# Subject line of the email
email["Subject"] = "My favourite games is among us"
# Sender of the email
email["From"] = gmail_address

# Add HTML content to the email
email.add_alternative(f"""\
                    <html>
                    <head>
                        AMONG US ON TOP
                    </head>
                    <body>
                        <p>Brought to you by <b>Manezki</b></p>
                    </body>
                    </html>
                    """, subtype='html')


#Send the email to the newsletter subscribers
subscriber_email_addresses = [
    "liong1250230@gmail.com"
]

with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=ssl.create_default_context()) as smtp_server:
    smtp_server.login(gmail_address, gmail_password)
    
    for subsciber_email_address in subscriber_email_addresses:
        # Set the recipient for the email
        email["To"] = subsciber_email_address

        smtp_server.send_message(email)