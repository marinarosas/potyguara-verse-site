'use client'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Button } from '@/components/ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter, useSearchParams } from 'next/navigation'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { z } from 'zod'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { useToast } from '@/components/ui/use-toast'
import { Suspense, useEffect, useState } from 'react'
import { InputMasked } from '@/components/Form/inputMask'
import { createExternalAccount } from '@/services/hooks/createExternalAccount'
import uuid from 'react-uuid'
import Link from 'next/link'
import { poty } from '@/services/api'

const signUpFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  username: z.string(),
  password: z.string(),
})

type SignUpFormSchema = z.infer<typeof signUpFormSchema>

export default function SingupPage() {
  const router = useRouter()

  const { toast } = useToast()

  const searchParams = useSearchParams()

  const userRole = searchParams.get('role')

  const [passwordChecked, setPasswordChecked] = useState<string | undefined>(
    undefined,
  )

  // const [allowNotification, setAllowNotification] = useState<boolean>(false);

  function handleNavigateToHomePage() {
    router.push(`/`)
  }

  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      name: '',
      username: '',
      email: '',
      password: '',
    },
  })

  const handleSignUp: SubmitHandler<SignUpFormSchema> = async ({
    name,
    username,
    email,
    password,
  }) => {
    if (password !== passwordChecked) {
      toast({
        title: 'Ops!',
        description: 'As senhas não batem',
        duration: 3000,
        type: 'background',
        variant: 'default',
      })

      return
    }

    try {
      await poty.post('/sing-up', {
        email,
        name,
        username,
        password,
        role: userRole,
      })

      // setIsLoadingCreateUser(false)

      // await mutateUsers()

      toast({
        title: 'Sucesso!',
        description: 'Usuário criado',
        duration: 3000,
        type: 'background',
        variant: 'default',
      })

      router.push(`/sing-in`)
    } catch (error) {
      // setIsLoadingCreateUser(false)

      toast({
        title: 'Ops!',
        description: 'Houve um error ao criar o usuário',
        duration: 3000,
        type: 'background',
        variant: 'default',
      })
    }
  }

  return (
    <main className="bg-muted-foreground text-foreground">
      <Header />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSignUp)} className="px-28 py-8">
          {/* Formulário */}
          <div className="pb-12">
            <h2 className="text-secondary text-xl font-semibold leading-7 pb-4">
              Criar usuário
            </h2>
            <p className="mt-1 text-sm leading-6">
              Olá. <br /> É sua primeira vez aqui? Bora iniciar sua jornada no
              Potyguara Verse? Primeiro é só criar o seu usuário.
            </p>

            <div className="flex gap-10">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-1/2 mt-8">
                    <FormLabel>Nome Completo</FormLabel>
                    <FormControl>
                      <Input
                        id="name"
                        placeholder="Informe o nome completo"
                        className="text-background placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 bg-foreground"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Esse será seu o nome usado no login.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="w-1/2 mt-8">
                    <FormLabel>Nome do usuário</FormLabel>
                    <FormControl>
                      <Input
                        id="username"
                        placeholder="Informe o nome do usuário"
                        className="text-background placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 bg-foreground"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Esse será seu o nome usado no login.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex gap-10">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-1/2 mt-8">
                    <FormLabel>E-mail</FormLabel>
                    <FormControl>
                      <Input
                        id="email"
                        placeholder="Informe o e-mail"
                        className="text-background placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 bg-foreground"
                        {...field}
                      />
                    </FormControl>
                    {/* <FormDescription>
                    Esse será seu nome de usuário e login.
                  </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="w-1/2 flex mt-8 gap-10">
                {' '}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="w-1/2">
                      <FormLabel>Senha</FormLabel>
                      <FormControl>
                        <Input
                          id="password"
                          placeholder="Informe a senha"
                          className="text-background placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 bg-foreground"
                          {...field}
                        />
                      </FormControl>
                      {/* <FormDescription>
                    Esse será seu nome de usuário e login.
                  </FormDescription> */}
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormItem className="w-1/2">
                  <FormLabel>Confirme a senha</FormLabel>
                  <FormControl>
                    <Input
                      id="password1"
                      placeholder="Informe a senha novamente"
                      className="text-background placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 bg-foreground"
                      // {...field}
                      onChange={(e) => setPasswordChecked(e.target.value)}
                    />
                  </FormControl>
                  {/* <FormDescription>
                    Esse será seu nome de usuário e login.
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              </div>
            </div>

            <div className="flex gap-4 justify-end mt-16">
              {/* <div className="flex items-center space-x-2">
                <Checkbox id="allownotifications" />
                <label
                  htmlFor="allownotifications"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Quer receber novidades da plataforma?
                </label>
              </div> */}
              <div className="flex items-center space-x-2">
                <span>
                  Ao cadastrar, você aceita os{' '}
                  <Link
                    href="www.google.com"
                    className="text-blue-500 underline"
                  >
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
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <Button
              type="button"
              variant="ghost"
              // className="text-sm font-semibold leading-6 hover:text-red-600"
              onClick={() => handleNavigateToHomePage()}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              variant="default"
              // className="hover:bg-transparent hover:text-secondary"
            >
              Cadastrar
            </Button>
          </div>
        </form>
      </Form>
      <Footer />
    </main>
  )
}
