import type { AppRouteModule } from '@/router/types';

import { LAYOUT } from '@/router/constant';
import { t } from '@/hooks/web/useI18n';

const about: AppRouteModule = {
  path: '/home',
  name: 'Home',
  component: LAYOUT,
  redirect: '/home/index',
  meta: {
    hideChildrenInMenu: true,
    icon: 'simple-icons:aboutdotme',
    title: t('routes.dashboard.about'),
    orderNo: 100000,
  },
  children: [
    {
      path: 'index',
      name: 'HomePage',
      component: () => import('./index.vue'),
      meta: {
        title: t('routes.dashboard.about'),
        icon: 'simple-icons:aboutdotme',
        hideMenu: true,
      },
    },
  ],
};

export default about;
