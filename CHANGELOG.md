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

### 12/04/2022 - React Session #5 [TBD]

#### Changes planned

-   [TBD] ReduxJs to be implemented for global state management
    -   Hook in the App.js
    -   Instantiation of the state provider
-   [TBD] Refactor the Language Dropdown component to use Redux/Selector pattern
    -   Action
    -   Dispatcher
    -   Reducer
    -   Selector
