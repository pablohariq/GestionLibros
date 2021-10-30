import React, {useState} from "react";
import {Form, Button} from "react-bootstrap";
import {v4 as uuidv4} from 'uuid';

const BookForm = (props) => {
    //evita los undefined y permite que existan books sin ciertos atributos definidos
    const [book, setBook] = useState({
        bookname: props.book ? props.book.bookname : "",
        author: props.book ? props.book.author : "",
        quantity: props.book ? props.book.quantity : "",
        price: props.book ? props.book.price : "",
        date: props.book ? props.book.date : "",
    });

    const [errorMsg, setErrorMsg] = useState("");

    const {bookname, author, price, quantity} = book;

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const values = [bookname, author, price, quantity];
        let errorMsg = "";

        const allFieldsFilled = values.every( (field) => {
            const value = `${field}`.trim() //verifica que sean todos strings sin espacios
            return value !== "" && values !== '0' // cada campo se considera válido si no es un string vacio despues del trim o si no es "0"
        })
    }

}

