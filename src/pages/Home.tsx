import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from "react-router-dom"
import { Zap, Layout, Database, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center space-y-4 py-12">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900">
          Domine a Performance com <span className="text-primary">POUPI</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Programação Orientada à Performance em Interfaces Usuário. Uma metodologia estruturada em três esferas para aplicações React escaláveis e velozes.
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <Button asChild size="lg" className="px-8">
            <Link to="/diagnostico">Iniciar Diagnóstico</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/demonstracoes">Ver Demos</Link>
          </Button>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="relative overflow-hidden group hover:border-primary transition-colors">
          <CardHeader>
            <Zap className="h-10 w-10 text-yellow-500 mb-2" />
            <CardTitle>Esfera 1</CardTitle>
            <CardDescription>Build e Carga</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm text-slate-600">
              Otimize o volume de recursos e o carregamento inicial. Foco em Code Splitting, compressão e Lazy Loading.
            </p>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden group hover:border-primary transition-colors">
          <CardHeader>
            <Layout className="h-10 w-10 text-blue-500 mb-2" />
            <CardTitle>Esfera 2</CardTitle>
            <CardDescription>Renderização Eficiente</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm text-slate-600">
              Reduza re-renderizações desnecessárias e poupe CPU. Foco em Memoização, Virtualização e Fragmentação de Estado.
            </p>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden group hover:border-primary transition-colors">
          <CardHeader>
            <Database className="h-10 w-10 text-green-500 mb-2" />
            <CardTitle>Esfera 3</CardTitle>
            <CardDescription>Cache e Dados</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm text-slate-600">
              Aumente a resiliência e reduza latência. Foco em estratégias Stale-While-Revalidate, LocalStorage e Service Workers.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="bg-white p-8 rounded-2xl border space-y-6">
        <h2 className="text-3xl font-bold text-slate-900">Como funciona o processo?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-center">
          <div className="text-center p-4">
            <div className="bg-slate-100 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-2 font-bold">1</div>
            <p className="text-sm font-semibold">Diagnosticar</p>
            <p className="text-xs text-slate-500">Avalie sua aplicação com o formulário POUPI.</p>
          </div>
          <ArrowRight className="hidden sm:block text-slate-300 h-6 w-6 mx-auto" />
          <div className="text-center p-4">
            <div className="bg-slate-100 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-2 font-bold">2</div>
            <p className="text-sm font-semibold">Mapear</p>
            <p className="text-xs text-slate-500">Identifique seu perfil (Data-Heavy, Content-Centric, etc).</p>
          </div>
          <ArrowRight className="hidden sm:block text-slate-300 h-6 w-6 mx-auto" />
          <div className="text-center p-4">
            <div className="bg-slate-100 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-2 font-bold">3</div>
            <p className="text-sm font-semibold">Intervir</p>
            <p className="text-xs text-slate-500">Aplique as técnicas sugeridas para a esfera prioritária.</p>
          </div>
          <ArrowRight className="hidden sm:block text-slate-300 h-6 w-6 mx-auto" />
          <div className="text-center p-4">
            <div className="bg-primary text-white h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-2 font-bold">4</div>
            <p className="text-sm font-semibold">Validar</p>
            <p className="text-xs text-slate-500">Meça os ganhos com Lighthouse e RUM.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
