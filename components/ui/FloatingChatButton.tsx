"use client";

import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";

interface WhatsAppShareButtonProps {
  url: string;
  text: string;
}

export function FloatingChatButton({
  url,
  text,
}: {
  url: string;
  text: string;
}) {
  const handleShare = () => {
    const message = `${text}\n\n${url}`;
    const encodedMessage = encodeURIComponent(message);

    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    let finalUrl;

    if (isMobile) {
      finalUrl = `whatsapp://send?text=${encodedMessage}`;
    } else {
      finalUrl = `https://web.whatsapp.com/send?text=${encodedMessage}`;
    }

    window.open(finalUrl, "_blank", "noopener,noreferrer");
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
