/** 
 * @description New Request
 * @author IgnacioTosi
 * @version 1.1
 */

// DEFAULT
import React from 'react';
import PropTypes from 'prop-types';
import { useState } from "react"

// CSS
import './NewRequest.css';

// FLUENT UI 
import { initializeIcons, SearchBox, TextField, DefaultButton, PrimaryButton, CommandBarButton, Stack, Icon } from '@fluentui/react';

// this image should be loaded from the database, from the user comfig itself
import UserImage from '../../../../assets/imgs/login-img.png';


// NewRequest Screen Component
const NewRequestScene = ({ userName }) => {

    // should be in the root of the app
    // load all the icons from fluent in order to render on the components
    initializeIcons();

    // logic for the form itself
    const [companyName, setcompanyName] = useState('')
    const [focusArea, setfocusArea] = useState('')
    const [boardRole, setboardRole] = useState('')

    const onSubmit = (e) => {

        // prevent submit
        e.preventDefault();
        
        // validations of all kind, css, passwords, caracthers, lengt etc
        if ( !companyName || !focusArea || !boardRole ) {
            alert('Fill the blanks ');
            return;
        }

        // onAdd ({ companyName, focusArea, boardRole });

        // clean
        companyName('');
        focusArea('');
        boardRole(''); 
    }
    // ---

    // render
    return (
        <div id="newRequestScene">

            <div className="headerContainer">
                <img src={UserImage} alt="randomImage" />
                <h1>{userName}</h1>
                <SearchBox 
                    placeholder="Search" 
                    styles={CustomSearchBar}
                />   
            </div>

            <form className="formContainer" onSubmit={onSubmit}>
                <h3>Create Request</h3>
                <TextField 
                    label="Company Name"
                    placeholder="Current Company Name"
                    value={companyName}
                    onChange={(e) => setcompanyName(e.target.value)}
                    required
                />
                <TextField 
                    label="Focus Area"
                    placeholder="Current Focus Area"
                    value={focusArea}
                    onChange={(e) => setfocusArea(e.target.value)}
                    required
                />
                <TextField 
                    label="Board Role"
                    placeholder="Current Board Role"
                    value={boardRole}
                    onChange={(e) => setboardRole(e.target.value)}
                    required
                />
                <div className="formButtons">
                    <DefaultButton 
                        type="button" 
                        text="Save Draft"
                        styles={CustonDefaultButton}
                    />
                    <PrimaryButton 
                        type="submit" 
                        text="Create"
                        styles={CustomPrimaryButton} 
                    />
                    <CommandBarButton 
                        type="button" 
                        text="Delete"
                        styles={CustomCommandBarButton} 
                    />
                </div>
            </form>
        
            <div className="menuContainer">
                <Stack horizontal horizontalAlign="space-around">
                    <span>
                        <Icon iconName="OEM" styles={customIcons}/>
                        <h6>Manager</h6>
                    </span>
                    <span>
                        <Icon iconName="Ringer" styles={customIcons}/>
                        <h6>Alert</h6>
                    </span>
                    <span>
                        <Icon iconName="CirclePlus" styles={customIcons}/>
                        <h6>Create Request</h6>
                    </span>
                </Stack>
            </div>

        </div>
    )
}

// ---
NewRequestScene.defaultProps = {
    userName: 'Request',
}
NewRequestScene.propTypes = {
    userName: PropTypes.string.isRequired,
};

// --------------------------------------
// STYLES OF THE FLUENT UI COMPONENTS ---
// couldnt export to an external file D:

// couldnt change the color of the font to white, in order to match FIGMA
// also couldnt model the :hover, or the :active, even the :focus...
const CustomSearchBar = {
    root: {
        borderRadius: '10px',
        backgroundColor: '#3889D1',
        border: 'none'
    }
}

// couldn change the styles, it aplies on the label, not the input..
const CustomTextField = {
    root: {
        backgroundColor: 'red'
    }
}

// dont know hot to model the hover effect on this button
const CustonDefaultButton = {
    root: {
        padding: '20px',
        display: 'block',
        width: '100%',
        borderRadius: '10px',
        border: '1px solid #3889D1',
        color: '#3889D1'
    }
}

// same here, dont know how to model hover
const CustomPrimaryButton = {
    root: {
        padding: '20px',
        marginTop: '15px',
        display: 'block',
        width: '100%',
        borderRadius: '10px',
        border: 'none',
        backgroundColor: '#3889D1',
        color: 'white'
    }
}

// same here, dont know how to model hover
const CustomCommandBarButton = {
    root: {
        padding: '10px',
        marginTop: '15px',
        display: 'block',
        width: '100%',
        border: 'none',
        backgroundColor: 'white',
        color: '#3889D1'
    }
}

// dont know how to model hover, active, focus
const customIcons = {
    root: {
        fontSize:'30px',
        color: '#3889D1',
        cursor: 'pointer'
    }
}


export default NewRequestScene
