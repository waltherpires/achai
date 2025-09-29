import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

export function GoogleFormCTA() {
  return (
    <section className="relative py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto mb-6 bg-lime-200 rounded-full flex items-center justify-center border border-primary/30">
              <div className="text-4xl">
                <Image
                  alt="formulario achai"
                  src="/images/acai.png"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">
              Perdeu ou achou algo?
            </h2>
            <p className="text-lg text-muted-foreground text-pretty mb-8">
              Preencha nosso formulário rápido e simples. Vamos te ajudar a
              conectar com quem pode resolver sua situação!
            </p>
          </div>

          <div className="space-y-4">
            <Button
              size="lg"
              className="text-lg px-8 py-6 h-auto bg-primary hover:bg-primary/90"
              asChild
            >
              <a
                href="https://forms.gle/ycBSR4HQWLXfKSWK8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Preencher Formulário
                <ExternalLink className="w-5 h-5" />
              </a>
            </Button>

            <p className="text-sm text-muted-foreground">
              Leva apenas alguns minutos para preencher
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="relative flex flex-col items-center  bg-card p-6 rounded-lg border group">
              <Image
                src="/images/encontrei-item.png"
                alt="perdi item"
                width={350}
                height={350}
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
              <h3 className="font-semibold mb-2">Encontrou algo?</h3>
              <p className="text-sm text-muted-foreground">
                Conte onde achou e entregue para a segurança{" "}
              </p>
            </div>
            <div className="relative flex flex-col items-center  bg-card p-6 rounded-lg border group">
              <Image
                src="/images/perdi-item.png"
                alt="perdi item"
                width={350}
                height={350}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
              <h3 className="font-semibold mb-2">Perdeu algo?</h3>
              <p className="text-sm text-muted-foreground">
                Descreva o item e onde você acha que perdeu
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
