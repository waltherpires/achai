import { Card, CardContent } from "@/components/ui/card"
import { FileText, Bell, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: FileText,
    title: "Relate o item",
    description: "Descreva o item perdido ou encontrado com detalhes simples e uma foto, se possível.",
  },
  {
    icon: Bell,
    title: "Receba notificações",
    description: "Nosso sistema cruza as informações e te notifica quando há uma correspondência.",
  },
  {
    icon: CheckCircle,
    title: "Recupere seu item",
    description: "Nossa equipe de apoio ajuda a coordenar a devolução de forma segura.",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 text-balance">Como funciona?</h2>
            <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
              Em apenas 3 passos simples, você pode reportar itens perdidos ou encontrados e ajudar a comunidade
              universitária.
            </p>
          </div>

          {/* Steps grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="relative bg-card border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <CardContent className="p-8 text-center">
                  {/* Step number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-accent text-accent-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="bg-secondary/20 text-secondary p-4 rounded-2xl w-fit mx-auto mb-6 group-hover:bg-secondary/30 transition-colors duration-300">
                    <step.icon className="w-8 h-8" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
