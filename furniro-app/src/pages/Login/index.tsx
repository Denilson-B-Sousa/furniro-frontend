/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '@components/Button';
import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeClosed } from '@phosphor-icons/react';
import { useUserAuth } from 'context/userAuthContext';
import { FormEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate} from 'react-router-dom';
import { toast, Toaster } from 'sonner';
import { z } from 'zod';


type FormFields = {
  email: string;
  password: string;
};

export function Login() {

  const { logIn } = useUserAuth();
  const navigate = useNavigate();

  async function handleSubmitLogin(data: FormFields) {
    

    const { email, password } = data;
    try {
      await logIn(email, password);
      toast.success('User login with Success!');
      setTimeout(() => {
        navigate('/');
      }, 2500)
    } catch (error : any) {
      toast.error(`${error.message}`);
    }
  }

  const createUserFormSchema = z.object({
    email: z
      .string()
      .regex(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        '*E-mail inválido',
      )
      .email('*Formato de e-mail inválido!'),
    password: z
      .string()
      .min(8, '*A senha deve ter no mínimo 8 caracteres')
      .max(32, '*A senha deve ter no máximo 32 caracteres')
      .regex(/[a-z]/, '*A senha deve conter pelo menos uma letra minúscula')
      .regex(/[A-Z]/, '*A senha deve conter pelo menos uma letra maiúscula')
      .regex(/[0-9]/, '*A senha deve conter pelo menos um número')
      .regex(
        /[^a-zA-Z0-9]/,
        '*A senha deve conter pelo menos um caractere especial',
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(createUserFormSchema),
  });

  
  const [type, setType] = useState('password');

  function handleShowPassword(e: FormEvent) {
    e.preventDefault();
    type === 'password' ? setType('text') : setType('password');
  }

  return (
    <main>
      <Toaster position='top-center' richColors />

      <NavLink to={'/'} className={'hidden items-center px-8 py-4 laptop:flex'}>
        <img
          src='https://furnirobucket.s3.us-east-2.amazonaws.com/images/assets/logo.png'
          alt='Furniro Logo'
          width={96}
          height={96}
        />
        <h1 className='font-poppins text-2xl font-bold laptop:text-4xl'>
          Furniro
        </h1>
      </NavLink>

      <div className='absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform py-12 mobile:pt-24'>
        <div className='flex flex-col gap-4 py-8'>
          <h1 className='text-center font-poppins text-4xl font-semibold uppercase'>
            Login
          </h1>
          <span className='text-center text-dark-gray-800'>
            Faça login para acessar sua conta
            <br /> e explorar nossa incrível seleção de móveis e decoração.
          </span>
        </div>
        <form
          onSubmit={handleSubmit(handleSubmitLogin)}
          className='m-auto flex w-[24rem] flex-col justify-center laptop:w-[28rem]'
        >
          <label className='py-4 font-poppins text-xl font-medium text-black'>
            Email:
          </label>
          <input
            placeholder='Enter with your email'
            type='email'
            required
            className='rounded-xl border-2 border-dark-gray-300 p-6 outline-dark-gray-900'
            {...register('email')}
          />

          {errors.email && (
            <span className='font-semibold text-red-500'>
              {errors.email.message}
            </span>
          )}

          <label className='py-4 font-poppins text-xl font-medium text-black'>
            Password:
          </label>
          <div className='relative flex flex-col'>
            <input
              placeholder='Enter with your password'
              type={type}
              required
              className='rounded-xl border-2 border-dark-gray-300 p-6 outline-dark-gray-900'
              {...register('password')}
            />

            <button
              onClick={handleShowPassword}
              className='absolute bottom-6 right-5'
            >
              {type === 'password' ? (
                <EyeClosed width={24} height={24} />
              ) : (
                <Eye width={24} height={24} />
              )}
            </button>
          </div>
          {errors.password && (
            <span className='font-semibold text-red-500'>
              {errors.password.message}
            </span>
          )}

          <div className='py-6'>
            <Button variant='primary' size='full' type='submit'>
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
