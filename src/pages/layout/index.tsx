import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Dropdown } from 'antd';

const { Header, Sider, Content } = Layout;
import styles from './index.module.less';
import { Routes } from '../../configs/routes';
const { SubMenu } = Menu;
const defaultUserAvatar = 'https://avatars.githubusercontent.com/u/16097887?v=4';

const LayoutPage = (props: any) => {
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
  const { children, path } = props;
  return (
    <Layout>
      <Sider className={styles.sideWrap} trigger={null} collapsible collapsed={false}>
        <div className={styles.logo}>
          <div className={styles.companyIcon}>
            <img src='https://avatars.githubusercontent.com/u/16097887?v=4' alt='' />
          </div>
          <div className={styles.companyName}>chenc</div>
        </div>
        <Menu theme='dark' mode='inline' className={styles.menuWrap} defaultSelectedKeys={['/']}>
          {Routes.length > 0 &&
            Routes.map(({ path, icon: PathIcon, name, children }) => {
              return (
                <Fragment key={path}>
                  {(!children || children?.length === 0) && (
                    // @ts-ignore
                    <Menu.Item key={path} icon={PathIcon ? <PathIcon /> : null}>
                      <Link to={path}>{name}</Link>
                    </Menu.Item>
                  )}
                  {children && children.length > 0 && (
                    // @ts-ignore
                    <SubMenu key={path} title={name} icon={<PathIcon />}>
                      {children.map(({ path: ChildPath, name: ChildName }) => {
                        return (
                          // @ts-ignore
                          <Menu.Item key={ChildPath} icon={<PathIcon />}>
                            <Link to={`${path}${ChildPath}`}>{ChildName}</Link>
                          </Menu.Item>
                        );
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
                <img src={defaultUserAvatar} alt='chenc' />
              </div>
              <div className={styles.userName}>chenc</div>
            </div>
          </Dropdown>
        </Header>
        <Content className={styles.siteContent}>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default LayoutPage;
