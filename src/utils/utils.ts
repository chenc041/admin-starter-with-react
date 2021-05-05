import { Route } from '../configs/routes';
import { SettingOutlined } from '@ant-design/icons';

/**
 * 扁平数组数据
 * @param routes
 * @param baseUrl
 */
export const flatRouter = (routes: Route[], baseUrl = '') => {
  const flatArr: Route[] = [];
  const flat = (routes: Route[], baseUrl = '') => {
    for (const route of routes) {
      flatArr.push({
        ...route,
        icon: route.icon ?? SettingOutlined,
        path: `${ baseUrl }${ route.path }`,
      });
      if (route.children && route.children.length > 0) {
        flat(route.children, route.path);
      }
    }
    return flatArr;
  };
  flat(routes, baseUrl)
  return flatArr;
}
