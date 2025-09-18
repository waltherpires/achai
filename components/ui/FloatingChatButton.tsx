"use client";

import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";

export function FloatingChatButton({ url, title, text }: { url: string; title: string; text: string; }) {
  const handleShare = async () => {
    const shareData = {
      title: title,
      text: text,
      url: url,
    };

    // 1. Tenta usar a Web Share API (o método moderno)
    if (navigator.share) {
      try {
        await navigator.share(shareData);
        console.log("Conteúdo compartilhado com sucesso!");
      } catch (err) {
        // O erro mais comum é o usuário fechar a caixa de compartilhamento.
        console.error("Erro ao compartilhar:", err);
      }
    } else {
      // 2. Fallback: Se a API não existir, usa o link direto do WhatsApp
      console.log("Web Share API não suportada, usando fallback do WhatsApp.");
      const message = `${text}\n\n${url}`;
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `whatsapp://send?text=${encodedMessage}`;
      
      window.location.href = whatsappUrl;
    }
  };

  return (
    <Button
      onClick={handleShare}
      className="flex fixed bottom-6 right-6 rounded-4xl shadow-lg z-50            
        transition-transform duration-200 ease-in-out hover:scale-110 bg-lime-500 hover:bg-lime-600"
    >
      <FaWhatsapp />
      <span className="text-xs">Compartilhar</span>
    </Button>
  );
}
