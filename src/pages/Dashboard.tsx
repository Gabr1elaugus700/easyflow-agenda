import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Calendar, 
  Users, 
  DollarSign, 
  TrendingUp,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle
} from 'lucide-react';

export default function Dashboard() {
  const stats = [
    {
      title: 'Agendamentos Hoje',
      value: '12',
      change: '+2.1%',
      changeType: 'positive' as const,
      icon: Calendar,
      color: 'text-blue-600'
    },
    {
      title: 'Clientes Ativos',
      value: '248',
      change: '+12.5%',
      changeType: 'positive' as const,
      icon: Users,
      color: 'text-green-600'
    },
    {
      title: 'Faturamento Mensal',
      value: 'R$ 18.420',
      change: '+8.2%',
      changeType: 'positive' as const,
      icon: DollarSign,
      color: 'text-purple-600'
    },
    {
      title: 'Taxa de Conversão',
      value: '94.2%',
      change: '+1.2%',
      changeType: 'positive' as const,
      icon: TrendingUp,
      color: 'text-emerald-600'
    }
  ];

  const upcomingAppointments = [
    {
      id: 1,
      client: 'Maria Silva',
      service: 'Corte + Escova',
      time: '09:00',
      status: 'confirmado',
      duration: '1h'
    },
    {
      id: 2,
      client: 'João Santos',
      service: 'Barba + Bigode',
      time: '10:30',
      status: 'pendente',
      duration: '45min'
    },
    {
      id: 3,
      client: 'Ana Costa',
      service: 'Coloração',
      time: '14:00',
      status: 'confirmado',
      duration: '2h'
    },
    {
      id: 4,
      client: 'Pedro Oliveira',
      service: 'Corte Masculino',
      time: '16:00',
      status: 'reagendado',
      duration: '30min'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmado':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'pendente':
        return <Clock className="h-4 w-4 text-yellow-600" />;
      case 'reagendado':
        return <AlertCircle className="h-4 w-4 text-blue-600" />;
      case 'cancelado':
        return <XCircle className="h-4 w-4 text-red-600" />;
      default:
        return <Clock className="h-4 w-4 text-gray-600" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'confirmado':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Confirmado</Badge>;
      case 'pendente':
        return <Badge variant="outline" className="border-yellow-300 text-yellow-700">Pendente</Badge>;
      case 'reagendado':
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Reagendado</Badge>;
      case 'cancelado':
        return <Badge variant="destructive">Cancelado</Badge>;
      default:
        return <Badge variant="outline">Desconhecido</Badge>;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          Visão geral dos seus agendamentos e negócios
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="p-6 bg-gradient-to-br from-card to-accent/20 border-0 shadow-[var(--shadow-medium)]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold text-foreground mt-2">
                    {stat.value}
                  </p>
                  <div className="flex items-center mt-2">
                    <span className="text-sm font-medium text-green-600">
                      {stat.change}
                    </span>
                    <span className="text-sm text-muted-foreground ml-2">
                      vs mês anterior
                    </span>
                  </div>
                </div>
                <div className={`p-3 rounded-full bg-background/50 ${stat.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Próximos Agendamentos */}
        <Card className="p-6 shadow-[var(--shadow-medium)]">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-foreground">
              Próximos Agendamentos
            </h2>
            <Button variant="outline" size="sm">
              Ver todos
            </Button>
          </div>
          
          <div className="space-y-4">
            {upcomingAppointments.map((appointment) => (
              <div
                key={appointment.id}
                className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-accent/50 to-accent/20 border border-border/50"
              >
                <div className="flex items-center space-x-4">
                  {getStatusIcon(appointment.status)}
                  <div>
                    <p className="font-medium text-foreground">
                      {appointment.client}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {appointment.service}
                    </p>
                  </div>
                </div>
                
                <div className="text-right">
                  <p className="text-sm font-medium text-foreground">
                    {appointment.time}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {appointment.duration}
                  </p>
                </div>
                
                <div>
                  {getStatusBadge(appointment.status)}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Resumo Financeiro */}
        <Card className="p-6 shadow-[var(--shadow-medium)]">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-foreground">
              Resumo Financeiro
            </h2>
            <Button variant="outline" size="sm">
              Relatório
            </Button>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-green-800">
                    Recebido Hoje
                  </p>
                  <p className="text-2xl font-bold text-green-900 mt-1">
                    R$ 1.250,00
                  </p>
                </div>
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
            </div>
            
            <div className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-blue-800">
                    Pendente
                  </p>
                  <p className="text-2xl font-bold text-blue-900 mt-1">
                    R$ 480,00
                  </p>
                </div>
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            
            <div className="p-4 rounded-lg bg-gradient-to-r from-purple-50 to-violet-50 border border-purple-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-purple-800">
                    Meta Mensal
                  </p>
                  <div className="flex items-center mt-1">
                    <p className="text-lg font-bold text-purple-900">
                      R$ 18.420 / R$ 20.000
                    </p>
                  </div>
                  <div className="w-full bg-purple-200 rounded-full h-2 mt-2">
                    <div 
                      className="bg-purple-600 h-2 rounded-full" 
                      style={{ width: '92.1%' }}
                    ></div>
                  </div>
                </div>
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}