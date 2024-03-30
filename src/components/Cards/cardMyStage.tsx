import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import Image from "next/image";
import StageImage from '../../../public/stageTemp.png'
import { MdEdit } from "react-icons/md";

export function CardMyStage(){
    return(
        <Card className="flex flex-col w-1/2 h-full break-words bg-transparent shadow-md rounded-2xl bg-clip-border border-2">
            <CardHeader className="flex py-4 px-4 justify-between h-14">
              <CardTitle className="font-semibold flex justify-between">
                Meu Palco <MdEdit />
              </CardTitle>
            </CardHeader>
            <CardContent className="h-full">
              <Image
                className="object-cover h-full w-full rounded-b-2xl"
                src={StageImage}
                alt="rocket"
              />
            </CardContent>
          </Card>
    )
}