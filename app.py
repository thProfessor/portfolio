from flask import Flask, render_template, request
from flask_mail import Mail

app = Flask(__name__)
app.config.update(
    MAIL_SERVER='smtp.gmail.com',
    MAIL_PORT='465',
    MAIL_USE_SSL=True,
    MAIL_USERNAME='utkrs.sukla99@gmail.com',
    MAIL_PASSWORD='9454411971'
)
mail = Mail(app)


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/about')
def about():
    return render_template('about.html')


@app.route('/projects')
def projects():
    return render_template('projects.html')


@app.route("/contact", methods=['GET', 'POST'])
def contact():
    if(request.method == 'POST'):
        name = request.form.get('Name')
        email = request.form.get('Gmail')
        message = request.form.get('Comments')
        mail.send_message('New message from portfolio ', sender=email,
                          recipients=["utkrs.sukla99@gmail.com"],
                          body=message + "/n" + name)
    return render_template("contact.html")



