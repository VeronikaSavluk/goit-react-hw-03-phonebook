import styled from 'styled-components';
import { Field, Form } from 'formik';

export const Wrapper = styled(Form)`
display: flex;
flex-direction: column;
margin: 0;
padding: 10px;
border: 2px solid #004D00;
border-radius: 15px;
`;

export const NameLable = styled.label`
display: flex;
flex-direction: column;
margin-bottom: 10px;
font-size: 16px;
`;

export const NameInput = styled(Field)`
margin-bottom: 10px;
padding: 4px;
font-size: 12px;
background: #FFF8DC;
border: none;
border-radius: 3px;
;`

export const SubitForm = styled.button`
margin-top: 10px;
margin-left: auto;
padding: 4px;
width: 110px;
font-weight: 500;
border: 1px solid #1E90FF;
border-radius: 15px;
background-color: #1E90FF;
color: #FFF8DC;
`;