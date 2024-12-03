'use client'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'
import { useState } from 'react'
import Link from 'next/link'
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { auth, googleProvider, db } from '@/config/firebase'
import { Label } from '@/components/ui/label'
import { FcGoogle } from 'react-icons/fc'
import { doc, setDoc } from 'firebase/firestore'

export default function SingupPage() {
  const router = useRouter()

  const { toast } = useToast()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')

  const singIn = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      )

      const user = userCredential.user

      if (!role) {
        throw new Error('Role não definido. Selecione um papel.')
      }

      await setDoc(doc(db, 'users', user.uid), {
        email,
        role,
      })

      toast({
        title: 'Usuário criado com sucesso!',
        description: 'Agora você pode acessar a plataforma.',
      })
    } catch (error) {
      console.error(error)

      toast({
        title: 'Erro ao criar usuário.',
        description: error.message,
        variant: 'destructive',
      })
    }
  }

  const singInWithGoggle = async () => {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider)
      const user = userCredential.user

      await setDoc(doc(db, 'users', user.uid), {
        email,
        role,
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <main className="bg-muted-foreground text-foreground">
      <Header />
      <div className="px-28 py-8">
        <div className="pb-12">
          <h2 className="text-secondary text-xl font-semibold leading-7 pb-4">
            Criar usuário
          </h2>
          <p className="mt-1 text-sm leading-6">
            Olá. <br /> É sua primeira vez aqui? Bora iniciar sua jornada no
            Potyguara Verse? Primeiro é só criar o seu usuário.
            <div className="flex items-center space-x-2">
              <span>
                Ao cadastrar, você aceita os{' '}
                <Link href="www.google.com" className="text-blue-500 underline">
                  termos
                </Link>{' '}
                e{' '}
                <Link
                  href="wwww.google.com"
                  className="text-blue-500 underline"
                >
                  políticas
                </Link>{' '}
                da plataforma Potyguara Verse.{' '}
              </span>
            </div>
          </p>
          <div className="flex pt-4 w-96 justify-between">
            <Button
              variant={'outline'}
              className="w-32 text-foreground"
              onClick={() => setRole('Artist')}
            >
              Artista
            </Button>
            <Button
              variant={'outline'}
              className="w-32 text-foreground"
              onClick={() => setRole('Viewer')}
            >
              Espectador
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col space-y-6 pt-8">
              <div className="space-y-2 w-96">
                <Label htmlFor="email">Seu e-mail</Label>
                <Input
                  placeholder="Informe o seu e-mail"
                  id="email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2 w-96">
                <Label htmlFor="email">Sua senha</Label>
                <Input
                  placeholder="Informe sua senha"
                  id="password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <Button
                onClick={singIn}
                className="flex w-96 justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Criar usuário
              </Button>
            </div>
            <h1>OU</h1>
            <Button
              onClick={singInWithGoggle}
              variant="outline"
              className="flex w-96 justify-center rounded-md gap-2 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <FcGoogle />
              Criar usuário com Google
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
