## Features

- **Add Countries**: Users can enter the name of a country they have visited. The app checks if the country exists in the database before adding it.

- **Interactive Map**: An SVG map displays the countries added by the user, highlighted in teal for easy visualization.

- **Error Handling**: The app provides user feedback for common errors:
  - If a user tries to add a country that does not exist, an error message is displayed.
  - If the user attempts to add a country that has already been added, a different error message is shown.

- **Dynamic Country List**: The app retrieves a list of previously visited countries from the database and displays the total count of these countries on the main page.

- **Responsive Design**: The layout adapts to different screen sizes, ensuring usability across various devices.

- **User-Friendly Interface**: Simple input field and button for adding countries, making the app accessible to users of all technical levels.

- **Database Integration**: Uses PostgreSQL to store and retrieve country data, ensuring persistence of user inputs.

- **Server-Side Rendering**: Utilizes EJS for rendering dynamic content based on user interactions and database queries.

- **Clean Code Structure**: Organized code for easy maintenance and future enhancements.

