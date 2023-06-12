# CSV-to-Table-Converter
> It's a web application that allows users to upload CSV (comma-separated values) files and convert them into tables. It provides various operations such as searching, sorting, and displaying columns as charts for better data understanding. 



## Tech-Stack
* Frontend: HTML, CSS, JavaScript, jQuery
* Backend: Node.js, Express.js
* Database: MongoDB
* Libraries and Packages: Multer, csv-parse, canvasJS

## Features
* Upload any CSV file into the system.
* Validate and accept only CSV files.
* Display a list of all uploaded CSV files.
* View the data from a selected file in a table format with column headers.
* Search functionality to filter the displayed table based on user input.
* Sort columns in ascending or descending order.
* Pagination to display a maximum of 100 records per page.
* Integration with canvasJS library to visualize selected columns as charts.

## Usage Guide
1. Install Node.js and MongoDB on your system.
2. Open the terminal and navigate to the project directory:
    ```
    cd Folder_name
    npm install
    npm start
    ```
 3. The server will start running. Access the application interface at http://localhost:8000.
 4. Check the 'Samples' folder for CSV files of different sizes to test the application.

## Folder Structure
* app.js - Entry point of the application, defines the Express server.
* assets - Static files such as CSS, JavaScript, and icons.
* config - Configuration files for Mongoose (schema and model), Multer (file uploading), and flash(notifications).
* controllers - Contains various functions executed when called through routes.
* models - Schema definitions for MongoDB models.
* routes - Contains all the routes for the API.
* uploads - Directory to store uploaded files.
* views - Layouts, partials, and templates to be displayed to the user.
* Samples - Contains CSV files of different sizes for testing purposes.




