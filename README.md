# Fitness Application

This is a React-based fitness application that allows users to search for exercises based on their name, equipment, or target muscle. The application fetches data from the Youtube Search and Download API and the ExerciseDB API from Rapid API. The app allows users to see gifs illustrating how the exercise should be done and watch similar Youtube videos showing how the exercise should be done. Additionally, the app recommends other exercises targeting the same muscle for users to try out.

## Installation
To run this app locally, please follow these steps:

1. Clone this repository: git clone git@github.com:Maina-Francis/fitness_application.git
2. Change into the project directory: cd react-fitness-app
3. Install dependencies: npm install
4. Create a .env file in the root directory and add the following variables:

```
REACT_APP_RAPID_API_KEY=<your Rapid API key >
```
5. Start the app: npm start
6. Open your browser and navigate to http://localhost:3000

## Usage
Once you have the app running, you can search for exercises by name, equipment, or target muscle. To search, simply enter a query in the search bar and click the search button. The app will then display a list of exercises that match your query.

Each exercise item in the list displays the exercise name, equipment needed (if any), target muscle, and a gif illustrating how the exercise should be done. You can click on the gif to see a larger version of it.

Additionally, each exercise item has a "View on Youtube" button that takes you to a page where you can watch similar Youtube videos showing how the exercise should be done.

At the bottom of the search results page, the app recommends other exercises targeting the same muscle as the ones in your search results.

## Future Development
Some features that could be added in future versions of this app include:

1. User authentication and the ability to save favorite exercises
2. A workout planner that allows users to plan and schedule workouts
3. Integration with fitness trackers or wearables to track progress
4. Improved search functionality, including the ability to filter search results by difficulty level, exercise type, or duration

## Contributing
If you would like to contribute to this project, please follow these steps:

1. Fork this repository
2. Create a branch for your feature or bug fix: git checkout -b feature-or-bugfix
3. Make your changes and commit them: git commit -m "your commit message"
4. Push your changes to your fork: git push origin feature-or-bugfix
5. Open a pull request on this repository
6. Please ensure that your pull request follows the code style and guidelines of this project.
