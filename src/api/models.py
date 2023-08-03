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
    user = relationship("User")

    def __init__(self, name, dog, user):
        self.name = name
        self.dog = dog
        self.user = user

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
            "detail": self.detail
        }
    
