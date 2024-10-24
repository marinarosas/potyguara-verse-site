'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { Dialog, DialogOverlay, DialogTrigger } from '@/components/ui/dialog'
import Image from 'next/image'
import LogoPotyguara from '../../../public/LogoRetangular.png'
import { ChooseUserRole } from '@/components/Singup/dialogChooseRole'
import { Suspense } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { z } from 'zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signInFormSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

type SignInFormSchema = z.infer<typeof signInFormSchema>

export default function SingIn() {
  const router = useRouter()
  const { signIn } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInFormSchema>({
    resolver: zodResolver(signInFormSchema),
  })

  const handleSignIn: SubmitHandler<SignInFormSchema> = async ({
    email,
    password,
  }) => {
    await signIn({ email, password })
  }

  function handleNavigateToHomePage() {
    router.push(`/`)
  }

  return (
    <main className="h-screen text-foreground bg-muted-foreground">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="flex flex-col sm:mx-auto sm:w-full sm:max-w-sm gap-4">
          <Image
            className="h-auto w-36 m-auto hover:cursor-pointer"
            src={LogoPotyguara}
            height={100}
            width={100}
            alt="Potyguara Logo"
            onClick={() => handleNavigateToHomePage()}
          />
          <h2 className="text-center text-lg font-bold leading-4 tracking-tight ">
            Entre na sua conta
          </h2>
        </div>
        <div className="mt-4 mx-auto w-full max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(handleSignIn)}>
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input
                placeholder="Informe o seu e-mail"
                id="email"
                type="email"
                {...register('email')}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Sua senha</Label>
              <Input
                placeholder="Informe sua senha"
                id="password"
                type="password"
                {...register('password')}
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Entrar
            </Button>
            <div className="flex items-center space-x-2">
              <Checkbox id="conection" />
              <label
                htmlFor="conection"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Fique conectado uma semana.
              </label>
            </div>
          </form>
          <p className="mt-10 text-center text-sm text-gray-500">
            Não é um membro?{' '}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" className="hover:bg-transparent">
                  Cadastre-se.
                </Button>
              </DialogTrigger>
              <DialogOverlay className="bg-background opacity-90" />
              <Suspense>
                <ChooseUserRole />
              </Suspense>
            </Dialog>
          </p>
        </div>
      </div>
    </main>
  )
}
