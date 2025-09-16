import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  Filter,
  Download,
  DollarSign,
  CreditCard,
  Clock,
  CheckCircle,
  XCircle,
  TrendingUp,
  Calendar
} from 'lucide-react';

export default function Pagamentos() {
  const payments = [
    {
      id: 1,
      client: 'Maria Silva',
      service: 'Corte + Escova',
      amount: 'R$ 150,00',
      date: '2024-01-15',
      time: '09:00',
      method: 'Cartão de Crédito',
      status: 'pago',
      transactionId: 'TXN-001234'
    },
    {
      id: 2,
      client: 'João Santos',
      service: 'Barba + Bigode',
      amount: 'R$ 80,00',
      date: '2024-01-15',
      time: '10:30',
      method: 'PIX',
      status: 'pago',
      transactionId: 'TXN-001235'
    },
    {
      id: 3,
      client: 'Ana Costa',
      service: 'Coloração Completa',
      amount: 'R$ 280,00',
      date: '2024-01-15',
      time: '14:00',
      method: 'Dinheiro',
      status: 'pendente',
      transactionId: 'TXN-001236'
    },
    {
      id: 4,
      client: 'Pedro Oliveira',
      service: 'Corte Masculino',
      amount: 'R$ 100,00',
      date: '2024-01-14',
      time: '16:00',
      method: 'Cartão de Débito',
      status: 'pago',
      transactionId: 'TXN-001237'
    },
    {
      id: 5,
      client: 'Carla Mendes',
      service: 'Tratamento Capilar',
      amount: 'R$ 200,00',
      date: '2024-01-14',
      time: '11:00',
      method: 'PIX',
      status: 'cancelado',
      transactionId: 'TXN-001238'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pago':
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
            <CheckCircle className="h-3 w-3 mr-1" />
            Pago
          </Badge>
        );
      case 'pendente':
        return (
          <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
            <Clock className="h-3 w-3 mr-1" />
            Pendente
          </Badge>
        );
      case 'cancelado':
        return (
          <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
            <XCircle className="h-3 w-3 mr-1" />
            Cancelado
          </Badge>
        );
      default:
        return <Badge variant="outline">Desconhecido</Badge>;
    }
  };

  const getMethodBadge = (method: string) => {
    const colors = {
      'PIX': 'bg-blue-100 text-blue-800',
      'Cartão de Crédito': 'bg-purple-100 text-purple-800',
      'Cartão de Débito': 'bg-indigo-100 text-indigo-800',
      'Dinheiro': 'bg-green-100 text-green-800',
    };
    
    return (
      <Badge className={colors[method as keyof typeof colors] || 'bg-gray-100 text-gray-800'}>
        {method}
      </Badge>
    );
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Pagamentos</h1>
          <p className="text-muted-foreground mt-2">
            Controle financeiro e histórico de pagamentos
          </p>
        </div>
        <Button variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Exportar Relatório
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-green-800">Recebido Hoje</p>
              <p className="text-2xl font-bold text-green-900 mt-2">R$ 1.250,00</p>
              <div className="flex items-center mt-2">
                <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-sm text-green-600">+12.5%</span>
              </div>
            </div>
            <DollarSign className="h-8 w-8 text-green-600" />
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-blue-800">Recebido no Mês</p>
              <p className="text-2xl font-bold text-blue-900 mt-2">R$ 18.420,00</p>
              <div className="flex items-center mt-2">
                <TrendingUp className="h-4 w-4 text-blue-600 mr-1" />
                <span className="text-sm text-blue-600">+8.2%</span>
              </div>
            </div>
            <Calendar className="h-8 w-8 text-blue-600" />
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-yellow-50 to-amber-50 border-yellow-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-yellow-800">Pagamentos Pendentes</p>
              <p className="text-2xl font-bold text-yellow-900 mt-2">R$ 480,00</p>
              <div className="flex items-center mt-2">
                <Clock className="h-4 w-4 text-yellow-600 mr-1" />
                <span className="text-sm text-yellow-600">3 pagamentos</span>
              </div>
            </div>
            <Clock className="h-8 w-8 text-yellow-600" />
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-purple-800">Método Preferido</p>
              <p className="text-lg font-bold text-purple-900 mt-2">PIX</p>
              <div className="flex items-center mt-2">
                <CreditCard className="h-4 w-4 text-purple-600 mr-1" />
                <span className="text-sm text-purple-600">45% do total</span>
              </div>
            </div>
            <CreditCard className="h-8 w-8 text-purple-600" />
          </div>
        </Card>
      </div>

      {/* Métodos de Pagamento */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 shadow-[var(--shadow-medium)]">
          <h3 className="text-lg font-semibold mb-4">Métodos de Pagamento</h3>
          <div className="space-y-3">
            {[
              { method: 'PIX', percentage: 45, amount: 'R$ 8.289,00' },
              { method: 'Cartão de Crédito', percentage: 30, amount: 'R$ 5.526,00' },
              { method: 'Cartão de Débito', percentage: 15, amount: 'R$ 2.763,00' },
              { method: 'Dinheiro', percentage: 10, amount: 'R$ 1.842,00' }
            ].map((item) => (
              <div key={item.method} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {getMethodBadge(item.method)}
                  <span className="text-sm text-muted-foreground">{item.percentage}%</span>
                </div>
                <span className="font-medium text-foreground">{item.amount}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 shadow-[var(--shadow-medium)]">
          <h3 className="text-lg font-semibold mb-4">Resumo por Status</h3>
          <div className="space-y-4">
            <div className="p-3 rounded-lg bg-green-50 border border-green-200">
              <div className="flex items-center justify-between">
                <span className="text-green-800 font-medium">Pagamentos Confirmados</span>
                <span className="text-green-900 font-bold">R$ 17.940,00</span>
              </div>
              <div className="text-sm text-green-600 mt-1">142 transações</div>
            </div>
            
            <div className="p-3 rounded-lg bg-yellow-50 border border-yellow-200">
              <div className="flex items-center justify-between">
                <span className="text-yellow-800 font-medium">Pagamentos Pendentes</span>
                <span className="text-yellow-900 font-bold">R$ 480,00</span>
              </div>
              <div className="text-sm text-yellow-600 mt-1">3 transações</div>
            </div>
            
            <div className="p-3 rounded-lg bg-red-50 border border-red-200">
              <div className="flex items-center justify-between">
                <span className="text-red-800 font-medium">Pagamentos Cancelados</span>
                <span className="text-red-900 font-bold">R$ 120,00</span>
              </div>
              <div className="text-sm text-red-600 mt-1">2 transações</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Filtros e Busca */}
      <Card className="p-6 shadow-[var(--shadow-medium)]">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar por cliente, serviço ou ID da transação..."
                className="pl-9"
              />
            </div>
          </div>
          
          <div className="flex gap-2">
            <Input type="date" className="w-auto" />
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filtros
            </Button>
          </div>
        </div>
      </Card>

      {/* Lista de Pagamentos */}
      <Card className="shadow-[var(--shadow-medium)]">
        <div className="p-6 border-b border-border">
          <h2 className="text-xl font-semibold">Histórico de Pagamentos</h2>
        </div>
        
        <div className="divide-y divide-border">
          {payments.map((payment) => (
            <div key={payment.id} className="p-6 hover:bg-accent/20 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="text-center min-w-[100px]">
                    <div className="text-sm font-medium text-foreground">
                      {new Date(payment.date).toLocaleDateString('pt-BR')}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {payment.time}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-medium text-foreground">
                        {payment.client}
                      </h3>
                      {getStatusBadge(payment.status)}
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {payment.service}
                    </p>
                    <div className="flex items-center gap-2">
                      {getMethodBadge(payment.method)}
                      <span className="text-xs text-muted-foreground">
                        ID: {payment.transactionId}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-xl font-bold text-foreground">
                    {payment.amount}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}