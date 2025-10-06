// app/obrigado/page.tsx

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function ObrigadoPage() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-muted/30 p-4">
      <Card className="w-full max-w-md text-center shadow-lg">
        <CardHeader>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          <CardTitle className="mt-4 text-2xl font-bold">
            Mensagem Enviada!
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-muted-foreground">
            Obrigado por entrar em contato. Sua mensagem foi recebida com sucesso!
            Nossa equipe de estudantes responderá o mais breve possível.
          </p>
          <Button asChild className="w-full">
            <Link href="/">
              Voltar para a Página Inicial
            </Link>
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}