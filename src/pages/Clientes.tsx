import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Plus, 
  Search, 
  Filter,
  MoreHorizontal,
  Edit,
  Phone,
  Mail,
  Calendar,
  Star,
  MapPin
} from 'lucide-react';

export default function Clientes() {
  const [showNewClient, setShowNewClient] = useState(false);

  const clients = [
    {
      id: 1,
      name: 'Maria Silva',
      email: 'maria.silva@email.com',
      phone: '(11) 99999-9999',
      address: 'Rua das Flores, 123 - São Paulo',
      lastVisit: '2024-01-10',
      totalVisits: 15,
      totalSpent: 'R$ 2.250,00',
      rating: 5,
      status: 'ativo',
      notes: 'Cliente VIP - Prefere horários pela manhã'
    },
    {
      id: 2,
      name: 'João Santos',
      email: 'joao.santos@email.com',
      phone: '(11) 88888-8888',
      address: 'Av. Paulista, 456 - São Paulo',
      lastVisit: '2024-01-05',
      totalVisits: 8,
      totalSpent: 'R$ 640,00',
      rating: 4,
      status: 'ativo',
      notes: ''
    },
    {
      id: 3,
      name: 'Ana Costa',
      email: 'ana.costa@email.com',
      phone: '(11) 77777-7777',
      address: 'Rua Augusta, 789 - São Paulo',
      lastVisit: '2023-12-20',
      totalVisits: 22,
      totalSpent: 'R$ 3.100,00',
      rating: 5,
      status: 'inativo',
      notes: 'Mudou de cidade - reagendar quando voltar'
    },
    {
      id: 4,
      name: 'Pedro Oliveira',
      email: 'pedro.oliveira@email.com',
      phone: '(11) 66666-6666',
      address: 'Rua da Consolação, 321 - São Paulo',
      lastVisit: '2024-01-12',
      totalVisits: 5,
      totalSpent: 'R$ 400,00',
      rating: 4,
      status: 'ativo',
      notes: 'Novo cliente - fidelização'
    },
    {
      id: 5,
      name: 'Carla Mendes',
      email: 'carla.mendes@email.com',
      phone: '(11) 55555-5555',
      address: 'Rua Vergueiro, 654 - São Paulo',
      lastVisit: '2024-01-08',
      totalVisits: 12,
      totalSpent: 'R$ 1.800,00',
      rating: 5,
      status: 'ativo',
      notes: 'Alérgica a produtos com parabeno'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'ativo':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Ativo</Badge>;
      case 'inativo':
        return <Badge variant="outline" className="border-gray-300 text-gray-600">Inativo</Badge>;
      default:
        return <Badge variant="outline">Desconhecido</Badge>;
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating 
            ? 'fill-yellow-400 text-yellow-400' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Clientes</h1>
          <p className="text-muted-foreground mt-2">
            Gerencie sua base de clientes
          </p>
        </div>
        <Button 
          onClick={() => setShowNewClient(!showNewClient)}
          className="bg-primary hover:bg-primary/90"
        >
          <Plus className="h-4 w-4 mr-2" />
          Novo Cliente
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6 bg-gradient-to-br from-card to-accent/20 border-0 shadow-[var(--shadow-medium)]">
          <div className="text-center">
            <p className="text-2xl font-bold text-foreground">248</p>
            <p className="text-sm text-muted-foreground">Total de Clientes</p>
          </div>
        </Card>
        <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
          <div className="text-center">
            <p className="text-2xl font-bold text-green-800">235</p>
            <p className="text-sm text-green-600">Clientes Ativos</p>
          </div>
        </Card>
        <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
          <div className="text-center">
            <p className="text-2xl font-bold text-blue-800">32</p>
            <p className="text-sm text-blue-600">Novos este Mês</p>
          </div>
        </Card>
        <Card className="p-6 bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200">
          <div className="text-center">
            <p className="text-2xl font-bold text-purple-800">4.8</p>
            <p className="text-sm text-purple-600">Avaliação Média</p>
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
                placeholder="Buscar por nome, email ou telefone..."
                className="pl-9"
              />
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filtros
            </Button>
          </div>
        </div>
      </Card>

      {/* Novo Cliente Form */}
      {showNewClient && (
        <Card className="p-6 shadow-[var(--shadow-medium)]">
          <h3 className="text-lg font-semibold mb-4">Novo Cliente</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Nome Completo</Label>
              <Input id="name" placeholder="Nome do cliente" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="email@exemplo.com" />
            </div>
            <div>
              <Label htmlFor="phone">Telefone</Label>
              <Input id="phone" placeholder="(11) 99999-9999" />
            </div>
            <div>
              <Label htmlFor="birthdate">Data de Nascimento</Label>
              <Input id="birthdate" type="date" />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="address">Endereço</Label>
              <Input id="address" placeholder="Endereço completo" />
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <Button>Salvar Cliente</Button>
            <Button 
              variant="outline" 
              onClick={() => setShowNewClient(false)}
            >
              Cancelar
            </Button>
          </div>
        </Card>
      )}

      {/* Lista de Clientes */}
      <Card className="shadow-[var(--shadow-medium)]">
        <div className="p-6 border-b border-border">
          <h2 className="text-xl font-semibold">Lista de Clientes</h2>
        </div>
        
        <div className="divide-y divide-border">
          {clients.map((client) => (
            <div key={client.id} className="p-6 hover:bg-accent/20 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground font-semibold text-lg">
                    {client.name.charAt(0)}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-medium text-foreground text-lg">
                        {client.name}
                      </h3>
                      {getStatusBadge(client.status)}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Mail className="h-4 w-4" />
                        {client.email}
                      </div>
                      <div className="flex items-center gap-1">
                        <Phone className="h-4 w-4" />
                        {client.phone}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {client.address}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        Última visita: {new Date(client.lastVisit).toLocaleDateString('pt-BR')}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1 mt-2">
                      {renderStars(client.rating)}
                      <span className="text-sm text-muted-foreground ml-2">
                        ({client.rating}.0)
                      </span>
                    </div>
                    
                    {client.notes && (
                      <p className="text-xs text-muted-foreground mt-2 italic bg-accent/30 p-2 rounded">
                        {client.notes}
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="mb-2">
                    <p className="text-sm text-muted-foreground">Total gasto</p>
                    <p className="text-lg font-semibold text-foreground">
                      {client.totalSpent}
                    </p>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground">Visitas</p>
                    <p className="text-lg font-semibold text-foreground">
                      {client.totalVisits}
                    </p>
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