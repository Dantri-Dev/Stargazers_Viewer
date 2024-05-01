# StargazersScreen

## Description
`StargazersScreen` is the component that displays the list of stargazers of a repository. This component receives the stargazers data as a navigation parameter and passes it to the `StargazersList` component for display.

## Props
- `route`: An object that contains the navigation parameters. In this case, it contains the stargazers data.

## Usage
This component is used as the stargazers viewing screen. It displays an application bar with a back button and the number of stargazers, and a list of stargazers.

---

# AppBarComponent

## Description
`AppBarComponent` is a component that displays the application bar at the top of the screen. It shows a back button and the number of stargazers.

## Props
- `navigation`: An object that allows navigating between screens.
- `numberOfStargazers`: A number that represents the number of stargazers.

## Usage
This component is used in `StargazersScreen` to display the application bar with a back button and the number of stargazers.

---

# StargazersList

## Description
`StargazersList` is a component that displays a list of stargazers.

## Props
- `data`: An array of objects that represent the stargazers. Each object contains the details of a stargazer, such as the username and the avatar URL.

## Usage
This component is used in `StargazersScreen` to display the list of stargazers of a repository.
