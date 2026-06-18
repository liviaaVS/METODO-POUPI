import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Progress } from "@/components/ui/progress"
import type { POUPIFormData } from "@/lib/poupi-logic"

export default function Diagnostic() {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<POUPIFormData>({
    d1_1: false,
    d1_2: false,
    d2_1: false,
    d2_2: false,
    d3_1: false,
    d3_2: false,
    metrics: []
  })

  const totalSteps = 4
  const progress = (step / totalSteps) * 100

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1)
    else {
      navigate("/resultado", { state: { formData } })
    }
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const updateField = (field: keyof POUPIFormData, value: boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const toggleMetric = (metric: string) => {
    setFormData(prev => ({
      ...prev,
      metrics: prev.metrics.includes(metric)
        ? prev.metrics.filter(m => m !== metric)
        : [...prev.metrics, metric]
    }))
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Diagnóstico POUPI</h1>
        <p className="text-slate-500">Responda às questões baseadas no estado atual da sua aplicação.</p>
        <Progress value={progress} className="h-2" />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>
            {step === 1 && "Dimensão 1: Carga de Ativos e Mídia"}
            {step === 2 && "Dimensão 2: Dados e Complexidade de Renderização"}
            {step === 3 && "Dimensão 3: Navegação e Persistência em Rede"}
            {step === 4 && "Dimensão 4: Sintomas do Lighthouse"}
          </CardTitle>
          <CardDescription>
            {step === 1 && "Foco em carregamento inicial e tamanho do bundle."}
            {step === 2 && "Foco em eficiência de processamento e re-renderizações."}
            {step === 3 && "Foco em fluxo de dados e resiliência."}
            {step === 4 && "Selecione as métricas que apresentam alerta no Lighthouse."}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {step === 1 && (
            <div className="space-y-6">
              <div className="space-y-3">
                <Label>D1.1: A página depende criticamente de múltiplos ativos pesados (fotos HD, fontes não otimizadas)?</Label>
                <RadioGroup defaultValue={formData.d1_1 ? "sim" : "nao"} onValueChange={(v: string) => updateField("d1_1", v === "sim")}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="sim" id="d1_1_sim" />
                    <Label htmlFor="d1_1_sim">Sim</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="nao" id="d1_1_nao" />
                    <Label htmlFor="d1_1_nao">Não</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="space-y-3">
                <Label>D1.2: O tamanho total do bundle ultrapassa os limiares recomendados (e.g., redes 3G)?</Label>
                <RadioGroup defaultValue={formData.d1_2 ? "sim" : "nao"} onValueChange={(v: string) => updateField("d1_2", v === "sim")}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="sim" id="d1_2_sim" />
                    <Label htmlFor="d1_2_sim">Sim</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="nao" id="d1_2_nao" />
                    <Label htmlFor="d1_2_nao">Não</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="space-y-3">
                <Label>D2.1: A interface renderiza volumes massivos de dados simultaneamente (tabelas &gt; 100 registros)?</Label>
                <RadioGroup defaultValue={formData.d2_1 ? "sim" : "nao"} onValueChange={(v: string) => updateField("d2_1", v === "sim")}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="sim" id="d2_1_sim" />
                    <Label htmlFor="d2_1_sim">Sim</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="nao" id="d2_1_nao" />
                    <Label htmlFor="d2_1_nao">Não</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="space-y-3">
                <Label>D2.2: Há acoplamento severo a estados globais que propagam re-renderizações em cascata?</Label>
                <RadioGroup defaultValue={formData.d2_2 ? "sim" : "nao"} onValueChange={(v: string) => updateField("d2_2", v === "sim")}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="sim" id="d2_2_sim" />
                    <Label htmlFor="d2_2_sim">Sim</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="nao" id="d2_2_nao" />
                    <Label htmlFor="d2_2_nao">Não</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div className="space-y-3">
                <Label>D3.1: O fluxo possui requisições repetitivas ou redundantes aos mesmos endpoints na mesma sessão?</Label>
                <RadioGroup defaultValue={formData.d3_1 ? "sim" : "nao"} onValueChange={(v: string) => updateField("d3_1", v === "sim")}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="sim" id="d3_1_sim" />
                    <Label htmlFor="d3_1_sim">Sim</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="nao" id="d3_1_nao" />
                    <Label htmlFor="d3_1_nao">Não</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="space-y-3">
                <Label>D3.2: O negócio exige resiliência a oscilações de rede ou persistência temporária local?</Label>
                <RadioGroup defaultValue={formData.d3_2 ? "sim" : "nao"} onValueChange={(v: string) => updateField("d3_2", v === "sim")}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="sim" id="d3_2_sim" />
                    <Label htmlFor="d3_2_sim">Sim</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="nao" id="d3_2_nao" />
                    <Label htmlFor="d3_2_nao">Não</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="metric-si" checked={formData.metrics.includes("SI")} onCheckedChange={() => toggleMetric("SI")} />
                <Label htmlFor="metric-si">Speed Index (SI) / Total Blocking Time (TBT)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="metric-lcp" checked={formData.metrics.includes("LCP")} onCheckedChange={() => toggleMetric("LCP")} />
                <Label htmlFor="metric-lcp">Largest Contentful Paint (LCP) / First Contentful Paint (FCP)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="metric-cls" checked={formData.metrics.includes("CLS")} onCheckedChange={() => toggleMetric("CLS")} />
                <Label htmlFor="metric-cls">Cumulative Layout Shift (CLS)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="metric-score" checked={formData.metrics.includes("Score")} onCheckedChange={() => toggleMetric("Score")} />
                <Label htmlFor="metric-score">Pontuação de Performance Geral degradada</Label>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between border-t pt-6">
          <Button variant="outline" onClick={handleBack} disabled={step === 1}>Voltar</Button>
          <Button onClick={handleNext}>
            {step === totalSteps ? "Ver Resultado" : "Próximo"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
