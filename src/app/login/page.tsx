'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { Dialog, DialogOverlay, DialogTrigger } from '@/components/ui/dialog'
import Image from 'next/image'
import LogoPotyguara from '../../../public/LogoRetangular.png'
import { ChooseUserRole } from '@/components/Singup/dialogChooseRole'
import { Suspense, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { auth, googleProvider } from '../../config/firebase'
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { FcGoogle } from 'react-icons/fc'
import { useToast } from '@/components/ui/use-toast'

export default function SingIn() {
  const router = useRouter()
  const { toast } = useToast()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password)

      toast({
        title: 'Usuário logado com sucesso!',
        description: 'Agora você pode acessar a plataforma.',
      })

      router.push(`/app/dashboard`)
    } catch (error) {
      console.error(error)

      toast({
        title: 'Erro ao logar na plataforma.',
        description: error.message,
        variant: 'destructive',
      })
    }
  }

  const loginWithGoggle = async () => {
    try {
      await signInWithPopup(auth, googleProvider)

      toast({
        title: 'Usuário logado com sucesso!',
        description: 'Agora você pode acessar a plataforma.',
      })

      router.push(`/app/dashboard`)
    } catch (error) {
      console.error(error)

      toast({
        title: 'Erro ao logar na plataforma.',
        description: error.message,
        variant: 'destructive',
      })
    }
  }

  function handleNavigateToHomePage() {
    router.push(`/`)
  }

  function handleNavigateToSingupPage() {
    router.push(`/singup`)
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
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input
                placeholder="Informe o seu e-mail"
                id="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Sua senha</Label>
              <Input
                placeholder="Informe sua senha"
                id="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Button
              onClick={login}
              className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Entrar
            </Button>
            <Button
              onClick={loginWithGoggle}
              variant="outline"
              className="flex w-full justify-center rounded-md gap-2 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <FcGoogle />
              Entrar com Google
            </Button>
          </div>
          <p className="mt-10 text-center text-sm text-gray-500">
            Não é um membro?{' '}
            <Button
              variant="ghost"
              className="hover:bg-transparent"
              onClick={() => handleNavigateToSingupPage()}
            >
              Cadastre-se.
            </Button>
          </p>
        </div>
      </div>
    </main>
  )
}
