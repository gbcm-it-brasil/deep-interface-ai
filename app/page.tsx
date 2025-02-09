import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Github, DiscIcon as Discord } from "lucide-react"

export default function Home() {
  return (
   
   <>
   <div className="container mx-auto flex flex-col items-center justify-center h-screen">
    <span className="text-xl font-sans font-light">Bem-vindo ao Deep Interface AI</span> 
    <span className="text-xl font-sans font-light">ou para os mais intimos 🙂</span> 
   <Image className="my-8" src="home/logo.png" alt="logo" width={270} height={250} />
    <section className="py-20 text-center">
          <h2 className="text-4xl font-bold mb-8 text-metallic-blue-100">Junte-se ao Desenvolvimento</h2>
          <p className="text-xl text-metallic-blue-300 mb-12 max-w-2xl mx-auto">
            O Deep Interface AI está em fase inicial de desenvolvimento e estamos buscando colaboradores entusiastas.
            Sua experiência e ideias podem moldar o futuro desta plataforma inovadora.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button className="bg-metallic-blue-700 hover:bg-metallic-blue-600 text-white" asChild>
              <a href="https://github.com/gabcmelo/deep-interface-ai" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                Contribua no GitHub
              </a>
            </Button>
            <Button className="bg-metallic-blue-600 hover:bg-metallic-blue-500 text-white" asChild>
              <a href="https://discord.gg/3gZbCpeX3G" target="_blank" rel="noopener noreferrer">
                <Discord className="w-5 h-5 mr-2" />
                Junte-se ao Discord
              </a>
            </Button>
          </div>
        </section>
        <footer>
          <p className="text-center text-metallic-blue-300 text-sm">
            © 2025 GBCM. Todos os direitos reservados.
          </p>
        </footer>
   </div>
   </>
  );
}
