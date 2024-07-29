import logo from '@assets/images/logo.png';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeClosed } from '@phosphor-icons/react';
import { useUserAuth } from 'context/userAuthContext';
import { doc, setDoc } from 'firebase/firestore';
import { FormEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink,useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'sonner';
import { z } from 'zod';

import { auth, db } from '../../../src/firebase-config';

type FormFields = {
  name: string;
  email: string;
  password: string;
};

export function Register() {
  const createUserFormSchema = z.object({
    name: z
      .string()
      .min(3, '*O nome deve ter no mínimo 3 caracteres')
      .max(30, '*O nome deve ter no máximo 30 caracteres')
      .regex(
        /^[a-zA-Z0-9]+$/,
        '*O nome deve conter apenas caracteres alfanuméricos',
      )
      .refine(
        (value) => value.trim() === value,
        '*O nome não deve conter espaços no início ou no fim',
      ),

    email: z
      .string()
      .regex(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        'E-mail inválido',
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

  const { signUp } = useUserAuth();
  const navigate = useNavigate();

  async function handleRegister(data: FormFields) {
    const { name, email, password } = data;

    try {

      await signUp(name, email, password);
      const user = auth.currentUser;

      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: name,
        });
      }

      toast.success('User Registered with Success!');

      setInterval(() => {
        
        navigate('/auth/login');

      }, 3000)
      
    } catch (error) {
      toast.error(`${error.message}`);
      console.log(error.message);
    }
  }

  function handleShowPassword(e: FormEvent) {
    e.preventDefault();
    type === 'password' ? setType('text') : setType('password');
  }

  return (
    <main>
      <Toaster position='top-center' richColors/>
      <NavLink to={'/'} className={'hidden items-center px-8 py-4 laptop:flex'}>
        <img src={logo} alt='Furniro Logo' width={96} height={96} />
        <h1 className='font-poppins text-2xl font-bold laptop:text-4xl'>
          Furniro
        </h1>
      </NavLink>

      <div className='absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform'>
        <div className='flex flex-col gap-4 py-8'>
          <h1 className='text-center font-poppins text-4xl font-semibold uppercase'>
            Cadastre-se
          </h1>
        </div>
        <form
          className='m-auto flex w-[24rem] flex-col justify-center laptop:w-[28rem]'
          onSubmit={handleSubmit(handleRegister)}
        >
          <label className='py-3 font-poppins text-lg font-medium text-black'>
            Name:
          </label>
          <Input
            placeholder='Enter with your name'
            type='text'
            required
            {...register('name')}
          />
          {errors.name && (
            <span className='font-semibold text-red-500'>
              {errors.name.message}
            </span>
          )}

          <label className='py-3 font-poppins text-lg font-medium text-black'>
            Email:
          </label>
          <Input
            placeholder='Enter with your email'
            type='email'
            required
            {...register('email')}
          />
          {errors.email && (
            <span className='font-semibold text-red-500'>
              {errors.email.message}
            </span>
          )}

          <label className='py-3 font-poppins text-lg font-medium text-black'>
            Password:
          </label>
          <div className='relative flex flex-col'>
            <Input
              placeholder='Enter with your password'
              type={type}
              required
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

          <div className='pt-4'>
            <Button variant='primary' size='full' type='submit'>
              Cadastre-se
            </Button>
          </div>

          <div className='py-2'>
            <span className='font-poppins'>
              Já possui conta?{'  '}
              <a
                href='login'
                className={'font-semibold text-blue-600 hover:underline'}
              >
                Login
              </a>
            </span>
          </div>
        </form>
      </div>
    </main>
  );
}
