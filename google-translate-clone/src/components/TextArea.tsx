import { Form } from 'react-bootstrap';
import {SectionType } from '../types.d';
import React from 'react';

interface Props {
    type: SectionType
    loading?: boolean
    onChange: (value: string)=>void
    value: string
}

const commonStyle = {border:0, height:"200px"}

const getPlaceholder = ({type, loading}:{loading?:boolean, type:SectionType})=>{
    if(type===SectionType.From) return "Introducir texto"
    if(loading===true) return "Cargando..."
    return "Traducción"
}

export const TextArea = ({type, loading, value, onChange}: Props)=>{

    const styles = type === SectionType.From? commonStyle : {...commonStyle, backgroundColor: "#f5f5f5"}

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>)=>{
        onChange(event.target.value)
    }

    return (
        <Form.Control
            autoFocus = {type === SectionType.From}
            as="textarea"
            disabled = {type===SectionType.To}
            placeholder = {getPlaceholder({type, loading})}
            style={styles}
            value = {value}
            onChange={handleChange}
        />
    )
}