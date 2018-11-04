
# Kalimotxo - Bartender Rating App

# Upstack Hackathon 2018 Team 7 October 27, 2018

Introduction
============

Purpose
-------

The purpose of this document is to build an online system for bartender
rating app. This app aims make the relationship between customers and
bartenders more personal. The name of the app will be
[Kalimotxo](#https://www.supercall.com/recipe/kalimotxo-drink-recipe)
and is pronounced in spanish
[Calimocho](#https://forvo.com/word/kalimotxo/).

Intended Audience
-----------------

This document is intended for business owners, investors, developers,
and designers so they can have a better understanding as to the goal of
the application and its features. The people and teams involved in the
creation, design, and implementation of the application have a wide
scope of knowledge of the market needs, functional requirements, and
underlying technology to create a modern web app. The sections in this
document are not technical and are intended to provide an overview, in
common terms, of what the application is and the features it will
implement.

Project Scope
-------------

The application is designed to enhance the relationship between
customers and servers by providing a platform for feedback based on
individual service. Users who use and engage with others in the
application will benefit from social feedback and receive rewards for
their participation and positive performance. The goal of the
application is to allow people - local residents, business travelers,
and fun-seekers - to find top service in their area. The information
gathered by user input will provide valuable insight into customer
sentiment on an individual level which allows for better performance and
increased revenue for business owners, and, in turn, higher engagement
within the application.

Overall Description
===================

Operating Environment
---------------------

The application will be available in all major browsers.

Design and Implementation Constraints
-------------------------------------

### Technology Stack

Backend:

-   Node.js

-   Express.js

-   Firebase

Frontend:

-   Angular 2+

-   Angular Material

### Application Flow

![image](uml/process-flow-diagram){width="\textwidth"}

System Features
===============

The system must provide,at a minimum, the following functions in
accordance with the other requirements described within this SRS
document.

Register System
---------------

The system should have a register system for the user.

Authorization and Authentication System
---------------------------------------

The system should have a login system for the user and based on their
roles they will access different views in the app.

-   As a customer i will have the capability to leave comments and
    readings.

-   As a bartender i will have access to my profile.

-   As a business unit i will have access to my dashboard.

QR Code Generator
-----------------

As a bartender after you are registered in the app you will receive a
unique qrcode. The bartender can print the qrcode or present from the
phone the qrcode to the customer.

QR Code Scanner
---------------

As a user i need to be able to scan the qrcode provided by the
bartender.

User Profile
------------

-   As a user, i need a profile view where I'm able to change my profile
    picture add a description.

-   As a bartender i need a view of all my reviews received form
    customers.

-   As a business unit i need a profile view where I'm able to change my
    addresses

Customer rating
---------------

As a user after I scanned the qr code from the bartender:

-   I need a view with the bartender profile and rating.

-   I need the capability to add a comment and rating for a bartender

Hall of Fame
------------

As a non login in user i have access to the bartenders Hall of Fame.

Heat Map
--------

As a login in customer i have access to a heat map where i can see the
most crowded near me.

Business Unit Premium Dashboard
-------------------------------

As a business owner i have a dashboard to see premium features such as
employee performance, frequent customers, and available rewards

Functional Requirements
-----------------------

The application should be mobile friendly.

System Data
-----------

1.  Customers

    -   User ID

    -   First name

    -   Last name

    -   Email

    -   Score

    -   Location

2.  Servers

    -   User ID

    -   First name

    -   Last name

    -   Email

    -   Overall Rating

    -   Service Code

    -   Location

3.  Ratings

    -   Server ID

    -   Restaurant ID

    -   Comment

    -   Rating

4.  Restaurants

    -   Name

    -   Owner

    -   Restaurant ID

    -   Rewards


