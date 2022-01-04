import { Route } from '../routes';
import { cloneDeep } from 'lodash-es';
import { SettingOutlined } from '@ant-design/icons';

/**
 * 扁平数组数据
 * @param routes
 * @param baseUrl
 */
export const flatRouter = (routes: Route[], baseUrl = '') => {
  const copyRoutes = cloneDeep(routes);
  const hasLayout: Route[] = [];
  const noLayout: Route[] = [];
  const flat = (copyRoutes: Route[], baseUrl = '') => {
    for (const route of copyRoutes) {
      if (route.layout === false) {
        noLayout.push({
          ...route,
          icon: route.icon ?? SettingOutlined,
          path: `${baseUrl}${route.path}`,
        });
      } else {
        hasLayout.push({
          ...route,
          icon: route.icon ?? SettingOutlined,
          path: `${baseUrl}${route.path}`,
        });
      }
      if (route.children && route.children.length > 0) {
        flat(route.children, route.path);
      }
    }
  };
  flat(copyRoutes, baseUrl);
  return { noLayout, hasLayout };
};
