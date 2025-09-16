import { Card, CardContent } from "@/components/ui/card"
import { Shield, Zap, Heart, Clock } from "lucide-react"

const benefits = [
  {
    icon: Shield,
    title: "Seguro e Confiável",
    description: "Verificação de identidade e processo seguro para garantir que seus itens cheguem às mãos certas.",
  },
  {
    icon: Zap,
    title: "Rápido e Eficiente",
    description: "Sistema inteligente que conecta automaticamente itens perdidos com encontrados.",
  },
  {
    icon: Heart,
    title: "Comunidade Solidária",
    description: "Construa uma rede de ajuda mútua entre estudantes da sua universidade.",
  },
  {
    icon: Clock,
    title: "Disponível 24/7",
    description: "Reporte e busque itens a qualquer hora, de qualquer lugar, pelo seu celular.",
  },
]

export function WhyUseSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 text-balance">Por que usar o Achaí?</h2>
            <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
              Desenvolvido especialmente para a comunidade universitária, com foco na praticidade e segurança que você
              precisa.
            </p>
          </div>

          {/* Benefits grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="bg-card border-0 shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  {/* Icon */}
                  <div className="bg-primary/10 text-primary p-3 rounded-xl w-fit mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <benefit.icon className="w-6 h-6" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed text-pretty">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
