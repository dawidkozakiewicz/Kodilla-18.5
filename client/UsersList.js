import React, {Component} from 'react';
import styles from './UsersList.css';

const UsersList = props => {
	return (	
		<div className={styles.Users}>
			<div className={styles.UsersOnline}>{props.users.length} OSÓB NA CZACIE</div>
			<ul className={styles.UsersList}>
				{
					props.users.map((user) => {
						return (
							<li key={user.id} className={styles.UserItem}>{user.name}</li>
						);
					})
				}
			</ul>
		</div>
	);
};

export default UsersList;