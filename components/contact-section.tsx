"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export function ContactSection() {
  const [status, setStatus] = useState("Enviar Mensagem");

  const recipientEmail = process.env.NEXT_PUBLIC_RECIPIENT_EMAIL;
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("Enviando...");
    const form = event.currentTarget;
    const data = new FormData(form);
    
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setStatus("Enviada com sucesso!");
        form.reset();
        setTimeout(() => setStatus("Enviar Mensagem"), 3000);
      } else {
        setStatus("Erro. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro no envio do formulário:", error);
      setStatus("Erro. Tente novamente.");
    }
  };

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
              o projeto? Mande uma mensagem pra gente!
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            <div className="bg-card border rounded-lg p-6 md:p-8">
              <form
                action={`https://formsubmit.co/${recipientEmail}`}
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div>
                  <Label htmlFor="name">Nome</Label>
                  <Input type="text" name="name" id="name" required />
                </div>
                <div>
                  <Label htmlFor="email">Seu E-mail</Label>
                  <Input type="email" name="email" id="email" required />
                </div>
                <div>
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea name="message" id="message" rows={5} required />
                </div>
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://achai-mu.vercel.app/obrigado" />
                <input type="hidden" name="_subject" value="Nova mensagem do site Achaí!" />
                <input type="text" name="_honey" style={{ display: "none" }} />
                
                <Button type="submit" className="w-full">
                  {status}
                </Button>
              </form>
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