import {createContext, useState, ReactNode} from 'react';

interface IUser {
    name: string,
    email: string,
    password: string,
    confirm_password: string
}

interface IUserProviderData {
    user: IUser
}

interface IUserProviderProps {
    children: ReactNode;
}

export const userContext = createContext<IUserProviderData>({} as IUserProviderData)

const UserProvider = ({children}: IUserProviderProps) => {

    const [user, setUser] = useState<IUser>({} as IUser);

    return(
        <userContext.Provider value={{user}}>
            {children}
        </userContext.Provider>
    );
}

export default UserProvider;