export interface IUserDao {
    find<User>(filter: Object): Promise<User[]>
}