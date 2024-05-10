import {zodResolver} from '@hookform/resolvers/zod'
import {useMutation} from '@tanstack/react-query'
import {Controller, useForm} from 'react-hook-form'
import {loginSchema} from './schema'
import {signIn} from 'next-auth/react'
import useMessage from '@/hooks/useMessage'
import {redirect} from 'next/navigation'
import {button} from '@/components/core/button'
import {input} from '@/components/core/input'
import {title} from '@/components/core/primitives'
import {Input} from '@/components/Input'

export const SignInForm = () => {
  const {success, error} = useMessage()

  const {handleSubmit, control} = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const {mutate}: any = useMutation({
    mutationKey: ['form'],
    mutationFn: async (data: any) => {
      await signIn('credentials', data)
      success('Login realizado com sucesso!')
      redirect('/perfil')
    },
  })

  return (
    <div className=' flex justify-center items-center'>
      <div className='lg:flex hidden w-full bg-slate-500 h-full ' />
      <form
        onSubmit={handleSubmit(mutate)}
        className=' lg:w-3/4 flex  items-center 0 px-4 h-screen bg-red-500'
      >
        <div className='flex flex-col gap-4'>
          <h2 className={title({color: 'white'})}>Login</h2>

          <Controller
            control={control}
            name='email'
            render={({field, fieldState}) => (
              <Input
                helpText={fieldState.error?.message || ''}
                id='input-email'
                label='E-mail'
                placeholder='t@t.com'
                className={input()}
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name='password'
            render={({field, fieldState}) => (
              <Input
                helpText={fieldState.error?.message || ''}
                id='input-password'
                label='Password'
                placeholder='********'
                type='password'
                {...field}
                className={input()}
              />
            )}
          />
          <button
            type='submit'
            className={button({color: 'dark', className: 'mt-4'})}
          >
            entrar
          </button>
          <p className=''>
            demo: t@t.com
            <br />
            password: 123456
          </p>
        </div>
      </form>
    </div>
  )
}
