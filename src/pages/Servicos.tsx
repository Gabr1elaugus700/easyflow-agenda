import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Plus, 
  Search, 
  Filter,
  MoreHorizontal,
  Edit,
  Clock,
  DollarSign,
  Scissors,
  Palette,
  Sparkles,
  Users
} from 'lucide-react';

export default function Servicos() {
  const [showNewService, setShowNewService] = useState(false);

  const services = [
    {
      id: 1,
      name: 'Corte Feminino',
      description: 'Corte moderno e estilizado para mulheres',
      price: 'R$ 120,00',
      duration: '1h',
      category: 'Corte',
      popularity: 95,
      bookings: 156,
      status: 'ativo',
      icon: Scissors
    },
    {
      id: 2,
      name: 'Coloração Completa',
      description: 'Coloração profissional com produtos premium',
      price: 'R$ 280,00',
      duration: '2h 30min',
      category: 'Coloração',
      popularity: 88,
      bookings: 89,
      status: 'ativo',
      icon: Palette
    },
    {
      id: 3,
      name: 'Corte + Escova',
      description: 'Corte com finalização em escova modeladora',
      price: 'R$ 150,00',
      duration: '1h 30min',
      category: 'Combo',
      popularity: 92,
      bookings: 134,
      status: 'ativo',
      icon: Sparkles
    },
    {
      id: 4,
      name: 'Barba Completa',
      description: 'Aparar, modelar e finalizar barba masculina',
      price: 'R$ 80,00',
      duration: '45min',
      category: 'Masculino',
      popularity: 78,
      bookings: 67,
      status: 'ativo',
      icon: Scissors
    },
    {
      id: 5,
      name: 'Tratamento Capilar',
      description: 'Hidratação intensiva e tratamento nutritivo',
      price: 'R$ 200,00',
      duration: '1h 15min',
      category: 'Tratamento',
      popularity: 71,
      bookings: 45,
      status: 'inativo',
      icon: Sparkles
    },
    {
      id: 6,
      name: 'Penteado Festa',
      description: 'Penteado elaborado para eventos especiais',
      price: 'R$ 180,00',
      duration: '1h 45min',
      category: 'Especiais',
      popularity: 65,
      bookings: 28,
      status: 'ativo',
      icon: Sparkles
    }
  ];

  const categories = [
    { name: 'Corte', count: 8, color: 'bg-blue-100 text-blue-800' },
    { name: 'Coloração', count: 5, color: 'bg-purple-100 text-purple-800' },
    { name: 'Tratamento', count: 6, color: 'bg-green-100 text-green-800' },
    { name: 'Masculino', count: 4, color: 'bg-orange-100 text-orange-800' },
    { name: 'Especiais', count: 3, color: 'bg-pink-100 text-pink-800' }
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

  const getCategoryBadge = (category: string) => {
    const cat = categories.find(c => c.name === category);
    return (
      <Badge className={cat?.color || 'bg-gray-100 text-gray-800'}>
        {category}
      </Badge>
    );
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Serviços</h1>
          <p className="text-muted-foreground mt-2">
            Gerencie seu catálogo de serviços
          </p>
        </div>
        <Button 
          onClick={() => setShowNewService(!showNewService)}
          className="bg-primary hover:bg-primary/90"
        >
          <Plus className="h-4 w-4 mr-2" />
          Novo Serviço
        </Button>
      </div>

      {/* Stats e Categorias */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Stats */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-6 bg-gradient-to-br from-card to-accent/20 border-0 shadow-[var(--shadow-medium)]">
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">26</p>
              <p className="text-sm text-muted-foreground">Total de Serviços</p>
            </div>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <div className="text-center">
              <p className="text-2xl font-bold text-green-800">22</p>
              <p className="text-sm text-green-600">Serviços Ativos</p>
            </div>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-800">R$ 156</p>
              <p className="text-sm text-blue-600">Preço Médio</p>
            </div>
          </Card>
        </div>

        {/* Categorias */}
        <Card className="p-6 shadow-[var(--shadow-medium)]">
          <h3 className="font-semibold mb-4">Categorias</h3>
          <div className="space-y-3">
            {categories.map((category) => (
              <div key={category.name} className="flex items-center justify-between">
                <span className="text-sm text-foreground">{category.name}</span>
                <Badge className={category.color}>
                  {category.count}
                </Badge>
              </div>
            ))}
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
                placeholder="Buscar serviços..."
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

      {/* Novo Serviço Form */}
      {showNewService && (
        <Card className="p-6 shadow-[var(--shadow-medium)]">
          <h3 className="text-lg font-semibold mb-4">Novo Serviço</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="serviceName">Nome do Serviço</Label>
              <Input id="serviceName" placeholder="Nome do serviço" />
            </div>
            <div>
              <Label htmlFor="category">Categoria</Label>
              <Input id="category" placeholder="Categoria do serviço" />
            </div>
            <div>
              <Label htmlFor="price">Preço</Label>
              <Input id="price" placeholder="R$ 0,00" />
            </div>
            <div>
              <Label htmlFor="duration">Duração</Label>
              <Input id="duration" placeholder="1h 30min" />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="description">Descrição</Label>
              <Textarea id="description" placeholder="Descrição do serviço..." />
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <Button>Salvar Serviço</Button>
            <Button 
              variant="outline" 
              onClick={() => setShowNewService(false)}
            >
              Cancelar
            </Button>
          </div>
        </Card>
      )}

      {/* Lista de Serviços */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <Card key={service.id} className="p-6 shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-large)] transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{service.name}</h3>
                    {getCategoryBadge(service.category)}
                  </div>
                </div>
                <div className="flex gap-1">
                  {getStatusBadge(service.status)}
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mb-4">
                {service.description}
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-green-600" />
                    <span className="text-lg font-semibold text-foreground">
                      {service.price}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {service.duration}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-muted-foreground">
                      {service.bookings} agendamentos
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {service.popularity}% popularidade
                  </div>
                </div>
                
                {/* Barra de popularidade */}
                <div className="w-full bg-accent rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all"
                    style={{ width: `${service.popularity}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="flex gap-2 mt-4 pt-4 border-t border-border">
                <Button variant="ghost" size="sm" className="flex-1">
                  <Edit className="h-4 w-4 mr-2" />
                  Editar
                </Button>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}