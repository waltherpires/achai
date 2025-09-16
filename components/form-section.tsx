import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function FormSection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-6">Vamos começar?</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Preencha o formulário abaixo e ajude a conectar estudantes!
            </p>
          </div>

          <Card className="shadow-lg border-2 border-primary/10">
            <CardHeader className="text-center bg-muted/30">
              <CardTitle className="text-2xl text-primary">Informe seu Achado</CardTitle>
              <CardDescription className="text-base">
                Encontrou algo no campus? Vamos ajudar a devolver para o dono!
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="item-type">Que tipo de item você encontrou?</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tipo de item" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="electronics">Eletrônicos (celular, fone, etc.)</SelectItem>
                    <SelectItem value="documents">Documentos (RG, carteirinha, etc.)</SelectItem>
                    <SelectItem value="clothing">Roupas e acessórios</SelectItem>
                    <SelectItem value="books">Livros e materiais</SelectItem>
                    <SelectItem value="keys">Chaves</SelectItem>
                    <SelectItem value="other">Outros</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Descreva o item encontrado</Label>
                <Textarea
                  id="description"
                  placeholder="Ex: Fone de ouvido preto da marca Sony, estava na mesa da biblioteca..."
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Onde você encontrou?</Label>
                <Input id="location" placeholder="Ex: Biblioteca central, 2º andar, mesa próxima à janela" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact">Seu contato (WhatsApp ou email)</Label>
                <Input id="contact" placeholder="Ex: (11) 99999-9999 ou seu.email@estudante.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="name">Seu nome (opcional)</Label>
                <Input id="name" placeholder="Como você gostaria de ser chamado?" />
              </div>

              <Button
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 text-lg rounded-xl"
                size="lg"
              >
                Enviar Achado 🎯
              </Button>

              <div className="text-center text-sm text-muted-foreground">
                <p>💜 Seus dados são usados apenas para conectar você com quem perdeu o item</p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-xl bg-transparent"
            >
              Perdeu algo? Clique aqui para procurar
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
