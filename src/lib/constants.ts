import {
  NavigationIcon,
  DogIcon,
  PenToolIcon,
  PocketKnifeIcon,
  TwitterIcon,
  GithubIcon,
  LinkedinIcon
} from 'lucide-react'

export const PROFILES = {
  instagram: {
    title: 'Instagram',
    url: 'https://www.instagram.com/ltvi3t',
    icon: InstagramIcon
  },
  pinterest: {
    title: 'Pinterest',
    url: 'https://www.pinterest.com/lethanhviet'
  }
}

export const LINKS = [
  {
    href: '/',
    label: 'Home',
    Icon: DogIcon
  },
  {
    href: '/writing',
    label: 'Writing',
    Icon: PenToolIcon
  },
  {
    href: '/journey',
    label: 'Journey',
    Icon: NavigationIcon
  },
  {
    href: '/stack',
    label: 'Stack',
    Icon: PocketKnifeIcon
  }
]

export const SCROLL_AREA_ID = 'scroll-area'
export const MOBILE_SCROLL_THRESHOLD = 20
export const SUPABASE_TABLE_NAME = 'pages'
