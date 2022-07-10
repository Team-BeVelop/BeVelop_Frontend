import React, { useState} from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { auth } from '../../modules/auth';
import { IoIosClose } from "react-icons/io";
import { modal } from '../../modules/modal';

type User = {
    id : string,
    pw : string
}
const Wrap = styled.div`
    position: absolute;
    justify-content: center;
    align-items: center;    
`
const LoginBox = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 50%;
    left: 50%;
    padding: 30px 30px;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border-radius: 6px;
    .logo{
        height: 25px;
        margin-bottom: 30px;
        font-family: 'Pretendard';
font-style: normal;
font-weight: 500;
font-size: 40px;
line-height: 26px;
font-feature-settings: 'tnum' on, 'lnum' on;

color: #000000;
    }
    .sentence{
        margin-bottom: 40px;
        padding: 20px 15px;
        border-bottom: 3px solid #000062;
    }
    @media screen and (max-width:480px){
        transform: translate(-50%, -80%);
    }
`
const InputBox = styled.div`
    display: flex;
    flex-direction:column;
    input{
        width: 320px;
        height: 40px;
        margin: 5px;
        padding: 0 20px;
        border: 1px solid #000062;
        border-radius: 20px;
    }
    input::placeholder{
        font-size: 12px;
    }
`
const ButtonBox = styled.div`

    .signInBtn{
        width: 320px;
        height: 40px;
        margin: 40px 0 0 0;
        border: 2px solid #000062;
        border-radius: 20px;
        text-align: center;
        line-height: 40px;
        font-weight: 700;
        color: #000062;
        }

    .or{
        text-align:center;
        margin: 20px;
    }

.signUpBtn{
    display:table;
    margin:0 auto;
    font-weight: 500;
    color: #000062;
}
`
const Button = styled.div`
    position: absolute;
    right: 26.25px;
    top: 26px;
    font-size: 30px;
    cursor: pointer;
`

const  Login =  () => {
    
    const dispatch = useDispatch<any>();
    const [formInput, setFormInput] = useState<User>({
        id: '',
        pw: '',
    });

    const handleFormInput = (e : any) => {
        setFormInput({ ...formInput, [e.target.name]: e.target.value });
    };
    const isActive = !(formInput.id.length > 4 && formInput.pw.length > 4);
    const signInBtn =() =>{
        dispatch(auth(formInput.id,formInput.pw));
    };

    const signUpBtn = () => {
        alert("Sign Up!")
    };

    const OnclickPopUp = () => {
        dispatch(modal());
      };

    
    return(
        <Wrap>
            
            <LoginBox>
            <Button onClick={OnclickPopUp}><IoIosClose/></Button>
                <h1 className='logo'>BeVelop</h1>
                <p className="sentence">
                    "개발자들을 위한 공간 BeVelop"
                </p>
                <InputBox>
                    <input onChange={handleFormInput} value={formInput.id} name="id" type="text" placeholder="E-Mail"></input>
                    <input onChange={handleFormInput} value={formInput.pw} name="pw" type="password" placeholder="Password"></input>
                </InputBox>
                <ButtonBox>
                <button onClick={signInBtn} className="signInBtn" disabled={isActive}>Sign In</button>
                <div className="or" >- or -</div>
                <button onClick={signUpBtn} className="signUpBtn">Sign Up</button>
                </ButtonBox>
            </LoginBox>
        </Wrap>
    );
}

export default Login;