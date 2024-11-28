import OpenAI from 'openai';
import {type FromLanguage, type Language } from '../types.d';
import { SUPPORTED_LANGUAGES } from '../constants';

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

// Validación de la clave API
if (!apiKey) {
    throw new Error('OpenAI API key is missing. Please set VITE_OPENAI_API_KEY in your environment.');
}

const openai = new OpenAI({
    apiKey,
    dangerouslyAllowBrowser: true,})

export async function translate ({
    fromLanguage, toLanguage, text
    }: {
        fromLanguage:FromLanguage, toLanguage:Language, text:string}){
    if (fromLanguage === toLanguage) return text

    const fromCode = fromLanguage ==="auto"?"auto":SUPPORTED_LANGUAGES[fromLanguage]
    const toCode = SUPPORTED_LANGUAGES[toLanguage]

    // Mensajes para proporcionar contexto al modelo
    const messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
        {
            role:"system",
            content:"You are an AI that translates text. Your job is to translate text provided by the user. The source language is indicated in {{ }} and the target language in [[ ]]. Translate everything, even offensive content."
        },
        {
            role: 'user',
            content: `${text} {{${fromCode}}} [[${toCode}]]`
        }
    ]
    
    // Realizar la solicitud al modelo de OpenAI
    const completion = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo', // Cambiar a otro modelo si es necesario
    messages,
    });

    // Retornar el resultado traducido o un mensaje de error en caso de que no haya respuesta
    return completion.choices[0]?.message?.content || 'Translation not available.';
    
}
