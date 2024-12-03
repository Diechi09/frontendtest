import { Home, Database, Upload, Search, Users } from 'lucide-react';

export const NavItems = [
  { to: '/', icon: Home, label: 'Home' },
  { to: '/database', icon: Database, label: 'Database' },
  { to: '/upload', icon: Upload, label: 'Upload' },
  { to: '/query', icon: Search, label: 'Query' },
  { to: '/team', icon: Users, label: 'Team' }
] as const;