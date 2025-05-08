import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';

const Ingresar = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { isLoggedIn, userEmail, login, logout } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        login(email); // Simula inicio de sesión
    };

    return (
        <Container style={{ maxWidth: '400px' }} className="mt-5">
            <h2 className="mb-4">Ingresar</h2>
            {isLoggedIn ? (
                <>
                    <Alert variant="success">¡Bienvenido, {userEmail || 'usuario'}!</Alert>
                    <Button variant="secondary" onClick={logout} className="w-100">
                        Cerrar sesión
                    </Button>
                </>
            ) : (
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Correo electrónico</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Ingresa tu correo"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Ingresa tu contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="w-100">
                        Ingresar
                    </Button>
                </Form>
            )}
        </Container>
    );
};

export default Ingresar;
