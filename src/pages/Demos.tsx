import { useState, memo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Zap, AlertCircle } from "lucide-react"

// A heavy component that simulates complex rendering
const HeavyItem = ({ index, color }: { index: number; color: string }) => {
  // Artificial delay to simulate heavy rendering
  const startTime = performance.now();
  while (performance.now() - startTime < 1) {
    // block for 1ms
  }

  return (
    <div className="p-2 border rounded text-xs flex justify-between items-center bg-white">
      <span>Item #{index}</span>
      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }}></div>
    </div>
  );
};

// Memoized version
const MemoizedHeavyItem = memo(HeavyItem);

export default function Demos() {
  const [count, setCount] = useState(0);
  const [items] = useState(() => Array.from({ length: 200 }, (_, i) => i));
  const [color, setColor] = useState("#3b82f6");

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Demonstrações Didáticas</h1>
        <p className="text-slate-500">Experimente os conceitos da metodologia POUPI na prática.</p>
      </div>

      <Tabs defaultValue="esfera2" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="esfera2">Esfera 2: Renderização</TabsTrigger>
          <TabsTrigger value="esfera1">Esfera 1 & 3: Conceitos</TabsTrigger>
        </TabsList>

        <TabsContent value="esfera2" className="space-y-6 pt-6">
          <Card>
            <CardHeader>
              <CardTitle>Otimização de Renderização (Memoização)</CardTitle>
              <CardDescription>
                Mova o slider ou clique no contador. Observe como a interface se comporta em cada cenário.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="flex flex-wrap gap-4 items-center justify-between p-4 bg-slate-50 rounded-lg">
                <div className="space-y-2">
                  <p className="text-sm font-medium">Contador de Estado Irrelevante: {count}</p>
                  <Button onClick={() => setCount(prev => prev + 1)} size="sm">Incrementar</Button>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Alterar Cor dos Itens:</p>
                  <input
                    type="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className="h-8 w-16"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge variant="destructive" className="flex gap-1">
                      <AlertCircle className="h-3 w-3" />
                      Sem POUPI
                    </Badge>
                    <span className="text-xs text-slate-500">Toda a lista re-renderiza sempre</span>
                  </div>
                  <div className="h-64 overflow-y-auto border rounded-md p-2 grid grid-cols-2 gap-1 bg-slate-100">
                    {items.map(i => (
                      <HeavyItem key={i} index={i} color={color} />
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge variant="default" className="flex gap-1 bg-green-600">
                      <Zap className="h-3 w-3" />
                      Com POUPI (memo)
                    </Badge>
                    <span className="text-xs text-slate-500">Somente re-renderiza se a cor mudar</span>
                  </div>
                  <div className="h-64 overflow-y-auto border rounded-md p-2 grid grid-cols-2 gap-1 bg-slate-100">
                    {items.map(i => (
                      <MemoizedHeavyItem key={i} index={i} color={color} />
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h4 className="font-bold text-blue-900 text-sm mb-1">O que observar?</h4>
                <p className="text-xs text-blue-800 leading-relaxed">
                  Ao clicar em "Incrementar", o estado da página muda. Na lista **Sem POUPI**, todos os 200 itens "pesados" são re-processados, causando um leve atraso (jank). Na lista **Com POUPI**, o React percebe que as propriedades dos itens não mudaram e pula o processamento, mantendo a interface fluida.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="esfera1" className="space-y-6 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <Card>
               <CardHeader>
                 <CardTitle className="text-lg">Esfera 1: Code Splitting</CardTitle>
               </CardHeader>
               <CardContent className="space-y-4">
                 <p className="text-sm text-slate-600">Otimizar o build significa não enviar código que o usuário não vai usar agora.</p>
                 <pre className="bg-slate-900 text-slate-50 p-3 rounded text-[10px] overflow-x-auto">
{`// Antes: Bundle único gigante
import HugeDashboard from './Dashboard';

// Depois: Carregamento sob demanda
const HugeDashboard = React.lazy(
  () => import('./Dashboard')
);

return (
  <Suspense fallback={<Loading />}>
    <HugeDashboard />
  </Suspense>
);`}
                 </pre>
               </CardContent>
             </Card>

             <Card>
               <CardHeader>
                 <CardTitle className="text-lg">Esfera 3: Cache de Dados</CardTitle>
               </CardHeader>
               <CardContent className="space-y-4">
                 <p className="text-sm text-slate-600">Reduzir latência significa reaproveitar o que já foi buscado.</p>
                 <pre className="bg-slate-900 text-slate-50 p-3 rounded text-[10px] overflow-x-auto">
{`// Com TanStack Query (POUPI Esfera 3)
const { data } = useQuery({
  queryKey: ['user-profile'],
  queryFn: fetchUser,
  staleTime: 1000 * 60 * 5, // 5 min
});

// O dado é exibido instantaneamente
// se já estiver no cache!`}
                 </pre>
               </CardContent>
             </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
