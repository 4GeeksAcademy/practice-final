from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship


db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120))
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(250), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, default=False)
    appointments = db.relationship('Appointment', backref='user', lazy=True)
    favorites = db.relationship('Favorite', backref='user_favorites', lazy=True)

    def __init__(self, name, email, password):
        self.name = name
        self.email = email
        self.password = password

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "name": self.name,
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class Favorite(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, ForeignKey('user.id'), nullable=False)
    dog_id = db.Column(db.Integer, ForeignKey('dog.id'), nullable=True)
    dog = relationship("Dog")
    user = relationship("User",overlaps="favorites,user_favorites")

    def __init__(self, dog_id, user_id):
        self.dog_id = dog_id
        self.user_id = user_id

    def __repr__(self):
        return '<Favorite %r>' % self.id
    
    def serialize(self):
        return {
            "id": self.id,
            "dog" : self.dog.serialize(),
            "user": self.user.serialize(),
        }
    
class Dog(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(250), nullable=False)
    gender = db.Column(db.String(250), nullable=False)
    age = db.Column(db.String(250), nullable=False)
    breed = db.Column(db.String(250), nullable=False)
    image = db.Column(db.String(250), nullable=False)
    info = db.Column(db.String(250), nullable=False)
    detail = db.Column(db.String(250), nullable=False)
    appointments = db.relationship('Appointment', backref='dog', lazy=True)
    
    def __init__(self, name, gender, age, breed, image, info, detail):
        self.name = name
        self.gender = gender
        self.age = age
        self.breed = breed
        self.image = image
        self.info = info
        self.detail = detail

    def __repr__(self):
        return '<Dog %r>' % self.id
    
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "gender": self.gender,
            "age" : self.age,
            "breed" : self.breed,
            "info": self.info,
            "detail": self.detail,
            "image": self.image
        }
    
class Appointment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    dog_id = db.Column(db.Integer, db.ForeignKey("dog.id"), nullable=False)
    time = db.Column(db.DateTime, unique=False, nullable=False)
    user_comment = db.Column(db.String(250), unique=False, nullable=True)
    report = db.relationship('Report', backref='appointment', lazy=True, uselist=False)
    
    def __init__(self, user_id, dog_id, time, user_comment):
        self.user_id = user_id
        self.dog_id = dog_id
        self.time= time
        self.user_comment= user_comment

    def __repr__(self):
        return f'<Appointment {self.user_id}>'

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "dog_id": self.dog_id,
            "time": self.time,
            "user_comment": self.user_comment,
            # do not serialize the password, its a security breach
        }
    
class Report(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    appointment_id = db.Column(db.Integer, db.ForeignKey("appointment.id"), nullable=False)
    time = db.Column(db.DateTime, unique=False, nullable=False)
    user_comment = db.Column(db.String(250), unique=False, nullable=False)
    picture = db.Column(db.String(250), unique=False, nullable=True)
    appointments = db.relationship("Appointment", overlaps="appointment,report")
    

    def __init__(self, appointment_id, date, appointments, user_comment):
        self.appointment_id = appointment_id
        self.date = date
        self.appointments = appointments
        self.user_comment= user_comment

    def __repr__(self):
        return f'<Report {self.appointment_id}>'

    def serialize(self):
        return {
            "id": self.id,
            "appointment_id": self.appointment_id,
            "user_comment": self.user_comment,
            "picture": self.picture,
            "appointments": self.appointments.serialize(),
            # do not serialize the password, its a security breach
        }
    
