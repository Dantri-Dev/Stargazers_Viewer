## Description
`HomeScreen` is the main component of the application. This component manages the application's state, makes the API call to fetch the stargazers data from GitHub, and navigates to the 'Stargazers' screen with the fetched data.

## State
- `visibleDialog`: A boolean that controls the visibility of the error dialog.
- `visibleprogress`: A boolean that controls the visibility of the loading dialog.
- `owner`: A string that represents the owner of the repository on GitHub.
- `repo`: A string that represents the name of the repository on GitHub.
- `errorMessage`: A string that contains the error message to be displayed in the error dialog.

## Methods
- `fetchStargazers`: This method makes a GET call to the GitHub API to fetch the list of stargazers for a specific repository. It also handles errors during the API call.



# AppBarComponent

## Description
`AppBarComponent` is a component that displays the application bar at the top of the screen.

## Usage
This component is used in `HomeScreen` to display the title of the application.

---

# CardComponent

## Description
`CardComponent` is a component that displays a card with text.

## Usage
This component is used in `HomeScreen` to provide instructions to the user on how to use the application.

---

# DialogComponent

## Description
`DialogComponent` is a component that displays a dialog with an error message.

## Props
- `visibleDialog`: A boolean that controls the visibility of the dialog.
- `errorMessage`: A string that contains the error message to be displayed.
- `setVisibleDialog`: A function that sets the visibility of the dialog.

## Usage
This component is used in `HomeScreen` to display an error message when an error occurs during the API call.

---

# FooterComponent

## Description
`FooterComponent` is a component that displays a button.

## Props
- `fetchStargazers`: A function that is called when the user presses the button.

## Usage
This component is used in `HomeScreen` to provide a button that the user can press to start the search for stargazers.

---

# LoadingDialog

## Description
`LoadingDialog` is a component that displays a loading dialog.

## Props
- `visibleprogress`: A boolean that controls the visibility of the loading dialog.

## Usage
This component is used in `HomeScreen` to display a loading indicator while the stargazers data is being retrieved from the GitHub API.

---

# TextInputGroup

## Description
`TextInputGroup` is a component that displays two input fields for the owner and the name of the repository.

## Props
- `owner`: A string that represents the owner of the repository.
- `setOwner`: A function that sets the owner of the repository.
- `repo`: A string that represents the name of the repository.
- `setRepo`: A function that sets the name of the repository.

## Usage
This component is used in `HomeScreen` to allow the user to enter the owner and the name of the repository they wish to view the stargazers of.

