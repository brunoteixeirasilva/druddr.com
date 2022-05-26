# Druddr Website

## Changelog

### 24/03/2022 - React Session #1

#### Changes applied

-   [DONE] HeaderContainer.js: Conversion from class to Function component.
-   [DONE] Contact.js: Conversion from class to Function component.
-   [DONE] Minor bugfixes on the existing components, after conversion.
-   [DONE] Problem with Slide component not behaving properly (isolated).
-   Closed release version 1.0.3

### 29/03/2022 - React Session #2

#### Changes applied

-   [DONE][0.2h] Addressing a bug found during testing (id by Lorenzo)
-   [DONE][1.0h] New Components being created
    -   Creating a help component
        -   Should be a button that opens a modal
        -   Necessary components: - [1] Button for help - Should be a floating button in the screen - Needs language support (i18n) => label/help - onClick attribute => state management - Open/Close modal - Help icon - @material-ui/icons - https://v4.mui.com/ - https://v4.mui.com/components/material-icons/#material-icons - import { Help } from "@material-ui/icons" - [2] Modal - Closing Button - Close modal - Title of modal - Required, should be not more than 30 length - Content of modal - JSX.Element - [FUTURE] Toolbar (baseline)
-   [DONE][0.4h] Hooks
    -   Using hooks
    -   Creating a custom hook
    -   Importing and consuming a custom hook
-   Closed release version 1.0.4

### 31/03/2022 - React Session #3 [DONE]

#### Changes applied

-   [0.2h] Creation of language file for en_uk
-   [0.8h] Testing
    -   Lorenzo Grignola on top of it
    -   Created data-cy attribute
    -   Made a Map for data-cy attributes
    -   Used the map constants in each component and test file.

### 07/04/2022 - React Session #4 [DONE]

#### Changes applied

-   [DONE][0.1h] ReduxJS
    -   [DONE][0.1h] To be installed and used with redux-toolkit
-   [DONE][0.9h] I18n Package language selection component
    -   [DONE][0.6h] Dropdown in system header
    -   [DONE][0.3h] State management for changing language
        -   Local State
-   Packaging version 1.0.7

### 14/04/2022 - React Session #5 [DONE]

#### Changes applied

-   [DONE][0.4h] ReduxJs to be implemented for global state management
    -   Hook in the App.js
    -   Instantiation of the state provider
-   [DONE][0.7h] Refactor the Language Dropdown component to use Redux/Selector pattern
    -   Action
    -   Dispatcher
    -   Reducer
    -   Selector

### 27/4/2022 - React Session #6 [DONE]

### Changes applied

-   [DONE][0.5h] Adding Http service abstraction layer class
    -   ServiceBase
-   [DONE][0.3h] Create an API reference for allocation of APIs of the system
-   [DONE][0.1h] Create a service for Pet requests
-   [DONE][0.4h] Support for Api Data state layer manipulation
-   [DONE][0.2h] Created actions and reducers for Api Data controlling
-   [DONE][0.1h] Refactoring Routing table of system
-   [DONE][0.1h] Add support for forced language reloading
-   [DONE][0.1h] Added Api Data reducer to application Store
-   [DONE][0.3h] Refactored system imports which were having errors
-   [DONE][0.5h] Implemented fully functioning dropdown

### 3/5/2022 - E2E Testing Studies [DONE]

### Changes Done

-   [DONE] Created set of e2e tests for new API page.

### 3/5/2022 - React Session #7 [DONE]

### Changes applied

-   [DONE] Pipe function for request response parsing
    -   [DONE][0.2h] In case of success, returns only what's in data
    -   [DONE][0.5h] In case of error scenario => has to treat

### 24/05/2022 - React Session #8 [WIP]

### Changes Planned

-   [WIP] Create and introduce Message modal component
    -   [WIP] Create the error message display box (to start with js alert() function)
-   [WIP] Message modal State management using Redux
    -   [WIP] Should store the state of the last error => reducer slice
-   [WIP] Message modal opener function with message and type
    -   [WIP] Should depict errors and display an show error message => action dispatch

### DD/MM/2022 - React Session #9 [TODO]

### Changes Planned

-   [TODO] Create a new dropdown for displaying the `apiData.data` list state portion
-   [TODO] Add observation of forced language reloading => remount App component from useEffect
-   [TODO] Adding class for lazy loading services (LazyInjectableService)
-   [TODO] Adding class for injectable services (InjectableService)
