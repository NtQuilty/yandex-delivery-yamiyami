import { NavLink, Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import Button from '../../Button/Button';
import cn from 'classnames';

export function Layout() {

	return <div className={styles['layout']}>
		<div className={styles['sidebar']}>
			<div className={styles['user']}>
				<img src="/avatar.png" alt="User avatar" className={styles['avatar']} />
				<div className={styles['name']}>Исламов Даниф</div>
				<div className={styles['email']}>islamovdanif@gmail.com</div>
			</div>
			<div className={styles['menu']}>
				<NavLink to="/" className={({ isActive }) => cn(styles['link'], {
					[styles.active]: isActive
				})}>
					<img src="/menu-icon.svg" alt="Icon menu" />
					Menu
				</NavLink>
				<NavLink to="/cart" className={({ isActive }) => cn(styles['link'], {
					[styles.active]: isActive
				})} >
					<img src="/cart-icon.svg" alt="Icon exit" />
					Cart
				</NavLink>
			</div>
			<Button className={styles['exit']}>
				<img src="/exit-icon.svg" alt="Icon exit" />
				Выход
			</Button>
		</div>
		<div className={styles['content']}>
			<Outlet />
		</div>
	</div>;
}