import fs from 'node:fs';
import path from 'node:path';
import yaml from 'yaml';

export interface Contact {
  type: 'email' | 'github' | 'linkedin' | string;
  value?: string;
  url?: string;
}

export interface Section {
  id: string;
  title: string;
}

export interface SeoConfig {
  description?: string;
  ogImage?: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  intro: string;
  profileImage?: string;
  showNavigation?: boolean;
  contacts: Contact[];
  sections: Section[];
  theme: 'blue' | 'green' | 'purple' | 'neutral';
  seo?: SeoConfig;
}

let cachedConfig: SiteConfig | null = null;

export function getConfig(): SiteConfig {
  if (cachedConfig) return cachedConfig;

  const configPath = path.resolve(process.cwd(), 'config.yaml');
  const file = fs.readFileSync(configPath, 'utf-8');
  const parsed = yaml.parse(file) as SiteConfig;

  parsed.theme = parsed.theme ?? 'blue';
  cachedConfig = parsed;

  return parsed;
}
