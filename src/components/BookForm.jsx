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

        if (allFieldsFilled){
            const book = { //agrega los campos que no ingresa el usuario
                id: uuidv4(),
                bookname,
                author,
                price,
                quantity,
                date: new Date()
            };
            props.handleOnSubmit(book);
        }
        else{
            errorMsg = "Please fill out all the fields."
        }
        setErrorMsg(errorMsg)
    };

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        switch (name) {
            case "quantity":
                if (value === "" || parseInt(value) === +value){
                    setBook((prevState) => ({
                        ...prevState,
                        [name]: value
                    }))
                }
                break;
            case "price":
                if (value === "" || value.match(/^\d{1,}(\.\d{0,2})?$/)){
                    setBook((prevState) => {
                        const newState = {
                            ...prevState,
                            [name]: value //key equivalente al name del campo en cuestion
                        }
                        return newState
                    })
                }
                break;
            default: 
            setBook((prevState) => {
                const newState = {
                    ...prevState,
                    [name]: value
                }
                return newState
            });
        }

    }

    return (
        <div className="main-form">
            {/* renderizado condicional */}
            {errorMsg && <p className="errorMsg">{errorMsg}</p>} 
        <Form onSubmit={handleOnSubmit}>
            <Form.Group controlId="name">
                <Form.Label>Book Name</Form.Label>
                <Form.Control
                className="input-control"
                type="text"
                name="bookname"
                value={bookname}
                placeholder="Introduzca el nombre del libro"
                onChange={handleInputChange}/>
            </Form.Group>
            <Form.Group controlId="author">
                <Form.Label>Author Name</Form.Label>
                <Form.Control
                className="input-control"
                type="text"
                name="author"
                value={author}
                placeholder="Introduzca el nombre del autor"
                onChange={handleInputChange}
                />
            </Form.Group>
            <Form.Group controlId="quantity">
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                className="input-control"
                type="number"
                name="quantity"
                value={quantity}
                placeholder="Introduzca la cantidad disponible"
                onChange={handleInputChange}/>
            </Form.Group>
            <Form.Group controlId="price">
                <Form.Label>Precio</Form.Label>
                <Form.Control
                className="input-control"
                type="text"
                name="price"
                value={price}
                placeholder="Introduzca el precio del libro"
                onChange={handleInputChange}/>
            </Form.Group>
            <Button variant="primary" type="submit" className="submit-btn">
                Registrar
            </Button>
            
        </Form>
        </div>
    );
};

export default BookForm;

