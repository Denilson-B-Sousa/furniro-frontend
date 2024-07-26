import logo from '@assets/images/logo.png';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { Eye, EyeClosed } from '@phosphor-icons/react';
import { EventHandler, FormEvent, useState } from 'react';
import {NavLink } from 'react-router-dom';

export function Login() {

  const [password, setPassword] = useState("");
  const [type, setType] = useState('password');

  function handleShowPassword(e : FormEvent) {
    e.preventDefault();
    type === 'password' ? setType('text') : setType('password');
  }

  return (
    <main>
      <NavLink to={'/'} className={'hidden items-center px-8 py-4 laptop:flex'}>
        <img src={logo} alt='Furniro Logo' width={96} height={96} />
        <h1 className='font-poppins text-2xl font-bold laptop:text-4xl'>
          Furniro
        </h1>
      </NavLink>

      <div className='absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform'>
        <div className='flex flex-col gap-4 py-8'>
          <h1 className='text-center font-poppins text-5xl font-semibold'>
            Login
          </h1>
          <span className='text-center text-dark-gray-800'>
            Faça login para acessar sua conta
            <br /> e explorar nossa incrível seleção de móveis e decoração.
          </span>
        </div>
        <form className='m-auto flex w-[24rem] flex-col justify-center gap-4 laptop:w-[28rem]'>
          <label className='font-poppins text-2xl font-medium text-black'>
            Email:
          </label>
          <Input placeholder='Enter with your email' type='email' required />

          <label className='font-poppins text-2xl font-medium text-black'>
            Password:
          </label>
          <div className='relative'>
            <Input
              placeholder='Enter with your password'
              type={type}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              onClick={handleShowPassword}
              className='transition-all duration-300 absolute bottom-4 left-[20rem] laptop:bottom-4 laptop:left-[28rem]'
            >
              {type === 'password' ? (
                <EyeClosed width={32} height={32} />
              ) : (
                <Eye width={32} height={32} />
              )}
            </button>
          </div>

          <div className='pt-4'>
            <Button variant='primary' size='full'>
              Entrar
            </Button>
          </div>

          <div>
            <span className='font-poppins'>
              Não tem conta?{' '}
              <a
                href='register'
                className={'font-semibold text-blue-600 hover:underline'}
              >
                Cadastre-se
              </a>
            </span>
          </div>
        </form>
      </div>
    </main>
  );
}