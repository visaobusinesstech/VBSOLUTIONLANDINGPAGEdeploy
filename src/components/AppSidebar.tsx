
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { 
  Briefcase, 
  Users, 
  Rocket, 
  Phone,
  ChevronRight,
  Calendar
} from 'lucide-react';

const menuItems = [
  {
    title: "Serviços",
    url: "/",
    icon: Briefcase,
  },
  {
    title: "Quem Somos",
    url: "/sobre",
    icon: Users,
  },
  {
    title: "RocketMail",
    url: "/rocket-mail",
    icon: Rocket,
    highlight: true,
  },
  {
    title: "Contato",
    url: "/contato",
    icon: Phone,
  },
];

export function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar>
      <SidebarContent 
        className="border-r border-blue-400/20 flex items-center justify-center backdrop-blur-md bg-blue-950/80"
      >
        <SidebarGroup className="flex-1 flex flex-col justify-center items-center">
          <SidebarGroupLabel className="text-gray-300 text-xs uppercase tracking-wider mb-6 text-center">
            Navegação
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-4">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link 
                      to={item.url}
                      className={`flex items-center gap-4 px-6 py-4 rounded-lg transition-all duration-300 group mx-4
                        ${location.pathname === item.url 
                          ? 'bg-blue-600/40 text-blue-200 border border-blue-400/60 shadow-lg backdrop-blur-sm' 
                          : 'text-gray-200 hover:bg-blue-600/30 hover:text-blue-200 hover:shadow-md hover:border hover:border-blue-400/40 hover:backdrop-blur-sm'
                        }
                        ${item.highlight ? 'text-blue-200 font-semibold' : ''}
                      `}
                      style={{
                        filter: location.pathname === item.url ? 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.4))' : 'none'
                      }}
                    >
                      <item.icon className={`w-5 h-5 ${item.highlight ? 'text-blue-200' : ''} group-hover:scale-110 transition-transform`} />
                      <span className="flex-1 font-medium">{item.title}</span>
                      {item.highlight && (
                        <ChevronRight className="w-4 h-4 text-blue-200 group-hover:translate-x-1 transition-transform" />
                      )}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              
              {/* Botão Agende uma Reunião em destaque */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <button 
                    className="w-full mt-6 mx-4 bg-gradient-to-r from-orange-500/80 to-red-600/80 text-white px-6 py-4 rounded-lg font-bold hover:from-orange-600/90 hover:to-red-700/90 transition-all duration-300 flex items-center justify-center gap-3 border border-orange-400/40 shadow-lg group backdrop-blur-sm"
                    style={{
                      filter: 'drop-shadow(0 0 15px rgba(249, 115, 22, 0.5))'
                    }}
                  >
                    <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Agende uma Reunião
                  </button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
