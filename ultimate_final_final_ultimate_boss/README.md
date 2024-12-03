# Restaurant Menu Project

Welcome to the **Restaurant Menu Project**! This project implements a dynamic restaurant menu management system that allows users to view, add, update, and delete menu items. Built with Python and Django, it leverages MySQL for database management and INSERT templates for rendering the user interface.

## Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [API Endpoints](#api-endpoints)

---

## Features

- **CRUD Operations**: Create, Read, Update, and Delete menu items.
- **Dynamic Categories**: Organize menu items into customizable categories.
- **Responsive UI**: User-friendly interface for managing menu items.
- **Database Integration**: INSERT

---

## Technologies Used

- **Programming Language**: Python
- **Framework**: Django
- **Database**: MySQL
- **Templates**: INSERT
- **Frontend**: HTML5, CSS, JavaScript (FIX)

---

## Installation

Follow these steps to set up the project locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/jmlarios/ultimate_final_final_ultimate_boss.git
   cd ultimate_final_final_ultimate_boss/restaurant_menu_project
   
2. **Install Dependencies**:
   ```bash
   pip install -r requirements.txt
   
3. **Initialize the Database**:
   ```bash
   python setup_database.py

---

## Usage

### Navigating the Application (FIX)
1. **Homepage**: View all menu categories and their respective items.
2. **Add Item**: Create new menu items.
3. **Edit Item**: Update existing menu items.
4. **Delete Item**: Remove menu items from the database.

---

## File Structure

Below is a detailed breakdown of the main files and directories in the project:

- **`media`**:  
  Stores all uploaded menu PDF files. This directory serves as a centralized location for menu documents that are processed by the application.

- **`menu_app`**:  
  This is the core of the application and contains several subcomponents, such as:
  - **`__pycache__`**:  
    Auto-generated Python bytecode files that improve performance by avoiding the need to recompile Python source files.
  - **`migrations`**:  
    Tracks database schema changes using Django's migration system, ensuring seamless upgrades and rollbacks of the database structure.
  - **`templates`**:  
    Contains the HTML templates used to render the web interface of the menu application, leveraging Django's template system.
  - **`admin.py`**:  
    Includes customizations for the Django Admin interface, such as registering models to make them manageable through the Admin panel.
  - **PDF to Text Extractor**:  
    A utility within the app that extracts raw text from menu PDFs. This is used to preprocess menu data for further analysis and categorization.
  - **AI Reader**:  
    A machine learning tool that processes the extracted text and sorts it into structured tables. The output is stored as JSON files for seamless integration with the database and front-end components.

- **`django_menu_processing_log`**:  
  This module handles the processing logic for incoming menu data. It logs each step of the process, from uploading and text extraction to AI-driven categorization, ensuring traceability and debugging support.

- **`manage.py`**:  
  The command-line utility for managing the Django application. This file is used to:
  - Run the local development server (`python manage.py runserver`).
  - Apply database migrations (`python manage.py migrate`).
  - Create app-specific migrations (`python manage.py makemigrations`).
  - Create a superuser account for accessing the Django Admin panel (`python manage.py createsuperuser`).


---

## API Endpoints

The application provides API endpoints for programe access:

| Method | Endpoint                | Description                |
|--------|-------------------------|----------------------------|
| GET    | `/`                     | View all categories/items  |
| GET    | `/item/<int:item_id>`   | View a single menu item    |
| POST   | `/item`                 | Add a new menu item        |
| PUT    | `/item/<int:item_id>`   | Edit a menu item           |
| DELETE | `/item/<int:item_id>`   | Delete a menu item         |

   

