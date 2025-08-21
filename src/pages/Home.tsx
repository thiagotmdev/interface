import { CreditCard, List, TrendingUp, Wallet } from "lucide-react";
import type { JSX } from "react";
import Button from "../components/Button";

interface Features {
  icon: JSX.Element;
  title: string;
  description: string;
}

const Home = () => {
  const features: ReadonlyArray<Features> = [
    {
      icon: <Wallet className="w-8 h-8 text-primary-500" />,
      title: "Controle Financeiro",
      description:
        "Monitore suas despesas e receitas em um só lugar, comuma interface intuitiva e fácil de usar.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary-500" />,
      title: "Relatórios",
      description: "Visualize graficamente seus gastos e entenda para onde seu dinheiro está indo.",
    },
    {
      icon: <List className="w-8 h-8 text-primary-500" />,
      title: "Categorias Personalizadas",
      description: "Organize suas transações em categorias para melhor análise.",
    },
    {
      icon: <CreditCard className="w-8 h-8 text-primary-500" />,
      title: "Transações Ilimitadas",
      description:
        "Adicione quantas transações quiser e mantenha um histórico completo de suas finanças.",
    },
  ];

  return (
    <div className="bg-gray-950 min-h-screen">
      <div className="container-app">
        <section className="py-12 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Gerencie suas finanças com o <span className="text-primary-500">DevBills</span>
              </h1>
              <p className="text-lg text-white mb-8">
                Uma plataforma simples e eficiente para controlar suas despesas e receitas. Organize
                suas finanças pessoais ou do seu negócio com facilidade.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="text-center px-6 py-3">Começar Agora</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-gray-900 rounded-xl">
          <div className="container-app">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Recursos do DevBills</h2>
              <p className="text-lg text-white max-w-2xl mx-auto">
                Nossa plataforma oferece tudo o que você precisa para manter suas finanças
                organizadas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature) => (
                <div key={feature.title} className="bg-gray-800 p-6 rounder-xl hover:shadow-lg">
                  <div className="mb-4 bg-primary-500/10 p-3 rounded-full inline-block">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
