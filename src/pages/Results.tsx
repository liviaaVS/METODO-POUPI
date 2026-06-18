import { useLocation, Link, Navigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { calculatePOUPIMapping } from "@/lib/poupi-logic"
import type { POUPIFormData } from "@/lib/poupi-logic"
import { CheckCircle2, AlertTriangle, ArrowLeft, Lightbulb } from "lucide-react"

export default function Results() {
  const location = useLocation()
  const formData = location.state?.formData as POUPIFormData

  if (!formData) {
    return <Navigate to="/diagnostico" replace />
  }

  const result = calculatePOUPIMapping(formData)

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Seu Direcionamento Metodológico</h1>
        <Button variant="outline" size="sm" asChild>
          <Link to="/diagnostico">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Refazer Teste
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="md:col-span-2 border-primary/20 bg-primary/5">
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="default" className="bg-primary">{result.group}</Badge>
            </div>
            <CardTitle className="text-2xl">{result.targetSphere}</CardTitle>
            <CardDescription className="text-slate-700 text-lg">
              {result.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <h3 className="font-bold flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                Técnicas Recomendadas
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {result.techniques.map((tech, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600 bg-white p-2 rounded border">
                    <span className="text-primary font-bold">•</span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg space-y-2">
              <h3 className="font-bold flex items-center gap-2 text-amber-800">
                <AlertTriangle className="h-5 w-5" />
                Trade-offs de Engenharia
              </h3>
              <p className="text-sm text-amber-900 leading-relaxed">
                {result.tradeoffs}
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Métricas Críticas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {result.criticalMetrics.map((m, i) => (
                  <Badge key={i} variant="outline" className="bg-slate-100">{m}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-blue-50 border-blue-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm flex items-center gap-2 text-blue-800">
                <Lightbulb className="h-4 w-4" />
                Dica Didática
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-blue-900">
                A aplicação estruturada da metodologia POUPI visa reduzir o "trabalho desnecessário" na interface. Comece sempre pela esfera de maior impacto identificada no diagnóstico.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
