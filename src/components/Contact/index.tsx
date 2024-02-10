"use client";

import { Button } from "../ui/button";

export function Contact() {
  return (
    <div className="h-screen bg-background flex" id="contact">
      {/* Contatos */}
      <div className="w-1/2 flex justify-center items-center">
        <div className="w-7/12 h-5/6 rounded-l-3xl bg-gradient-to-b from-green-neon to-foreground text-background">
          <form className="p-4">
            <div className="space-y-4">
              <div>
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Deixe o seu contato e falaremos com você!
                </h2>
                <p className="mt-1 text-xs leading-6 text-gray-600">
                  Suas informações não serão compartilhadas. Campos
                  obrigatórios*
                </p>
                <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                  <div className="sm:col-span-6">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Nome completo
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 bg-gray-light focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-6">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      E-mail
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 bg-gray-light focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-6">
                    <label
                      htmlFor="region"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Estado
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="region"
                        id="region"
                        autoComplete="address-level1"
                        className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 bg-gray-light focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="col-span-full">
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Mensagem
                    </label>
                    <div className="mt-2">
                      <textarea
                        id="about"
                        name="about"
                        rows={3}
                        className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 bg-gray-light focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <Button className="text-foreground">Enviar</Button>
            </div>
          </form>
        </div>
      </div>

      <div className="w-1/2 ustify-center align-middle space-y-8 m-auto">
        <h1 className="text-foreground text-3xl text-center items-center">
          Bora curtir o <br/> primeiro show?
        </h1>
        <div className="flex flex-col gap-8 items-center ">
          <Button className="text-foreground  w-6/12 text-lg">Baixe a plataforma</Button>
          <Button className="text-background w-6/12 text-lg" variant="secondary">
            Cadastre-se
          </Button>
          <Button className="text-foreground w-6/12 text-lg">Comunidade Steam</Button>
        </div>
      </div>
    </div>

    //
    //
    //   {/* Buttons */}
    //
    //     <VStack h="40vh" justifyContent="space-between">
    //       <OrangeButton
    //         title="Entrar na plataforma"
    //         w="20vw"
    //         h="8vh"
    //         fontSize="24px"
    //         // onClick={}
    //       />
    //       <GreenButton
    //         title="Cadastre-se"
    //         w="20vw"
    //         h="8vh"
    //         fontSize="24px"
    //         // onClick={}
    //       />
    //       <OrangeButton
    //         title="Baixe a plataforma"
    //         w="20vw"
    //         h="8vh"
    //         fontSize="24px"
    //         // onClick={}
    //       />
    //     </VStack>
    //   </VStack>
    // </Flex>
  );
}
