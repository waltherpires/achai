import { Button } from "@/components/ui/button"
import { ArrowRight, Smartphone } from "lucide-react"

export function FinalCTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary via-primary to-secondary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-accent animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-primary-foreground animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-accent animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="bg-primary-foreground/20 text-primary-foreground p-4 rounded-2xl w-fit mx-auto mb-8">
            <Smartphone className="w-12 h-12" />
          </div>

          {/* Headline */}
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6 text-balance">
            Não perca mais tempo procurando!
          </h2>

          {/* Description */}
          <p className="text-lg lg:text-xl text-primary-foreground/90 text-pretty mb-8 max-w-2xl mx-auto leading-relaxed">
            Junte-se à comunidade de estudantes que já recuperaram milhares de itens. Cadastre-se agora e faça parte
            dessa rede de solidariedade.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Cadastre-se Gratuitamente
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 text-lg rounded-xl transition-all duration-300 bg-transparent"
            >
              Ver Demonstração
            </Button>
          </div>

          {/* Trust message */}
          <p className="text-sm text-primary-foreground/80">
            ✨ Gratuito para sempre • 🔒 Seus dados protegidos • 📱 Funciona no celular
          </p>
        </div>
      </div>
    </section>
  )
}
