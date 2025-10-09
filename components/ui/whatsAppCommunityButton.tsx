"use client";

import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import * as gtag from "@/lib/gtag";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

interface WhatsAppCommunityButtonProps {
  communityUrl: string;
}

export function WhatsAppCommunityButton({
  communityUrl,
}: WhatsAppCommunityButtonProps) {
  const handleClick = () => {
    gtag.event({
      action: "click",
      category: "Comunidade",
      label: "Botão de Entrar na Comunidade WhatsApp",
      value: 1,
    });

    window.open(communityUrl, "_blank");
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            onClick={handleClick}
            className="flex fixed bottom-6 right-6 rounded-4xl shadow-lg z-50            
        transition-transform duration-200 ease-in-out hover:scale-110 bg-lime-500 hover:bg-lime-600"
          >
            <FaWhatsapp />
            <span className="text-xs px-0">Comunidade</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="top" className="bg-lime-600">
          <p>
            Entre na nossa comunidade. Assim fica fácil de nos encontrar de
            novo.
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
