import React, { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Layout, Menu, Dropdown } from 'antd';
import styles from './index.module.less';
import { Routes } from '../../configs/routes';

const { Header, Sider, Content } = Layout;

const { SubMenu } = Menu;
const defaultUserAvatar = 'https://avatars.githubusercontent.com/u/16097887?v=4';

const LayoutPage = () => {
  const menu = () => {
    return (
      <Menu>
        <Menu.Item>
          <a target='_blank' rel='noopener noreferrer'>
            退出登录
          </a>
        </Menu.Item>
      </Menu>
    );
  };
  return (
    <Layout>
      <Sider className={styles.sideWrap} trigger={null} collapsible collapsed={false}>
        <div className={styles.logo}>
          <div className={styles.companyIcon}>
            <img src='https://avatars.githubusercontent.com/u/16097887?v=4' alt='' />
          </div>
          <div className={styles.companyName}>chen</div>
        </div>
        <Menu theme='dark' mode='inline' className={styles.menuWrap} defaultSelectedKeys={['/']}>
          {Routes.length > 0 &&
            Routes.map(({ path, icon: MenuIcon, hideMenu, name, children }) => {
              return (
                <Fragment key={path}>
                  {(!children || children?.length === 0) && !hideMenu && (
                    <Menu.Item key={path} icon={MenuIcon ? MenuIcon : null}>
                      <Link to={path}>{name}</Link>
                    </Menu.Item>
                  )}
                  {children && children.length > 0 && (
                    <SubMenu key={path} title={name} icon={MenuIcon ? MenuIcon : null}>
                      {children.map(({ path: ChildPath, name: ChildName, hideMenu: childHide, icon }) => {
                        return !childHide ? (
                          <Menu.Item key={ChildPath} icon={icon ? MenuIcon : null}>
                            <Link to={`${path}${ChildPath}`}>{ChildName}</Link>
                          </Menu.Item>
                        ) : null;
                      })}
                    </SubMenu>
                  )}
                </Fragment>
              );
            })}
        </Menu>
      </Sider>
      <Layout className={styles.siteLayout}>
        <Header className={styles.siteHeader} style={{ padding: 0 }}>
          <Dropdown overlay={menu}>
            <div className={styles.userInfo}>
              <div className={styles.userAvatar}>
                <img src={defaultUserAvatar} alt='chen' />
              </div>
              <div className={styles.userName}>chen</div>
            </div>
          </Dropdown>
        </Header>
        <Content className={styles.siteContent}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutPage;
