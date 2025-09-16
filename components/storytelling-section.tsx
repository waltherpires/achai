import Image from "next/image";

export function StorytellingSection() {
  return (
    <section className="bg-primary py-16 md:py-24 text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6">
            Como funciona? É simples!
          </h2>
          <p className="text-lg text-primary-foreground text-pretty">
            Em quatro passos simples, ajudamos você a recuperar seus itens
            perdidos
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-16">
          {/* Step 1: Perde - Image Left, Text Right */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 md:order-2 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4 text-primary-foreground">
                1. Você perde algo
              </h3>
              <p className="text-left md:text-lg text-primary-foreground leading-relaxed">
                João estava correndo para a aula e deixou seu fone de ouvido
                cair na biblioteca. Só percebeu quando chegou em casa... que
                desespero! Mas calma, o Achaí pode ajudar.
              </p>
            </div>
            <div className="flex-1 md:order-1">
              <div className="mx-auto bg-card rounded-2xl flex items-center justify-center border-4 border-primary/20">
                <Image
                  src="/images/story1.png"
                  alt="Aluno perdeu fone"
                  width={400}
                  height={300}
                />
              </div>
            </div>
          </div>

          {/* Step 2: Encontra - Text Left, Image Right */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 md:order-1 text-center md:text-right">
              <h3 className="text-2xl font-bold mb-4 text-primary-foreground">
                2. Informando a Perda
              </h3>
              <p className="text-left md:text-right md:text-lg text-primary-foreground leading-relaxed">
                Decidido a tentar recuperar seu fone, João acessou o site e
                preencheu um formulário simples, descrevendo o item perdido e
                onde achava que o havia deixado.
              </p>
            </div>
            <div className="flex-1 md:order-2">
              <div className="mx-auto bg-card rounded-2xl flex items-center justify-center border-4 border-primary/30">
                <Image
                  src="/images/story2.png"
                  alt="Aluno perdeu fone"
                  width={400}
                  height={300}
                />
              </div>
            </div>
          </div>

          {/* Step 3: Encontra - Text Left, Image Right */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 md:order-2 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4 text-primary-foreground">
                3. Alguém encontra e entrega
              </h3>
              <p className="text-left md:text-md text-primary-foreground leading-relaxed">
                Fernando viu o fone no chão da biblioteca. Como bom colega, ele
                entregou o item para a equipe de segurança nos achados e
                perdidos e reportou no Achaí.
              </p>
            </div>
            <div className="flex-1 md:order-1">
              <div className="mx-auto bg-card rounded-2xl flex items-center justify-center border-4 border-primary/30">
                <Image
                  src="/images/story3.png"
                  alt="Aluno perdeu fone"
                  width={400}
                  height={300}
                />
              </div>
            </div>
          </div>

          {/* Step 3: Conecta - Image Left, Text Right */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 md:order-1 text-center md:text-right">
              <h3 className="text-2xl font-bold mb-4 text-primary-foreground">
                4. Nós te avisamos!
              </h3>
              <p className="text-left md:text-right md:text-lg text-primary-foreground leading-relaxed">
                A equipe do Achaí vê o post do Fernando e avisa ao João que seu
                fone pode estar nos achados e perdidos da segurança. João vai lá
                e recupera seu item!
              </p>
            </div>
            <div className="flex-1 md:order-2">
              <div className="mx-auto bg-card rounded-2xl flex items-center justify-center border-4 border-primary/30">
                <Image
                  alt="Estudante encontra item perdido"
                  src="/images/story4.png"
                  width={400}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-8 py-4 rounded-full border border-primary/30">
            <span className="text-primary-foreground font-medium">
              💜 Simples assim! Solidariedade estudantil em ação
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
