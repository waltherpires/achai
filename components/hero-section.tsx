import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-32">
      <div className="absolute inset-0 opacity-60">
        <div className="absolute top-10 left-4 sm:top-20 sm:left-10 w-16 h-16 rounded-full bg-secondary animate-bounce">
          <Image src="/images/logo-bussola.png" alt="logo" width={100} height={100} />
        </div>
        <div className="absolute bottom-5 right-5 w-12 h-12 rounded-full bg-accent animate-bounce delay-700">
          <Image src="/images/logo-bussola.png" alt="logo" width={100} height={100} />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-8">
            <div className="text-primary-foreground p-4 rounded-full mr-4">
              <Image
                src="/images/logo-bussola.png"
                alt="logo"
                width={100}
                height={100}
              />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary">
              Achaí
            </h1>
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold text-balance mb-6 leading-tight">
            Perdeu? Encontrou? <br />
            <span className="text-accent">Conecte-se!</span>
          </h2>

          <p className="text-lg lg:text-xl text-muted-foreground text-pretty mb-8 max-w-2xl mx-auto leading-relaxed">
            Aquela sensação de perder algo importante no campus? A gente
            entende! O Achaí conecta você com outros estudantes para recuperar
            seus pertences de forma rápida e segura.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Informe seu Achado!
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-4 text-lg rounded-xl transition-all duration-300 bg-transparent"
            >
              Procurar Item Perdido
            </Button>
          </div>

          <div className="flex flex-wrap  justify-start sm:justify-center items-center gap-8 text-muted-foreground text-sm">
            <span className="flex items-center gap-2"><Image src="/images/logo.png" alt="logo" width={24} height={24} className="bg-lime-300 rounded-full"/> Feito por estudantes, para estudantes</span>
            <span className="flex items-center gap-2"><Image src="/images/logo.png" alt="logo" width={24} height={24} className="bg-accent rounded-full"/> Sem cadastro complicado</span>
            <span className="flex items-center gap-2"><Image src="/images/logo.png" alt="logo" width={24} height={24} className="bg-secondary rounded-full"/> Conexão rápida e direta</span>
          </div>
        </div>
      </div>
    </section>
  );
}
