import { Button } from "@/components/ui/button"
import { Mail, MessageCircle, Users } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Fale com a gente!</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Somos estudantes como você. Tem dúvidas, sugestões ou quer ajudar o projeto? Entre em contato!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-sm text-muted-foreground mb-4">Para dúvidas gerais e sugestões</p>
              <Button variant="outline" size="sm" asChild>
                <a href="mailto:contato@achai.com">contato@achai.com</a>
              </Button>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                <MessageCircle className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">WhatsApp</h3>
              <p className="text-sm text-muted-foreground mb-4">Para contato mais rápido</p>
              <Button variant="outline" size="sm" asChild>
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                  Chamar no WhatsApp
                </a>
              </Button>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">Quer ajudar?</h3>
              <p className="text-sm text-muted-foreground mb-4">Junte-se ao time do Achaí</p>
              <Button variant="outline" size="sm" asChild>
                <a href="mailto:time@achai.com">Quero participar</a>
              </Button>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 bg-card px-6 py-3 rounded-full border">
              <span className="text-sm text-muted-foreground">💜 Feito por estudantes, para estudantes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
