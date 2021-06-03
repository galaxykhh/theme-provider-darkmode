import React from "react";
import styled from "styled-components";
import { IToggler } from "../interfaces";

const ThemeToggler: React.FC<IToggler> = ({ toggler, theme }) => {
    return (
        <ToggleButton onClick={toggler} >
            {theme === 'light' ? '🌜 Dark' : '🌞 Light'}
        </ToggleButton>
    );
};

const ToggleButton = styled.button`
    all: unset;
    position: fixed;
    bottom: 20px;
    right: 20px;
    min-width: 55px;
    background: ${({ theme }) => theme.bgColor};
    border: 2px solid ${({ theme }) => theme.toggleBorder};
    border-radius: 20px;
    color: ${({ theme }) => theme.toggleBorder};
    cursor: pointer;
    font-size: 15px;
    padding: 10px;
`;

export default ThemeToggler;