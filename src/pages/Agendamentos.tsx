import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Plus, 
  Calendar, 
  Clock, 
  Search, 
  Filter,
  MoreHorizontal,
  Edit,
  Trash2,
  CheckCircle,
  XCircle,
  AlertCircle
} from 'lucide-react';

export default function Agendamentos() {
  const [selectedDate, setSelectedDate] = useState('2024-01-15');
  const [showNewAppointment, setShowNewAppointment] = useState(false);

  const appointments = [
    {
      id: 1,
      time: '09:00',
      duration: '1h',
      client: 'Maria Silva',
      service: 'Corte + Escova',
      price: 'R$ 150,00',
      status: 'confirmado',
      notes: 'Cliente prefere água morna'
    },
    {
      id: 2,
      time: '10:30',
      duration: '45min',
      client: 'João Santos',
      service: 'Barba + Bigode',
      price: 'R$ 80,00',
      status: 'pendente',
      notes: ''
    },
    {
      id: 3,
      time: '12:00',
      duration: '30min',
      client: 'Ana Costa',
      service: 'Corte Simples',
      price: 'R$ 100,00',
      status: 'confirmado',
      notes: 'Aniversariante - desconto aplicado'
    },
    {
      id: 4,
      time: '14:00',
      duration: '2h',
      client: 'Pedro Oliveira',
      service: 'Coloração Completa',
      price: 'R$ 280,00',
      status: 'reagendado',
      notes: 'Reagendado para próxima semana'
    },
    {
      id: 5,
      time: '16:00',
      duration: '1h',
      client: 'Carla Mendes',
      service: 'Tratamento Capilar',
      price: 'R$ 200,00',
      status: 'confirmado',
      notes: ''
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmado':
        return 'bg-green-100 text-green-800 hover:bg-green-100';
      case 'pendente':
        return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100';
      case 'reagendado':
        return 'bg-blue-100 text-blue-800 hover:bg-blue-100';
      case 'cancelado':
        return 'bg-red-100 text-red-800 hover:bg-red-100';
      default:
        return 'bg-gray-100 text-gray-800 hover:bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmado':
        return <CheckCircle className="h-4 w-4" />;
      case 'pendente':
        return <Clock className="h-4 w-4" />;
      case 'reagendado':
        return <AlertCircle className="h-4 w-4" />;
      case 'cancelado':
        return <XCircle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Agendamentos</h1>
          <p className="text-muted-foreground mt-2">
            Gerencie todos os seus agendamentos
          </p>
        </div>
        <Button 
          onClick={() => setShowNewAppointment(!showNewAppointment)}
          className="bg-primary hover:bg-primary/90"
        >
          <Plus className="h-4 w-4 mr-2" />
          Novo Agendamento
        </Button>
      </div>

      {/* Filtros e Busca */}
      <Card className="p-6 shadow-[var(--shadow-medium)]">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar por cliente ou serviço..."
                className="pl-9"
              />
            </div>
          </div>
          
          <div className="flex gap-2">
            <Input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-auto"
            />
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filtros
            </Button>
          </div>
        </div>
      </Card>

      {/* Novo Agendamento Form */}
      {showNewAppointment && (
        <Card className="p-6 shadow-[var(--shadow-medium)]">
          <h3 className="text-lg font-semibold mb-4">Novo Agendamento</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="client">Cliente</Label>
              <Input id="client" placeholder="Nome do cliente" />
            </div>
            <div>
              <Label htmlFor="service">Serviço</Label>
              <Input id="service" placeholder="Selecionar serviço" />
            </div>
            <div>
              <Label htmlFor="date">Data</Label>
              <Input id="date" type="date" />
            </div>
            <div>
              <Label htmlFor="time">Horário</Label>
              <Input id="time" type="time" />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="notes">Observações</Label>
              <Textarea id="notes" placeholder="Observações adicionais..." />
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <Button>Salvar Agendamento</Button>
            <Button 
              variant="outline" 
              onClick={() => setShowNewAppointment(false)}
            >
              Cancelar
            </Button>
          </div>
        </Card>
      )}

      {/* Lista de Agendamentos */}
      <Card className="shadow-[var(--shadow-medium)]">
        <div className="p-6 border-b border-border">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">
              Agendamentos - {new Date(selectedDate).toLocaleDateString('pt-BR')}
            </h2>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              {appointments.length} agendamentos
            </div>
          </div>
        </div>
        
        <div className="divide-y divide-border">
          {appointments.map((appointment) => (
            <div key={appointment.id} className="p-6 hover:bg-accent/20 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="text-center min-w-[80px]">
                    <div className="text-lg font-semibold text-foreground">
                      {appointment.time}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {appointment.duration}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-medium text-foreground">
                        {appointment.client}
                      </h3>
                      <Badge className={getStatusColor(appointment.status)}>
                        <span className="flex items-center gap-1">
                          {getStatusIcon(appointment.status)}
                          {appointment.status}
                        </span>
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {appointment.service}
                    </p>
                    {appointment.notes && (
                      <p className="text-xs text-muted-foreground mt-1 italic">
                        {appointment.notes}
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="text-lg font-semibold text-foreground">
                      {appointment.price}
                    </div>
                  </div>
                  
                  <div className="flex gap-1">
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
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