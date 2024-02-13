import { Button } from "../ui/button";

export function Homepage() {
  
  return (
    <div
      className=" 
      h-screen
      align-middle 
      flex 
      sm:justify-start 
      md:justify-center 
      lg:justify-center 
      2xl:justify-center 
      pt-40
      sm:pt-40
      md:pt-0 
      lg:pt-0 
      2xl:pt-0 
      gap-8 flex-col 
      items-center 
      transition-transform
      "
      style={{
        backgroundImage: `url(/BgSite_ImageAV.jpeg)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPositionY: "center",
      }} 
    >
      <h1 className="
      flex 
      justify-center 
      text-center 
      font-bold 
      text-4xl
      sm:text-4xl
      md:text-3xl 
      lg:text-3xl 
      2xl:text-3xl 
      sm:w-9/12
      md:w-3/5
      lg:w-3/5 
      2xl:w-3/5 
      ml-8 
      mr-8 
      ">
        Conheça a Potyguara Verse sua plataforma de eventos online, uma nova
        maneira de assitir eventos!
      </h1>
      <div className="
      flex 
      flex-col
      space-y-8
      sm:flex-col 
      md:flex-row 
      lg:flex-row
      items-center 
      justify-center 
      sm:space-y-8 
      md:space-y-0
      sm:space-x-0
      md:space-x-8
      ">
        <Button className="text-foreground">Baixe a plataforma</Button>
        <Button className="text-background" variant="secondary">
          Cadastre-se
        </Button>
      </div>
      <div className="lg:hidden w-full h-28 mt-12 bg-gradient-to-b from-black-000 to-background"></div>
    </div>
  );
}
