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
-   [DONE][0.5h] Add observation of forced language reloading => remount App component from useEffect

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

### Changes Applied

-   [DONE] Create and introduce Message modal component
    -   [DONE] Create the error message display box (to start with js alert() function)
-   [DONE] Message modal State management using Redux
    -   [DONE] Should store the state of the last error => reducer slice
-   [DONE] Message modal opener function with message and type (service objects)
    -   [DONE] Should depict errors and display an show error message => action dispatch

### 26/05/2022 - React Session #9 [DONE]

### Changes Done

-   [DONE] Treat errors by faulty API calls (sample calling unexistant API)
    -   Should show an exception within MessageModal
-   [WIP] Create a ServiceBus (BackBone) for injecting all the services as dependencies of it
    -   Lazy services
    -   Singletons
-   [DONE] Added new strings to i18n
-   [DONE] Created ReduxService for abstraction.
-   [DONE] Extended "api.js" for new ApiService.
-   [DONE] Added ReduxService exports in base/index
-   [DONE] Changes to MessageModalService for better functionality.
-   [DONE] Created ApiService class.
-   [DONE] Changes to redux messageModal to allow reseting and closing without weird behavior.
-   [DONE] Changes to redux apiData to handle new changes.
-   [DONE] Creation of ErrorCodeMap for error dictionary.
-   [DONE] Changes to List.js to handle new API call function.

### 02/06/2022 - React Session #10 [DONE]

### Changes Applied

-   [DONE][1.2h] Create the class mappers
    -   [DONE][0.6h] Map the classes used for Pet - Data transformation
    -   [DONE][0.5h] Maps the response from the service into meaningful objects.
    -   [DONE][0.1h] Test the response transformation.

### 16/06/2022 - Architecture Session #1 Part 1 [DONE]

### Changes Applied

-   [DONE] Adding class for injectable services (InjectableService)
    -   [DONE] Create interface/abstract class for typing
    -   [DONE] From the interface, expected to have a minimal "shape"
-   [DONE] Adding class for lazy loading services (LazyInjectableService)
    -   [DONE] Create interface/abstract class for typing
    -   [DONE] Re-using existing functionalities
    -   [DONE] Add `get` method which returns the service instance on call

### DD/MM/2022 - Architecture Session #1 Part 2 [TODO]

### Changes Planned

-   [TODO] Proper develop our ServiceBus concept

### DD/MM/2022 - Architecture Session #2 [TODO]

### Changes Planned

-   [TODO] Create a table to display data from the dropdown
    -   [TODO] TODO Create a base type for the table's columns.
        -   A class which can be instantiated and formats the input for a rendering table.
    -   [TODO] Implement the reusable table
        -   Component which receives collection of columns (class type).
        -   Renders a Material UI table.
-   [TODO] Develop Wrapper component which declares the columns of each service type
    -   Start by "pet".
    -   Configures pet columns.
    -   Renders a Table component injecting the columns mapped.
-   [TODO] Create a new dropdown for displaying the `apiData.data` list state portion
-   [TODO] Create separate druddr models project for consuming on frontend
