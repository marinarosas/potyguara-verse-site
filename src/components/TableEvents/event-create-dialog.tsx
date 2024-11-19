import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useToast } from '@/components/ui/use-toast'
import { useAuth } from '@/contexts/AuthContext'
import { poty } from '@/services/api'
import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import { MdOutlineAddPhotoAlternate } from 'react-icons/md'
import { Textarea } from '../ui/textarea'
import { useListEventsByAuthorId } from '@/services/hooks/events/useListEventsByAuthorId'

const eventFormSchema = z.object({
  title: z.string(),
  content: z.string(),
  eventDate: z.string(),
  price: z.coerce.number(),
  eventTime: z.string(),
})

type EventFormSchema = z.infer<typeof eventFormSchema>

interface Props {
  setIsCreateEventOpen: (value: boolean) => void
}

export function EventCreateDialog({ setIsCreateEventOpen }: Props) {
  const { toast } = useToast()

  const { user } = useAuth()

  const [date, setDate] = useState<Date>()

  const [attachmentsIds, setAttachmentsIds] = useState<string[] | []>([])

  const { mutateEvents } = useListEventsByAuthorId()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<EventFormSchema>({
    resolver: zodResolver(eventFormSchema),
  })

  useEffect(() => {
    console.log('data', date)
    console.log('files', attachmentsIds)
  })

  const handleCreateEvent: SubmitHandler<
    z.infer<typeof eventFormSchema>
  > = async ({ title, content, price, eventDate, eventTime }) => {
    console.log('entrou')

    console.log('title', title)
    console.log('content', content)
    console.log('price', price)
    console.log('eventTime', eventTime)

    if (user?.id === undefined) {
      return null
    }

    if (date === null) {
      return toast({
        title: 'Data do evento não preenchida!',
        description:
          'Ta esquecendo de um detalhe! Data do evento não foi adicionada.',
      })
    }

    try {
      await poty.post('/events', {
        title,
        content,
        price,
        eventTime,
        eventDate,
        statusPayment: false,
        attachments: attachmentsIds,
      })

      toast({
        title: 'Uhuu! Deu certo o cadastro.',
        description: 'Cadastro do evento criado com sucesso.',
      })

      mutateEvents()
      reset()
      setIsCreateEventOpen(false)
    } catch {
      console.log(errors)
      toast({
        title: 'Ops! Algo deu errado.',
        description: 'O cadastro não foi criado, fale com a central.',
      })
    }
  }

  return (
    <DialogContent className="max-w-2xl">
      <DialogHeader>
        <DialogTitle>Criar evento</DialogTitle>
      </DialogHeader>

      <div className="space-y-4 text-foreground">
        <Button
          type="button"
          className="w-fit h-12 text-foreground flex gap-2 hover:text-primary hover:bg-transparent border-2 border-primary border-dashed"
          variant="ghost"
        >
          <MdOutlineAddPhotoAlternate
            className="size-6 text-gray-300 hover:text-primary hover:bg-transparent"
            aria-hidden="true"
          />
          Adicionar imagem do evento
        </Button>
        <div className="flex flex-row gap-2  ">
          <div className="space-y-4 border-r pr-2">
            <div className="gap-2 space-y-2 ">
              <Label htmlFor="title">Título do evento</Label>
              <Input
                placeholder="Nome do evento"
                type="text"
                {...register('title')}
              />
              {errors.title && <span>{errors.title.message}</span>}
            </div>
            <div className="gap-2 space-y-2 ">
              <Label htmlFor="content">Descrição do evento</Label>
              <div className="flex w-full flex-row gap-2">
                <Textarea
                  placeholder="Horário do evento"
                  {...register('content')}
                />
                {errors.content && <span>{errors.content.message}</span>}
              </div>
              <div className="gap-2 space-y-2 ">
                <Label htmlFor="weekDays">Data do evento</Label>
                {/* <div className="w-ful max-w-68  flex flex-row flex-wrap gap-2"> */}
                {/* <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={'outline'}
                      className={cn(
                        'flex w-full justify-start text-left font-normal text-background placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 bg-foreground',
                        !date && 'text-muted-foreground',
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4 opacity-50" />
                      {date ? (
                        format(date, 'PPP', { locale: ptBR })
                      ) : (
                        <span>Escolha uma data</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      locale={ptBR}
                    />
                  </PopoverContent>
                </Popover> */}
                <Input
                  placeholder="Data do evento"
                  type="date"
                  {...register('eventDate')}
                />
                {/* </div> */}
              </div>
              <div className="gap-2 space-y-2 ">
                <Label htmlFor="eventTime">Horário do evento</Label>
                <div className="flex w-full flex-row gap-2">
                  <Input
                    placeholder="Horário do evento"
                    type="time"
                    {...register('eventTime')}
                  />
                </div>

                {/* <div className="gap-2 space-y-2 ">
                <Label htmlFor="weekDays">Grupo de contato</Label>
                <Controller
                  name="contactGroupId"
                  control={control}
                  render={({ field: { name, onChange, value, disabled } }) => {
                    return (
                      <Select
                        name={name}
                        onValueChange={onChange}
                        value={value}
                        disabled={disabled}
                      >
                        <SelectTrigger id="contactGroupId">
                          <SelectValue placeholder="Selecione um grupo de contato" />
                        </SelectTrigger>
                        <SelectContent>
                          {contactsGroups?.findManyContactGroup.map(
                            (contactGroup) => (
                              <SelectItem
                                key={contactGroup.id}
                                value={contactGroup.id}
                              >
                                {contactGroup.name}
                              </SelectItem>
                            ),
                          )}
                        </SelectContent>
                      </Select>
                    )
                  }}
                />
              </div> */}
                <div className="gap-2 space-y-2 ">
                  <Label htmlFor="price">Valor do evento</Label>
                  <div className="flex w-full flex-row gap-2">
                    <Input
                      placeholder="Horário do evento"
                      {...register('price')}
                    />
                    <div>
                      {' '}
                      Lembre que esse valor é retirado a taxa da plataforma e
                      impostos. Taxa de transmissão a parte. Ler{' '}
                      <span className="text-blue-500">Termo do usuário</span>.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Button
          // disabled={isLoadingCreateCampaign}
          className="w-full"
          onClick={handleSubmit(handleCreateEvent)}
        >
          Criar
        </Button>
      </div>
    </DialogContent>
  )
}
