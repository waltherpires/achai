import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-32">
      <div className="absolute inset-0 opacity-60">
        <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-secondary animate-bounce">
          <Image src="/images/logo.png" alt="logo" width={100} height={100} />
        </div>
        <div className="absolute top-40 right-20 w-12 h-12 rounded-full bg-accent animate-bounce delay-1000">
          <Image src="/images/logo.png" alt="logo" width={100} height={100} />
        </div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 rounded-full bg-primary animate-bounce delay-500">
          <Image src="/images/logo.png" alt="logo" width={100} height={100} />
        </div>
        <div className="absolute bottom-40 right-1/3 w-8 h-8 rounded-full bg-secondary animate-bounce delay-700">
          <Image src="/images/logo.png" alt="logo" width={100} height={100} />
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

          <div className="flex flex-wrap justify-center items-center gap-8 text-muted-foreground text-sm">
            <span>✨ Feito por estudantes, para estudantes</span>
            <span>🤝 Sem cadastro complicado</span>
            <span>⚡ Conexão rápida e direta</span>
          </div>
        </div>
      </div>
    </section>
  );
}
