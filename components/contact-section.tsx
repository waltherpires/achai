// components/ContactSection.jsx

import { Button } from "@/components/ui/button";
import { QrCode, Mail, Instagram } from "lucide-react"; // Usando ícones do Lucide para consistência
import Image from "next/image";

export function ContactSection() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">
              Fale com a gente!
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Somos estudantes como você. Tem dúvidas, sugestões ou quer ajudar
              o projeto? Entre em contato!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="order-1 sm:order-0 bg-card border rounded-lg p-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 text-lg">Email</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-grow">
                Para dúvidas gerais e sugestões
              </p>
              <Button variant="outline" size="sm" asChild>
                <a href="mailto:contato@achai.com">contato@achai.com</a>
              </Button>
            </div>

            <div className="bg-card border rounded-lg p-8 text-center flex flex-col items-center justify-between">
              <div className="bg-white p-2 rounded-md border mb-4">
                <Image
                  src="/images/qr-code-validacao.jpeg"
                  alt="QR code de validacao"
                  width={150}
                  height={150}
                  className="rounded-sm"
                />
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-lg">
                  Valide nossa ideia
                </h3>
                <p className="text-sm text-muted-foreground flex-grow mb-4">
                  Nos ajude a validar e melhorar nossa ideia
                </p>
              </div>
              <Button variant="outline" size="sm" asChild>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSel5G-FFqZqbxEuKATydCoRZdatsQhMpqMiVq_yPslKbscq5g/viewform"
                  target="_blank"
                >
                  responder formulário
                </a>
              </Button>
            </div>

            <div className="bg-card border rounded-lg p-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Instagram className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 text-lg">Instagram</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-grow">
                Para contato mais rápido
              </p>
              <Button variant="outline" size="sm" asChild>
                <a
                  href="URL_DO_SEU_INSTAGRAM"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chamar no Instagram
                </a>
              </Button>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 bg-card px-6 py-3 rounded-full border">
              <Image
                src="/images/logo-bussola.png"
                alt="logo-bussoola"
                width={50}
                height={50}
              />
              <span className="text-sm text-muted-foreground">
                Feito por estudantes, para estudantes
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
