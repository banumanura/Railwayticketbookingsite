import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom'
import '../style.css'

export default function AdminLogin() {
    const direct = useNavigate()

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [wrong, setWrong] = useState('')

    function submit(e) {
        e.preventDefault()
        if (email == 'admin@lanka.com' && pass == '11') {
            direct('/panel')
        } else {
            setWrong('Insert Valid Information ')
        }
    }

    return (
        <div className='admin_log' style={{  height: "100vh", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
            <Form onSubmit={submit} style={{ maxWidth: '1000px', margin: 'auto', padding: '1rem',backgroundColor:'whitesmoke',borderRadius:'10px' }}>
                <h2 className='text-center m-3 text-dark'>Admin  Sri Lanka Railway</h2>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={(e) => {
                        setEmail(e.target.value)
                    }} value={email} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={(e) => {
                        setPass(e.target.value)
                    }} value={pass} type="password" placeholder="Password" required />
                </Form.Group>
                <Button style={{ width: "100%" }} variant="primary" type="submit">
                    Login
                </Button>

            </Form>
            {wrong && <><h4 className='bg-danger p-2' style={{ color: 'white', textAlign: 'center', margin: "2rem 0",borderRadius:"10px" }}>{wrong}</h4></>}

        </div>
    )
}
